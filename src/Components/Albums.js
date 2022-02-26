import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../redux/albums/albums';
import  undefined_album_cover  from '../images/undefined_album_cover.png';
import qobuz from '../images/qobuz.png';
import Navigation from './Navbar';
 
const Albums = () => {
    const state = useSelector((state) => state.albums);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAlbums());
      }, [dispatch]);
  return (
    <div className="container">
    <Navigation />
    <div className="row bg-dark">
    {state.map((album) => (
      <div key={`${album.id}`} className="col-2 col-md-4 col-sm-12 card cardwidth bg-dark p-1">
        { album.cover !=  null? <img src={album.cover} alt= "album cover" className="card-img-top imgwidth"/>: <img src={undefined_album_cover} alt= "album cover" className="imgwidth" />}
        { album.source === "QOBUZ"? <img src={ qobuz} alt = "From Stream Logo" className="rounded-circle circlesize"/> : null}
        <div className="card-body">
          <p className="card-text text-white textwidth">{album.album}</p>
          <p className="card-text text-secondary textwidth">{album.artist}</p>
        </div> 
      </div>
    ))}
    </div>
  </div>
  )
}

export default Albums;