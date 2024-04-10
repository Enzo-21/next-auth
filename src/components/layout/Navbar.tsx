"use client";

import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import UserButton from "../auth/buttons/user-button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

const NavItems = ({ type }: { type: 'mobile' | 'desktop' }) => {
  const pathname = usePathname()

  const tabs = [
    { name: 'Server', href: '/server' },
    { name: 'Client', href: '/client' },
    { name: 'Admin', href: '/admin' },
    { name: 'Settings', href: '/settings' },
  ]

  if (type === 'mobile') {
    return (
      <div className="flex justify-end md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="px-4 py-2">
            <RxHamburgerMenu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2 flex flex-col gap-2">
            {tabs.map((tab, index) => {

              const isOpen = pathname.includes(tab.href)
              return (
                <DropdownMenuItem key={index} className={cn(
                  'p-0 text-gray-500 text-sm rounded-md cursor-pointer', isOpen ? 'bg-slate-100 text-gray-900' : 'bg-transparent')}>

                  <Link className="w-full h-full px-4 py-2" href={tab.href}
                  >{tab.name} </Link>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }

  return (
    <div className="hidden z-50 md:ml-8 md:block md:self-stretch">

      <div className="flex gap-4 h-full">
        {tabs.map((tab, index) => {


          const isOpen = pathname.includes(tab.href)
          return (
            <div key={index} className="flex cursor-pointer">
              <div className="flex relative items-center">
                <Link href={tab.href}
                  className={
                    cn(
                      'px-4 py-2 text-gray-500 text-sm rounded-md', isOpen ? 'bg-slate-100 text-gray-900' : 'bg-white')} >{tab.name} </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Navbar = () => {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl')

 if (callbackUrl === '/auth/mobile' || pathname.includes('/auth/mobile')) {
    return null;
  }

  return (
    <nav className="bg-white sticky top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <div className="border-b border-gray 200">
          <div className={cn(styles.container, "flex h-16 items-center")}>

            {/* Logo/Name */}
            <div className="ml-4 flex lg:ml-0 cursor-pointer">
              <Link href={'/'}>
                <p>Next Auth</p>
              </Link>
            </div>

            <NavItems type="desktop" />
            <div className="ml-auto flex items-center">
              <div className="flex flex-1 items-center md:justify-end">
                <UserButton />
              </div>
            </div>
            <NavItems type="mobile" />

          </div>
        </div>
      </header>
      {/* <UserButton/> */}
    </nav>
  );
};

export default Navbar