'use client'
import UserInfo from "@/components/profile/user-info"
import { useCurrentUser } from "@/hooks/useCurrentUser"

const ClientPage =  () => {
const user = useCurrentUser()

  return (
  <UserInfo label="💻 CSR component" user={user}/>
  )
}

export default ClientPage