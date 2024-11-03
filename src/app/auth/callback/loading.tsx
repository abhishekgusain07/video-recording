import { Spinner } from "@/components/global/loader/spinner"
import React from "react"

const AuthLoading = () => {
    return <div className="h-screen w-full flex items-center justify-center">
        <Spinner />
    </div>
}