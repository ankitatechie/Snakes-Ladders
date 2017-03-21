import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Play from './Play';
import Cards from './Cards';

class Board extends React.Component {
  render() {
    return (
        <div>
            {
                this.props.game.gameOver ? (
                    <Cards players={this.props.players} />
                ) : (
                    <div>
                        <div className="board board--left">
                            <table>
                                <tbody>
                                    <tr>
                                        {
                                            [25, 26, 27, 28, 29, 30].map(function(d, i) {
                                                return <td ref={d} key={i}></td>
                                            })
                                        }
                                    </tr>
                                    <tr>
                                        {
                                            [24, 23, 22, 21, 20, 19].map(function(d, i) {
                                                return <td ref={d} key={i}></td>
                                            })
                                        }
                                    </tr>
                                    <tr>
                                        {
                                            [13, 14, 15, 16, 17, 18].map(function(d, i) {
                                                return <td ref={d} key={i}></td>
                                            })
                                        }
                                    </tr>
                                    <tr>
                                        {
                                            [12, 11, 10, 9, 8, 7].map(function(d, i) {
                                                return <td ref={d} key={i}></td>
                                            })
                                        }
                                    </tr>
                                    <tr>
                                        {
                                            [1, 2, 3, 4, 5, 6].map(function(d, i) {
                                                return <td ref={d} key={i}></td>
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="board board--right">
                            <Play />
                        </div>
                    </div>
                )
            }
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players,
  game: state.game
});

export default Board = connect(
  mapStateToProps
)(Board);
