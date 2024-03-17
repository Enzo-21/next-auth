'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";
import { Button } from "@/components/ui/button";
import { CiLogin } from "react-icons/ci";

const UserButton = () => {

    const user = useCurrentUser()

    if (!user) {
        return (
            <LoginButton>
                <Button
                    variant={'default'} size={'sm'}>Sign In 
                    <CiLogin className="ml-2" size={16}/>
                    </Button>
            </LoginButton>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={user?.image || ''} />
                    <AvatarFallback className="bg-slate-300 text-slate-500">
                        <FaUser />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
                <LogoutButton>
                    <DropdownMenuItem className="cursor-pointer">
                        Logout  <MdLogout className="h-4 w-4 ml-2" />
                    </DropdownMenuItem>
                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserButton