import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../redux/albums';

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
      </div>
    ))}
  </div>
  )
}

export default Home;