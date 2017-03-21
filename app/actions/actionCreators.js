export function playerTurn(playerInfo, activePlayer) {
    return {
        type: 'PLAYER_TURN',
        playerInfo,
        activePlayer
    };
}

export function setPlayerMode(mode, newPlayers) {
    return {
        type: 'SET_PLAYER_MODE',
        mode,
        newPlayers
    };
}

export function setGameOver(gameOver) {
    return {
        type: 'SET_GAME_OVER',
        gameOver
    };
}
