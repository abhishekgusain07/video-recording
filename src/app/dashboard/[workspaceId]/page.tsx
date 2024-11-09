import React from "react"

import { Tabs } from "@/components/ui/tabs"
import CreateWorkspace from "@/components/global/create-workspace"

type WorkspacePageProps = {
    param: {workspaceId: string}
}
const WorkspacePage = ({ param }: WorkspacePageProps) => {
    return (
        <div>
           <CreateWorkspace />
        </div>
    )
}
export default WorkspacePage