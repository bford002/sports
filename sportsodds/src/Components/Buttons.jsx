import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Odds from './Odds';

const Buttons = () => {

const KEY = `${process.env.REACT_APP_SPORTS_KEY}`;

const [teams, setTeams] = useState([]);

const getSports = () => axios.get(`https://api.the-odds-api.com/v4/sports/?apiKey=${KEY}`)
.then((results) => {
  console.log(results);
});

const getMlbOdds = () => axios.get(`https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=${KEY}&regions=us&markets=h2h,spreads&oddsFormat=american&bookmakers=draftkings`)
.then((results => {
  setTeams(results.data.map(result => {
    return [result.away_team, result.home_team];
  }))
}))
.catch((err) => {
  console.log(err);
});

const getNflOdds = () => axios.get(`https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${KEY}&regions=us&markets=h2h,spreads&oddsFormat=american&bookmakers=draftkings`)
.then((results => {
  setTeams(results.data.map(result => {
    return [result.away_team, result.home_team];
  }))
}));

const getNbaOdds = () => axios.get(`https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=${KEY}&regions=us&markets=h2h,spreads&oddsFormat=american&bookmakers=draftkings`)
.then((results => {
  setTeams(results.data.map(result => {
    return [result.away_team, result.home_team];
  }))
}));

  return (
    <div>
      {/* <button onClick={getSports}>All Sports</button> */}
      <button onClick={getMlbOdds}>MLB</button>
      <button onClick={getNflOdds}>NFL</button>
      <button onClick={getNbaOdds}>NBA</button>

      <Odds teams={teams} />
      </div>
  )
}

export default Buttons;
