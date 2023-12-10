"use client"
import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import React from "react"

export default function Page() {
  const router = useRouter()
  return (
    <>
      <div className="text-color-accent font-bold w-full h-screen flex flex-col justify-center items-center">
        <div className="flex items-center gap-2 text-4xl">
          <FileSearch size={50} />
          <h3>NOT FOUND</h3>
        </div>
        <div className="mt-1">
          <button
            onClick={() => router.back()}
            className="text-color-primary hover:text-color-accent hover:border-b-2 text-xl font-normal"
          >
            Kembali
          </button>
        </div>
      </div>
    </>
  )
}
