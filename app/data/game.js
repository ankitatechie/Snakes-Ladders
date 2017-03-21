const game = {
  isActive: false,
  playerMode: 'singlePlayer',
  maxNumber: 30,
  gameOver: false,
  players: [
    {
      name: 'Bob',
      position: 0,
      noOfThrows: 0,
      noOfSixEncountered: 0,
      noOfSnakeBites: 0,
      noOfLaddersTaken: 0
    },
    {
      name: 'Alice',
      position: 0,
      noOfThrows: 0,
      noOfSixEncountered: 0,
      noOfSnakeBites: 0,
      noOfLaddersTaken: 0
    }
  ]
}

export default game;