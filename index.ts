interface Elo {
  winner: number;
  loser: number;
}

const getElo = (winner: number, loser: number, length: number = 1): Elo => {
  let d = winner - loser;
  let elo = Math.ceil((4 * Math.sqrt(length)) / (1 + Math.pow(10, d * Math.sqrt(length / 2000))));

  let d2 = loser - winner;
  let elo2 = Math.ceil((4 * Math.sqrt(length)) / (1 + Math.pow(10, -d2 * Math.sqrt(length / 2000))));
  
  return {
    winner: winner + elo,
    loser: loser - elo2
  };
};

export default getElo;