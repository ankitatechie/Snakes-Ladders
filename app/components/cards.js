import React, { PropTypes } from 'react';

class Cards extends React.Component {
    render() {
        return (
            <div className="card-container">
                {
                    this.props.players.map(function(player, index) {
                        return (
                            <div className="card" key={index}>
                                {
                                    player.position === 30 ? (
                                            <div className="winner">You have won!</div>
                                        ) : ''
                                }
                                <div>Name: {player.name}</div>
                                <div>No of Snake's Bites: {player.noOfSnakeBites}</div>
                                <div>No of Ladder's Taken: {player.noOfLaddersTaken}</div>
                                <div>No of Dice Throws: {player.noOfThrows}</div>
                                <div>No of Six Encountered: {player.noOfSixEncountered}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

Cards.propTypes = {
    players: PropTypes.array
};

export default Cards;

