import Image from "next/image"
import React from "react"
import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link"

const Page = async () => {
  const data = await authUserSession()
  return (
    <div className="mx-auto mt-5 w-72">
      <div className="flex flex-col justify-center items-center bg-color-primary rounded p-4">
        <h3 className="text-color-dark font-semibold">
          Welcome, {data?.user?.name}
        </h3>
        <Image
          src={data?.user?.image}
          alt="...."
          width={50}
          height={50}
          className="bg-cover bg-no-repeat bg-"
        />
      </div>
      <div className="mt-3 text-center flex justify-between gap-2">
        <div className="bg-color-accent p-2 w-full">
          <Link href={"/Users/my-collection"}>My Colection</Link>
        </div>
        <div className="bg-color-accent p-2 w-full">
          <Link href={"/Users/comment"}>My Comment</Link>
        </div>
      </div>
    </div>
  )
}

export default Page
