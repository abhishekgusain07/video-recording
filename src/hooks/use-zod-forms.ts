'use client'
import { MutationFunction, UseMutateFunction } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import z, {ZodSchema} from "zod"


/*
    schema: A zod schema for validation
    mutation: A mutation function 
    defaultValues: optional initial form values
*/
const useZodForm = (
    schema: ZodSchema,
    mutation: UseMutateFunction,
    defaultValues?: any
) => {

    /*
    useForm is from react-hook-form, configured with
    1. zod validation throught zodresolver
    2. type inference from the zod schema
    3. optional default values.
    */
    const {
        register, 
        watch, 
        reset, 
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver (schema),
        defaultValues: {...defaultValues}
    })

    //create a submit handler which passes form values to mutation
    const onFormSubmit = handleSubmit(async(values) => mutation({...values}))

    return {register, watch, reset, onFormSubmit, errors};
}

export default useZodForm