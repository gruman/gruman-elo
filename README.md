# Gruman Elo
 
Get Elo rankings for your chess, backgammon, or other strategy games. Visit [NPM](https://www.npmjs.com/package/gruman-elo) for more info. 

## Install

    yarn add gruman-elo

or

    npm install gruman-elo

## Usage
```bash
   
import React, { useState, useEffect } from 'react';
import getElo from 'gruman-elo';

const App: React.FC = () => {

  const [winnerElo, setWinnerElo] = useState<number>(1500);
  const [loserElo, setLoserElo] = useState<number>(1500);
  const [matchLength, setMatchLength] = useState<number>(1);
  const [elo, setElo] = useState<{ winner: number; loser: number }>({
    winner: 1500,
    loser: 1500
  });

  useEffect(() => {
    const elo = getElo(winnerElo, loserElo, matchLength);
    setElo({ winner: elo.winner, loser: elo.loser });
  }, [winnerElo, loserElo, matchLength]);

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column'}}>
      <label>Winner Elo:</label>
      <input type="number" value={winnerElo} onChange={e => setWinnerElo(parseInt(e.target.value))} min={1} style={{marginBottom: '1rem'}} />
      <label>Loser Elo:</label>
      <input type="number" value={loserElo} onChange={e => setLoserElo(parseInt(e.target.value))} min={1} style={{marginBottom: '1rem'}}  />
      <label>Match Length:</label>
      <input type="number" value={matchLength} onChange={e => setMatchLength(parseInt(e.target.value))} min={1} style={{marginBottom: '1rem'}}  />
    
      <ul>
      <li>Winner: {elo.winner}</li>
      <li>Loser: {elo.loser}</li>
      </ul>
    </div>
  );
};

export default App;

```