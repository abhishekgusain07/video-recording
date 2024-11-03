import React from "react"

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="container h-screen justify-center flex items-center">
            {children}
        </div>
    )
}
export default Layout