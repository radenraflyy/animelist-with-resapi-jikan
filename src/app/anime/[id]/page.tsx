import { getAnimeResponses } from "../../../libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import React from "react"
import prisma from "@/libs/prisma"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSession } from "@/libs/auth-libs"
import CommentInput from "@/components/AnimeList/CommentInput"
import CommentBox from "@/components/AnimeList/CommentBox"

export default async function Page({ params: { id } }) {
  const animeDetail = await getAnimeResponses(`anime/${id}`)
  const user = await authUserSession()
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.user?.email, anime_mal_id: id },
  })
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {animeDetail.data.title} - {animeDetail.data.year}
        </h3>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.user?.email}
            anime_image={animeDetail.data.images.webp.image_url}
            anime_title={animeDetail.data.title}
          />
        )}
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Peringkat</h3>
          <p>{animeDetail.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Skor</h3>
          <p>{animeDetail.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Anggota</h3>
          <p>{animeDetail.data.members.toLocaleString("id-ID")}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Episode</h3>
          <p>{animeDetail.data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={animeDetail.data.images.webp.image_url}
          alt={animeDetail.data.images.jpg.image_url}
          width={250}
          height={250}
        />
        <p className="text-justify text-xl">{animeDetail.data.synopsis}</p>
      </div>
      <div className="p-4">
        <h3 className="text-color-primary mb-2">Komentar Penonton</h3>
        <CommentBox anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.user?.email}
            username={user?.user?.name}
            anime_title={animeDetail.data.title}
          />
        )}
      </div>
      <div>
        <VideoPlayer youtubeId={animeDetail.data.trailer.youtube_id} />
      </div>
    </>
  )
}
