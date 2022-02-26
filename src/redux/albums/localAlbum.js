import axios from 'axios';

const FETCH_LOCAL = "FETCH_LOCAL";
const initialState = [];


export const localAlbums = () => async (dispatch) => {
  axios.get('albums.json').then((response) => {
    const { data } = response;
    const filteredLocal = [];
    data.map((album) => {
       if(album.source === "LOCAL"){
         filteredLocal.push(album);
       }
       return filteredLocal;
    })
    dispatch({ type: FETCH_LOCAL, payload: filteredLocal });
  });
}

export const localReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_LOCAL:
      return payload;
    default:
      return state;
  }
};