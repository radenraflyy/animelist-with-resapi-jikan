"use client"
import React, { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleVideoPlayer = () => {
    setIsOpen(!isOpen)
  }

  const option = {
    width: "300",
    height: "200",
  }

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-primary float-right bg-color-secondary px-3 mb-1"
          onClick={handleVideoPlayer}
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    )
  }

  const ButtonOpenPlayer = () => {
    return (
      <button
        className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark hover:bg-color-accent transition-all shadow-xl"
        onClick={handleVideoPlayer}
      >
        Tonton Trailer
      </button>
    )
  }

  return isOpen ? <Player /> : <ButtonOpenPlayer />
}

export default VideoPlayer
