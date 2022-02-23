import React from 'react'

const Album = (album) => {
  return (
    <div>
        <h3>{album.artist}</h3>
        <div>{album.album}</div>
    </div>
  )
};

export default Album;