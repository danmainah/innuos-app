import axios from 'axios';

const FETCH_DATA = 'FETCH_DATA';
const initialState = [];

export const getAlbums = () => async (dispatch) => {
  axios.get('albums.json').then((response) => {
    const { data } = response;
    dispatch({ type: FETCH_DATA, payload: data });
  });
};

export const albumReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA:
      return payload;
    default:
      return state;
  }
};