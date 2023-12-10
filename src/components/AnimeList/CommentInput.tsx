"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function CommentInput({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}) {
  const [comment, setCommentInput] = useState("")
  const [isCreated, setIsCreated] = useState(false)
  const router = useRouter()

  const handleInput = (e) => {
    setCommentInput(e.target.value)
  }

  const handlePosting = async (event) => {
    event.preventDefault()
    const data = {
      anime_mal_id,
      user_email,
      comment,
      username,
      anime_title,
    }
    if (comment.length > 3) {
      const response = await axios({
        method: "post",
        url: "/api/v1/comment",
        data: data,
      })

      const postComment = await response.data
      if (postComment.isCreated) {
        setIsCreated(true)
        setCommentInput("")
        router.refresh()
      }
    } else {
      alert("Komentar harus lebih dari 3 karakter")
    }
    return
  }

  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-color-primary">Postingan Terkirim</p>}
      <textarea
        value={comment}
        className="h-32 w-full text-xl p-4"
        onChange={handleInput}
      />
      <button
        onClick={handlePosting}
        className="w-52 py-2 px-3 bg-color-accent"
      >
        Posting Komentar
      </button>
    </div>
  )
}
