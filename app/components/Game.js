import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Heading from './Heading';
import Board from './Board';
import PlayerMode from './PlayerMode';

class NewGame extends React.Component {
    render() {
        return (
            <div className="container">
                <Heading />
                {
                    this.props.isActive ? <Board /> : <PlayerMode />
                }
            </div>
        );
    }
}

NewGame.propTypes = {
    isActive: PropTypes.boolean,
    players: PropTypes.array
};

const mapStateToProps = (state) => ({
    isActive: state.game.isActive,
    players: state.game.players
});

const Game = connect(
    mapStateToProps
)(NewGame);

export default Game;
