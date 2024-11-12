import { createFolder } from "@/actions/workspace"
import { useMutationData } from "./useMutationData"

export const useCreateFolders = (workspaceId: string) => {
    const {mutate, isPending} = useMutationData(['create-folder'], () => createFolder(workspaceId), "workspace-folders")
    const onCreateNewFolder = () => {
        mutate({name: 'untitled', id: 'optimistic--id'})
    }
    return {onCreateNewFolder}
}