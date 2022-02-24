import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Albums from './Albums';
import LocalAlbums from './LocalAlbums';
import QobuzAlbums from './QobuzAlbums';

const Home = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Albums />
      </Route>
      <Route path="/local">
        <LocalAlbums />        
      </Route>
      <Route path="/qobuz">
        <QobuzAlbums />
      </Route>
    </Switch>
  )
};

export default Home;