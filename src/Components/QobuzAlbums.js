import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { qobuzAlbums } from '../redux/albums/qobuzAlbum';
import  undefined_album_cover  from '../images/undefined_album_cover.png';
import qobuz from '../images/qobuz.png';
import Navbar from './Navbar';
 
const QobuzAlbums = () => {
    const state = useSelector((state) => state.qobuz);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(qobuzAlbums());
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

export default QobuzAlbums;