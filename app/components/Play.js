import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { playerTurn, setGameOver } from '../actions/actionCreators';

import Board from './Board';
import PlayerMode from './PlayerMode';

class PlayGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 0,
      diceNumber: 0,
      notification: ''
    };
    this.snakes = new Map();
    this.ladders = new Map();
    this.setSnakes();
    this.setLadders();
    this.rollDice = this.rollDice.bind(this);
    this.setPlayersTurn = this.setPlayersTurn.bind(this);
    this.updatePlayerPosition = this.updatePlayerPosition.bind(this);
  }

  setSnakes() {
    let _snakes = this.snakes;
    _snakes.set(17,4);
    _snakes.set(19,7);
    _snakes.set(21,9);
    _snakes.set(27,1);
  }

  setLadders() {
    let _ladders = this.ladders;
    _ladders.set(3,22);
    _ladders.set(5,8);
    _ladders.set(11,26);
    _ladders.set(20,29);
  }

  updatePlayerPosition(diceNumber) {
    let _currentPlayer = this.props.players[this.state.activePlayer];
    let _snakes = this.snakes;
    let _ladders = this.ladders;
    let maxNumber = this.props.maxNumber;
    let currentPosition = _currentPlayer.position;
    let nextPosition = _currentPlayer.position + diceNumber;

    if (diceNumber === 6) {
      _currentPlayer.noOfSixEncountered = _currentPlayer.noOfSixEncountered + 1;
    }

    _currentPlayer.noOfThrows = _currentPlayer.noOfThrows + 1;
    // Set player's position
    _currentPlayer.position = nextPosition;
    if (nextPosition > maxNumber) {
      _currentPlayer.position = currentPosition;
    } else if (nextPosition === maxNumber) {
      alert(_currentPlayer.name + " you won. See you again.");
      this.props.changeGameStatus(true);
    }

    // Snakes Encountered
    if (_snakes.has(_currentPlayer.position)) {
      _currentPlayer.position = _snakes.get(_currentPlayer.position);
      _currentPlayer.noOfSnakeBites = _currentPlayer.noOfSnakeBites + 1;
    }

    // Ladders Encountered
    if (_ladders.has(_currentPlayer.position)) {
      _currentPlayer.position = _ladders.get(_currentPlayer.position);
      _currentPlayer.noOfLaddersTaken = _currentPlayer.noOfLaddersTaken + 1;
    }

    this.props.handleClick(_currentPlayer, this.state.activePlayer);
    this.setPlayersTurn(_currentPlayer, diceNumber);
  };

  setPlayersTurn(currentPlayer, diceNumber) {
    let sixR = 0;
    if (diceNumber === 6) {
      sixR = sixR + 1;
      this.setState({
        notification: `${currentPlayer.name} has got extra chance`
      });
    } else {
      // Round robin manner
      this.setState({
        activePlayer: this.state.activePlayer + 1
      });
      if (this.state.activePlayer === (this.props.players.length - 1)) {
        this.setState({
          activePlayer: 0
        });
      }
    }
  };

  rollDice() {
    const number = Math.round((Math.random() * 5)) + 1;
    this.setState({
      diceNumber: number
    });
    this.updatePlayerPosition(number);
  };

  render() {
    let state = this.state;
    let activePlayer = this.props.players[state.activePlayer].name;
    return (
      <div className="players">
        {
          state.diceNumber === 6 ? (
            <h3>{state.notification}</h3>
          ) : (
            <h3>{this.props.players[state.activePlayer].name}'s turn</h3>
          )
        }
        {
          this.props.players.map(function(player, index) {
            return (
              <div key={index}>
                <span className={`player player__${index} ${activePlayer === player.name ? 'active' : ''}`}></span>
                <span>{player.name} ({player.position})</span>
              </div>
            )
          })
        }
        <div className="dice">
          <h3 className="dice__number">{state.diceNumber}</h3>
          <div className="button" onClick={() => this.rollDice()}>Throw</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isActive: state.game.isActive,
  playerMode: state.game.playerMode,
  maxNumber: state.game.maxNumber,
  players: state.game.players
});

const mapDispatchToProps = (dispatch) => ({
    handleClick: (playerInfo, activePlayer) => {
        dispatch(playerTurn(playerInfo, activePlayer));
    },
    changeGameStatus: (gameOver) => {
      dispatch(setGameOver(gameOver));
    }
});

const Play = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayGame);

export default Play;
