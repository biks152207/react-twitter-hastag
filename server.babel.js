import express from 'express';
import Twitter from 'twitter';
var client = new Twitter({
  consumer_key: 'cAME3L0dCPSVcgU1BLo9Pcf5u',
  consumer_secret: 'qzIjVkgaDn1LIpy6o3YqP88iSBA8n9yp53w2aOov83lQ5gkCEG',
  access_token_key: '3244920788-NsDyK7sEUx5WNCY2yTfIw1xJoIxGqmG3idytBrq',
  access_token_secret: 'dxGXvJvzfNU8uUISYr9wlllb6ssnkP1pCzaJOEnHvBRwb'
});

const app = express();

app.use('/', express.static('public'));
app.get('/twitter', function(req, res, next){
  console.log(req.query);
  console.log('hwer werwe');
  client.get('search/tweets', {q: req.query.search}, function(error, tweets, response) {
     console.log(tweets);
     res.json(tweets);
  });
})

app.listen(process.env.PORT || 3000);
