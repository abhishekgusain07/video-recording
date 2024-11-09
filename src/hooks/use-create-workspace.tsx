'use client'

import { createWorkspace } from "@/actions/workspace"
import { useMutationData } from "./useMutationData"
import useZodForms from "./use-zod-forms"
import { workspaceSchema } from "@/components/forms/workspace-forms/schema"

export const useCreateWorkspace = () => {

    // sets up a mutation for creating workspace.
    const {mutate, isPending} = useMutationData(

        /*
            cache key,
            mutation function
            cache to invalidate after mutation.
        */
        ['create-workspace'],
        (data: {name: string}) => createWorkspace(data.name),
        "user-workspaces"
    )

    const {errors, onFormSubmit, register } = useZodForms(workspaceSchema,mutate);

    return {errors, onFormSubmit, register, isPending};
}