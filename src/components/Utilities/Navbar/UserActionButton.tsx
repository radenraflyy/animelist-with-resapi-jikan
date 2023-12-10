import React from "react"
import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async () => {
  const user = await authUserSession()
  // console.log(user?.user?.name)
  const actionLabel = user ? "Sign Out" : "Sign In"
  const actionUrl = user ? "api/auth/signout" : "api/auth/signin"
  return (
    <div className="flex justify-between gap-4">
      {user ? <Link href="/Users/dashboard" className="py-1">Dashboard</Link> : null}
      <Link href={actionUrl} className="bg-color-dark text-color-accent py-2 px-12 inline-block">{actionLabel}</Link>
    </div>
  )
}

export default UserActionButton
