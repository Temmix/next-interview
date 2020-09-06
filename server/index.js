var express = require('express');
var request = require('request');

var app = express();
// const router = express.Router();
require('./startup/cors')(app);

app.use('/api/:page', function (req, res) {
  const { term } = req.query;
  const { page } = req.params;

  let limit = 10 * +page;
  // can only give max of 200, anything greater than 200 , it will return 50
  limit = limit > 200 ? 200 : limit;
  //pagesize=limit, term=name,type=media,entities=musicArtist, musicTrack, album, musicVideo, mix, song.
  var url = `https://itunes.apple.com/search?term=${term}&media=music&limit=${limit}`;

  req
    .pipe(
      request(url).on('error', (err) => {
        const msg = 'Error on connecting to the ituneApi.';
        console.error(msg, err);
        res.status(500).send(msg);
      })
    )
    .pipe(res);
});

const port = process.env.PORT || 7000;
const server = app.listen(port, () =>
  console.log(`Proxy server up and running on port => ${port}...`)
);

module.exports = server;
