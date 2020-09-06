import httpService from './httpService';

//Artists, Albums, and/or Songs
const getArtist = ({ page, term }) => httpService.get(`/${page}?term=${term}`);

export default {
  getArtist,
};
