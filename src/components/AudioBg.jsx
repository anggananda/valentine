import React from 'react'

const AudioBg = () => {
  return (
    <audio autoPlay loop controls={false}>
        <source src="/audio/backsound.mp4" type="audio/mp4" />
    </audio>
  )
}

export default AudioBg