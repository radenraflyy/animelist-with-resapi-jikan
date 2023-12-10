"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false)
  const router = useRouter()

  const handleCollection = async (event) => {
    event.preventDefault()
    const data = {
      anime_mal_id,
      user_email,
      anime_image,
      anime_title,
    }
    const response = await axios({
      method: "post",
      url: "/api/v1/collection",
      data: data,
    })

    const collection = await response.data
    if (collection.status) {
      setIsCreated(collection.isCreated)
      router.refresh()
    }
  }
  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">
          Berhasil di tambahkan ke Collection
        </p>
      ) : (
        <button
          onClick={handleCollection}
          className="px-2 py-2 bg-color-accent"
        >
          Add To Collection
        </button>
      )}
    </>
  )
}

export default CollectionButton
