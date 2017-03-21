function game(state = [], action) {
    switch (action.type) {
        case 'PLAYER_TURN':
            const i = action.activePlayer;
            const player = action.playerInfo;
            return {
                ...state,
                players: [
                    ...state.players.slice(0, i), //before the one we are updating
                    {
                        ...state.players[i], 
                        position: player.position,
                        noOfThrows: player.noOfThrows, 
                        noOfSixEncountered: player.noOfSixEncountered,
                        noOfSnakeBites: player.noOfSnakeBites,
                        noOfLaddersTaken: player.noOfLaddersTaken
                    },
                    ...state.players.slice(i + 1) //after the one we are updating
                ]
            };
        case 'SET_PLAYER_MODE':
            let newPlayers = [];
            if (action.newPlayers.length > 0) {
                newPlayers = action.newPlayers;
            }
            return {
                ...state,
                isActive: true, 
                playerMode: action.mode,
                players: [
                    ...state.players,
                    ...newPlayers
                ]
            };
        case 'SET_GAME_OVER':
            return {
                ...state,
                gameOver: action.gameOver
            }    
        default:
            return state;
    }
}

export default game;