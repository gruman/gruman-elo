# Gruman Elo
 
Get Elo rankings for your chess, backgammon, or other strategy games. Visit [NPM](https://www.npmjs.com/package/gruman-elo) for more info. 

## Install

    yarn add gruman-elo

or

    npm install gruman-elo

## Usage
```bash
   
// Import necessary modules from React, including useState for managing state and useEffect for side effects
import React, { useState, useEffect } from 'react';
// Import the Elo rating calculation function from the 'gruman-elo' package
import getElo from 'gruman-elo';

// Define the App component
const App: React.FC = () => {

  // State to track the initial Elo rating of the winner, starting at 1500
  const [winnerElo, setWinnerElo] = useState<number>(1500);
  // State to track the initial Elo rating of the loser, also starting at 1500
  const [loserElo, setLoserElo] = useState<number>(1500);
  // State to track the match length, defaulting to 1
  const [matchLength, setMatchLength] = useState<number>(1);
  
  // State to hold the calculated Elo ratings for both winner and loser
  const [elo, setElo] = useState<{ winner: number; loser: number }>({
    winner: 1500,
    loser: 1500
  });

  // useEffect hook to calculate and update the Elo ratings whenever 
  // winnerElo, loserElo, or matchLength change
  useEffect(() => {
    const elo = getElo(winnerElo, loserElo, matchLength); // Call the Elo calculation function
    setElo({ winner: elo.winner, loser: elo.loser }); // Update state with new Elo ratings
  }, [winnerElo, loserElo, matchLength]); // Dependencies: recalculate on change

  // Render the form with input fields for winnerElo, loserElo, and matchLength
  // Display the updated Elo ratings for both winner and loser
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column'}}>
      {/* Input for Winner Elo */}
      <label>Winner Elo:</label>
      <input 
        type="number" 
        value={winnerElo} 
        onChange={e => setWinnerElo(parseInt(e.target.value))} 
        min={1} 
        style={{marginBottom: '1rem'}} 
      />
      {/* Input for Loser Elo */}
      <label>Loser Elo:</label>
      <input 
        type="number" 
        value={loserElo} 
        onChange={e => setLoserElo(parseInt(e.target.value))} 
        min={1} 
        style={{marginBottom: '1rem'}} 
      />
      {/* Input for Match Length */}
      <label>Match Length:</label>
      <input 
        type="number" 
        value={matchLength} 
        onChange={e => setMatchLength(parseInt(e.target.value))} 
        min={1} 
        style={{marginBottom: '1rem'}} 
      />
      
      {/* Display the calculated Elo ratings */}
      <ul>
        <li>Winner: {elo.winner}</li>
        <li>Loser: {elo.loser}</li>
      </ul>
    </div>
  );
};

// Export the App component as the default export
export default App;


```