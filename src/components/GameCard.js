import React from 'react';

const GameCard = () => (
    <div className="ui card">
        <div className="image">
            <span className="ui green ribbon label">$32.99</span>
            <img src="https://cf.geekdo-images.com/tthn7L9-fC_GaXJHfA20VdTrFts=/fit-in/1200x630/pic2840020.jpg" alt="Game card"/>
        </div>
        <div className="content">
            <a href="https://boardgamegeek.com/boardgame/176396/quadropolis" className="header">Quadropolis</a>
            <div className="meta">
                <i className="icon users" /> 2-4&nbsp;
                <i className="icon wait" /> 60 min.
            </div>
        </div>
    </div>
);

export default GameCard;