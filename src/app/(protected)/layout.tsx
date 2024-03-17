import { ReactNode } from "react"

const SettingsLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-1 justify-center items-center bg-slate-200 max-w-full">
            {children}
        </div>
    )
}

export default SettingsLayout