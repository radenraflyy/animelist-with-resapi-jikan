"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import React, { useRef } from "react"

export default function InputSearch() {
  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (e) => {
    const keywords = searchRef.current.value
    if (!keywords || keywords.trim() == "") return
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault()
      router.push(`/search/${keywords}`)
    }
  }
  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="p-2 rounded w-full"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  )
}
