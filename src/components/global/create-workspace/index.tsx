'use client'
import { getWorkSpaces } from "@/actions/workspace"
import { useQueryData } from "@/hooks/use-query-data"
import React from "react"
import Modal from "../modal"
import { Button } from "@/components/ui/button"
import FolderPlusDuotine from "@/components/icons/folder-plus-duotone"
import WorkspaceForm from "@/components/forms/workspace-forms"

type Props = {

}

const CreateWorkspace = () => {
    const {data} = useQueryData(['user-workspaces'], getWorkSpaces);
    const {data: plan} = data as {
        status: number,
        data:{
            subscription: {
                plan : 'PRO' | 'FREE'
            }  | null
        }
    }

    //NOTE: toggle these plan
    if(plan?.subscription?.plan == 'PRO') return <></>
    if(plan?.subscription?.plan === 'FREE')return (
        <Modal
        title="Create a Workspace"
        description=" Workspaces helps you collaborate with team members. You are assigned a default personal workspace where you can share videos in private with yourself."
        trigger={
          <Button className="bg-[#1D1D1D] text-[#707070] flex items-center gap-2 py-6 px-4 rounded-2xl">
            <FolderPlusDuotine />
            Create Workspace
          </Button>
        }
      >
        <WorkspaceForm />
      </Modal>
    )
    return (
        <div>
            Create Workspace
        </div>
    )
}

export default CreateWorkspace