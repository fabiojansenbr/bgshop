import React from 'react';
import _orderBy from 'lodash/orderBy';
import GamesList from './GamesList';
import GameForm from './GameForm';
import TopNavigation from './TopNavigation';

const games = [
    {
        _id: 1,
        featured: true,
        name: 'Quadropolis',
        thumbnail: 'https://cf.geekdo-images.com/tthn7L9-fC_GaXJHfA20VdTrFts=/fit-in/1200x630/pic2840020.jpg',
        description: 'Roll for the Galaxy is a dice game of building space empires for 2–5 players. Your dice represent your populace, whom you direct to develop new technologies, settle worlds, and ship goods. The player who best manages his workers and builds the most prosperous empire wins! This dice version of Race for the Galaxy takes players on a new journey through the Galaxy.',
        price: 3299,
        players: '2-4',
        duration: 60
    },
    {
        _id: 2,
        featured: false,
        name: 'Five Tribes',
        thumbnail: 'https://cf.geekdo-images.com/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg',
        description: 'Roll for the Galaxy is a dice game of building space empires for 2–5 players. Your dice represent your populace, whom you direct to develop new technologies, settle worlds, and ship goods. The player who best manages his workers and builds the most prosperous empire wins! This dice version of Race for the Galaxy takes players on a new journey through the Galaxy.',
        price: 5100,
        players: '2-4',
        duration: 80
    },
    {
        _id: 3,
        featured: false,
        name: 'Roll for the Galaxy',
        thumbnail: 'https://cf.geekdo-images.com/Vi3pvbq9sLk_OHzxio8lzjB_77k=/fit-in/246x300/pic1473629.jpg',
        description: 'Roll for the Galaxy is a dice game of building space empires for 2–5 players. Your dice represent your populace, whom you direct to develop new technologies, settle worlds, and ship goods. The player who best manages his workers and builds the most prosperous empire wins! This dice version of Race for the Galaxy takes players on a new journey through the Galaxy.',
        price: 2999,
        players: '2-5',
        duration: 45
    }
];

class App extends React.Component {
    state = {
        games: [],
        showGameForm: false
    };

    componentDidMount() {
        this.setState({ games: this.sortGames(games) });
    }

    sortGames = games => {
        return _orderBy(games, ['featured', 'name'], ['desc', 'asc']);
    };

    toggleFeatured = gameId => {
        const newGames = this.state.games.map(game => {
            if (game._id === gameId) return {...game, featured: !game.featured};
            return game;
        });
        this.setState({ games: this.sortGames(newGames) });
    };

    showGameForm = () => this.setState({ showGameForm: true });

    hideGameForm = () => this.setState({ showGameForm: false });

    render() {
        const numberOfColumns = this.state.showGameForm ? 'ten' : 'sixteen';

        return (
            <div className='ui container'>
                <TopNavigation showGameForm={this.showGameForm} />

                <div className="ui stackable grid">
                    <div className="six wide column">
                        {this.state.showGameForm && <GameForm cancel={this.hideGameForm} />}
                    </div>
                    <div className={`${numberOfColumns} wide column`}>
                        <GamesList games={this.state.games} toggleFeatured={this.toggleFeatured} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;