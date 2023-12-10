import Link from "next/link"
import React from "react"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

export default function index() {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center p-4">
        <Link href={"/"} className="font-bold text-white text-2xl">
          AnimeList
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  )
}
