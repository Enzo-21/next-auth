import UserInfo from "@/components/profile/user-info"
import { currentUser } from "@/lib/auth-user"

const ServerPage = async () => {
const user = await currentUser()

  return (
  <UserInfo label="💻 SSR component" user={user}/>
  )
}

export default ServerPage