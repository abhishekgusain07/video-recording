import { getNotifications, onAuthenticateUser } from "@/actions/user";
import { getAllUserVideos, getWorkspaceFolders, getWorkspaces, verifyAccessToWorkspace } from "@/actions/workspace";
import { redirect } from "next/navigation";
import {
    QueryClient
} from "@tanstack/react-query"
import React from "react";

type Props = {
    children: React.ReactNode
    params: {workspaceId: string}
}
const Layout = async({children, params:{workspaceId}}:Props) => {
    const auth = await onAuthenticateUser()
    if(!auth?.user?.workspace)return redirect('/auth/sign-in')
    if(!auth.user.workspace.length)return redirect('/auth/sign-in')

    const hasAccess = await verifyAccessToWorkspace(workspaceId);
     
    if(hasAccess.status !== 200) {
        return redirect(`/dashboard/${auth.user.workspace[0].id}`)
    }
    if(!hasAccess.data?.workspace)return null

    const query = new QueryClient()

    //prefetching queries here so that it will be cached and whenver ahead we need them, we can just pull them out of the cache using use-query function, and we have them keys as written below.

    await query.prefetchQuery({
        queryKey: ["workspace-folders"],
        queryFn: () => getWorkspaceFolders(workspaceId),
    })
    await query.prefetchQuery({
        queryKey: ["user-videos"],
        queryFn: () => getAllUserVideos(workspaceId),
    })
    await query.prefetchQuery({
        queryKey: ["user-workspaces"],
        queryFn: () => getWorkspaces(),
    })
    await query.prefetchQuery({
        queryKey: ["user-notifications"],
        queryFn: () => getNotifications(),
    })


    return (
        <>
           {children} 
        </>
    )
}

export default Layout;