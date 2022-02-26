import axios from 'axios';

const FETCH_QOBUZ = "FETCH_QOBUZ";
const initialState = [];


export const qobuzAlbums = () => async (dispatch) => {
  axios.get('albums.json').then((response) => {
    const { data } = response;
    const filtered = [];
    data.map((album) => {
       if(album.source === "QOBUZ"){
         filtered.push(album);
       }
       return filtered;
    })
    dispatch({ type: FETCH_QOBUZ, payload: filtered });
  });
}

export const qobuzReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_QOBUZ:
      return payload;
    default:
      return state;
  }
};