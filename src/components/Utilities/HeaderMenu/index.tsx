import React from "react"

export default function HeaderMenu({ title }) {
  return (
    <div>
      <div className="p-8">
        <h3 className="text-center text-2xl text-color-primary font-semibold">
          {title}
        </h3>
      </div>
    </div>
  )
}
