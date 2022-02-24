import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../redux/albums/albums';
import  undefined_album_cover  from '../images/undefined_album_cover.png';
import qobuz from '../images/qobuz.png';
import Navbar from './Navbar';
 
const Albums = () => {
    const state = useSelector((state) => state.albums);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAlbums());
      }, [dispatch]);
  return (
    <div>
    <Navbar />
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