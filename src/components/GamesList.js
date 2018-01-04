import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';
import Message from './Message';

const GamesList = ({ games, toggleFeatured, editGame, deleteGame }) => (
    <div className='ui four cards'>
        {games.length === 0 ? (
            <Message
                header='There are no game in your store!'
                content='You should add some.'
                type='info'
            />
        ) : (
            games.map(game => (
                <GameCard
                    key={game._id}
                    game={game}
                    toggleFeatured={toggleFeatured}
                    editGame={editGame}
                    deleteGame={deleteGame}
                />
            ))
        )}
    </div>
);

GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    editGame: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired
};

GamesList.defaultProps = {
    games: []
};

export default GamesList;