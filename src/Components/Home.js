import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../redux/albums';
import  undefined_album_cover  from '../images/undefined_album_cover.png';
 
const Home = () => {
    const state = useSelector((state) => state.albums);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAlbums());
      }, [dispatch]);
  return (
    <div>
    {state.map((album) => (
      <div key={`${album.id}`} >
        {album.artist}
        <p>{album.album}</p>
        { album.cover !=  null? <img src={album.cover} alt= "album cover" />: <img src={undefined_album_cover} alt= "album cover" />}
      </div>
    ))}
  </div>
  )
}

export default Home;