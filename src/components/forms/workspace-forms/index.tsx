import FormGenerator from "@/components/global/form-generator"
import Loader from "@/components/global/loader"
import { Button } from "@/components/ui/button"
import { useCreateWorkspace } from "@/hooks/use-create-workspace"
import React from "react"

const WorkspaceForm = () => {
    const {errors, isPending, onFormSubmit, register} = useCreateWorkspace()
    return (
    <form
        onSubmit={onFormSubmit}
        className="flex flex-col gap-y-3"
    >
        <FormGenerator 
            name="name" 
            label="Workspace Name"
            placeholder={"Workspace's Name"}
            errors={errors}
            inputType="input"
            type="text"
            register={register}
        />
        <Button
            type="submit"
            disabled={isPending}
            className="text-sm w-full mt-2"
            >
                <Loader state={isPending}>Create Workspace </Loader>
            </Button>
    </form>
    )
}

export default WorkspaceForm