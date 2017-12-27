import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';
import Message from './Message';

const GamesList = ({ games, toggleFeatured }) => (
    <div className='ui four cards'>
        {games.length === 0 ? (
            <Message
                header='There are no game in your store!'
                content='You should add some.'
                type='info'
            />
        ) : (
            games.map(game => <GameCard key={game._id} game={game} toggleFeatured={toggleFeatured} />)
        )}
    </div>
);

GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleFeatured: PropTypes.func.isRequired
};

GamesList.defaultProps = {
    games: []
};

export default GamesList;