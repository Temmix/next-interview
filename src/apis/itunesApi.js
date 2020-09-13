import httpService from '../service/httpService';

//this is used for redux-thunk
const getArtist = ({ page, term }) => httpService.get(`/${page}?term=${term}`);

// this was used for redux saga
const getArtistFull = async ({ page, term }) => {
  const response = await httpService.get(`/${page}?term=${term}`);
  return response.data.results;
};

export default {
  getArtist,
  getArtistFull,
};
