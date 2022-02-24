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
    <div className="container">
    <Navbar />
    <div className="row bg-dark">
    {state.map((album) => (
      <div key={`${album.id}`} class="col-2 col-md-4 col-sm-12 card cardwidth bg-dark p-2">
        { album.cover !=  null? <img src={album.cover} alt= "album cover" className="card-img-top imgwidth"/>: <img src={undefined_album_cover} alt= "album cover" />}
        <div className="card-body">
          <p className="card-text text-white">{album.album}</p>
          <p className="card-text text-secondary">{album.artist}</p>
        </div> 
        { album.source === "QOBUZ"? <img src={ qobuz} alt = "From Stream Logo" /> : null}
      </div>
    ))}
    </div>
  </div>
  )
}

export default Albums;