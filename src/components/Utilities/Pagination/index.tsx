"use client"
import React from "react"

export default function Pagination({ page, lastPage, setPage }) {
  const toTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }
  const handlePageNext = () => {
    setPage((nextPage) => nextPage + 1)
    toTop()
  }

  const handlePagePrev = () => {
    setPage((prevPage) => prevPage - 1)
    toTop()
  }

  const handleLastPage = () => {
    setPage(lastPage)
  }
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-xl">
      {page > 1 && (
        <button
          onClick={handlePagePrev}
          className="transition-all hover:text-color-accent"
        >
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      {page < lastPage && (
        <button
          onClick={handlePageNext}
          className="transition-all hover:text-color-accent"
        >
          Next
        </button>
      )}
    </div>
  )
}
