import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import Featured from './Featured';

class GameCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDescription: false
        };

        this.handleDescription = this.handleDescription.bind(this);
    }

    handleDescription() {
        this.setState({ showDescription: !this.state.showDescription });
    }

    render() {
        const { game, toggleFeatured } = this.props;

        return (
            <div className='ui card'>
                <div className='image'>
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
                    <div className='left floated eleven wide column'>
                        <a className='header'>{game.name}</a>
                        <div className='meta'>
                            <i className='icon users' /> {game.players}&nbsp;
                            <i className='icon wait' /> {game.duration} min.
                        </div>
                    </div>
                    <div className='right floated five wide column meta'>
                        <a onClick={this.handleDescription}>
                            <i className='icon eye' />
                        </a>
                    </div>
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
    toggleFeatured: PropTypes.func.isRequired
};

export default GameCard;