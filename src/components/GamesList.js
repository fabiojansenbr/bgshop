import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';
import Message from './Message';

const GamesList = ({ games }) => (
    <div className='ui four cards'>
        {games.length === 0 ? (
            <Message
                header='There are no game in your store!'
                content='You should add some.'
                type='info'
            />
        ) : (
            games.map(game => <GameCard key={game._id} game={game} />)
        )}
    </div>
);

GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired
};

GamesList.defaultProps = {
    games: []
};

export default GamesList;