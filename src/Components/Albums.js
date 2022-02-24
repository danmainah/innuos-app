import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { localAlbums } from '../redux/albums/localAlbum';
import  undefined_album_cover  from '../images/undefined_album_cover.png';
import qobuz from '../images/qobuz.png';
 
const Albums = () => {
    const state = useSelector((state) => state.local);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(localAlbums());
      }, [dispatch]);
  return (
    <div>
    {state.map((album) => (
      <div key={`${album.id}`} >
        {album.artist}
        <p>{album.album}</p>
        { album.cover !=  null? <img src={album.cover} alt= "album cover" />: <img src={undefined_album_cover} alt= "album cover" />}
        { album.source === "QOBUZ"? <img src={ qobuz} alt = "From Stream Logo" /> : null}
      </div>
    ))}
  </div>
  )
}

export default Albums;