import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Link from "next/link"
import React from "react"

const page = async () => {
  const user = authUserSession()
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  })

  console.log(comments.length)

  return (
    <section className="mt-4 px-4 w-full">
      <div className="grid grid-cols-1 py-2 gap-4">
        <Header title={"My Comment"} />
        {comments.length < 1 ? (
          <p className="text-center text-color-primary font-semibold text-xl">NO DATA</p>
        ) : (
          comments.map((el) => (
            <Link
              href={`/anime/${el.anime_mal_id}`}
              key={el.id}
              className="bg-color-primary text-color-dark p-4"
            >
              <p className="text-sm">{el.anime_title}</p>
              <p className="italic">{el.comment}</p>
            </Link>
          ))
        )}
      </div>
    </section>
  )
}

export default page
