import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setPlayerMode } from '../actions/actionCreators';

class GameMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _playerMode: 'singlePlayer'
        };
        this.choosePlayerMode = this.choosePlayerMode.bind(this);
        this.selectPlayers = this.selectPlayers.bind(this);
    }

    choosePlayerMode(playerMode) {
        this.setState({
            _playerMode: playerMode
        });
    }

    selectPlayers() {
        let newPlayers = [];
        if (this.state._playerMode === 'multiPlayer') {
            newPlayers = [
                {
                    name: 'jaismine',
                    position: 0,
                    noOfThrows: 0,
                    noOfSixEncountered: 0,
                    noOfSnakeBites: 0,
                    noOfLaddersTaken: 0
                },
                {
                    name: 'ankita',
                    position: 0,
                    noOfThrows: 0,
                    noOfSixEncountered: 0,
                    noOfSnakeBites: 0,
                    noOfLaddersTaken: 0
                }
            ];
        }
        this.props.handleSubmit(this.state._playerMode, newPlayers);
    }

    render() {
        return (
            <div className="playerMode">
                <h3>Select the number of players you want to play with</h3>
                <form>
                    <input type="radio" name="player" value="singlePlayer" defaultChecked onChange={() => this.choosePlayerMode('singlePlayer')} /> Single Player<br />
                    <input type="radio" name="player" value="multiPlayer" onChange={() => this.choosePlayerMode('multiPlayer')} /> Multi Player<br />
                    <button type="button" onClick={() => this.selectPlayers()}>Submit</button>
                </form>
            </div>
        );
    }
}

GameMode.propTypes = {
    playerMode: PropTypes.string,
    players: PropTypes.array,
    handleSubmit: PropTypes.function
};

const mapStateToProps = (state) => ({
    playerMode: state.game.playerMode,
    players: state.game.players
});

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (playerMode, newPlayers) => {
        dispatch(setPlayerMode(playerMode, newPlayers));
    }
});

const PlayerMode = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameMode);

export default PlayerMode;
