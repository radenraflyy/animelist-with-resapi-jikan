import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function AnimeList({ api }) {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api?.data?.length > 0 &&
        api?.data?.map((el, i) => (
          <>
            <Link
              key={i}
              href={`anime/${el?.mal_id}`}
              className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
            >
              <Image
                src={el?.images?.webp?.image_url}
                width={350}
                height={350}
                alt="..."
              />
              <h3 className="font-bold md:text-xl text-md p-4">{el?.title}</h3>
            </Link>
          </>
        ))}
    </div>
  )
}
