import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import Featured from './Featured';

class GameCard extends Component {
    state = {
        showDescription: false,
        showConfirmation: false
    };

    showConfirmation = () => this.setState({ showConfirmation: true });

    hideConfirmation = () => this.setState({ showConfirmation: false });

    handleDescription = () => this.setState({ showDescription: !this.state.showDescription });

    render() {
        const { game, toggleFeatured, editGame, deleteGame } = this.props;

        return (
            <div className='ui card'>
                <div className='ui image'>
                    <Price cents={game.price} />
                    <Featured
                        featured={game.featured}
                        toggleFeatured={toggleFeatured}
                        gameId={game._id}
                    />
                    {this.state.showDescription ? (
                        <div className='content ui'>
                            <div className='text description'>{game.description}</div>
                        </div>
                    ) : (
                        <img src={game.thumbnail} alt='Game Cover' />
                    )}
                </div>
                <div className='content ui grid'>
                    <div className='eleven wide column'>
                        <a className='header'>{game.name}</a>
                        <div className='meta'>
                            <i className='icon users' /> {game.players}&nbsp;
                            <i className='icon wait' /> {game.duration} min.
                        </div>
                    </div>
                    <div className='five wide column meta'>
                        <a onClick={this.handleDescription}>
                            <i className='icon eye' />
                        </a>
                    </div>
                </div>
                <div className="extra content">
                    {
                        this.state.showConfirmation ? (
                            <div className="ui two buttons">
                                <a className="ui basic red button" onClick={() => deleteGame(game)}>
                                    <i className="ui icon check" /> YES
                                </a>
                                <a className="ui basic grey button" onClick={this.hideConfirmation}>
                                    <i className="ui icon close" /> NO
                                </a>
                            </div>
                        ): (
                            <div className="ui two buttons">
                                <a className="ui basic green button" onClick={() => editGame(game)}>
                                    <i className="ui icon edit" />
                                </a>
                                <a className="ui basic red button" onClick={this.showConfirmation}>
                                    <i className="ui icon trash" />
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

GameCard.propTypes = {
    game: PropTypes.shape({
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        players: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired
    }).isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    editGame: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired
};

export default GameCard;