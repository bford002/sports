import axios from 'axios';

const KEY = `${process.env.REACT_APP_SPORTS_KEY}`;


const getSports = axios.get(`https://api.the-odds-api.com/v4/sports/?apiKey=${KEY}`)
.then((results) => {
  console.log(results);
});

const getMlbOdds = axios.get(`https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=${KEY}&regions=us&markets=h2h,spreads&oddsFormat=american&bookmakers=draftkings`)
.then((results => {
  console.log(results)
}));

const getNflOdds = axios.get(`https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${KEY}&regions=us&markets=h2h,spreads&oddsFormat=american&bookmakers=draftkings`)
.then((results => {
  console.log(results)
}));

const getNbaOdds = axios.get(`https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=${KEY}&regions=us&markets=h2h,spreads&oddsFormat=american&bookmakers=draftkings`)
.then((results => {
  console.log(results)
}));