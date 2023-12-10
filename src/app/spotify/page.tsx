import axios from "axios"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const Page = async () => {
  const response = await axios({
    method: "get",
    url: `https://api.spotify.com/v1/me`,
    headers: {
      Authorization: `Bearer ${process.env.SPOTIFY_BEARER_TOKEN}`,
    },
  })

  return (
    <section>
      <div className="flex">
        <aside className="border">
          <div className="border text-color-primary">
            <h1>My Collection</h1>
            <div className="flex">
              <Image
                src={response.data.images[1].url}
                width={20}
                height={20}
                alt="..."
              />
              <div>
                <h2>Penghilang Jenuh</h2>
                <p>Playlist.RaFLY.</p>
              </div>
            </div>
          </div>
        </aside>
        <div>
          <h2>My Profile</h2>
        </div>
      </div>
    </section>
  )
}

export default Page
