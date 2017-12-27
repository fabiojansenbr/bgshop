import React from 'react';
import _orderBy from 'lodash/orderBy';
import GamesList from './GamesList';

const games = [
    {
        _id: 1,
        featured: true,
        name: 'Quadropolis',
        thumbnail: 'https://cf.geekdo-images.com/tthn7L9-fC_GaXJHfA20VdTrFts=/fit-in/1200x630/pic2840020.jpg',
        price: 3299,
        players: '2-4',
        duration: 60
    },
    {
        _id: 2,
        featured: false,
        name: 'Five Tribes',
        thumbnail: 'https://cf.geekdo-images.com/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg',
        price: 5100,
        players: '2-4',
        duration: 80
    },
    {
        _id: 3,
        featured: false,
        name: 'Roll for the Galaxy',
        thumbnail: 'https://cf.geekdo-images.com/Vi3pvbq9sLk_OHzxio8lzjB_77k=/fit-in/246x300/pic1473629.jpg',
        price: 2999,
        players: '2-5',
        duration: 45
    }
];

class App extends React.Component {
    state = {
        games: []
    };

    componentDidMount() {
        this.setState({ games: _orderBy(games, ['featured', 'name'], ['desc', 'asc']) });
    }

    render() {
        return (
            <div className='ui container'>
                <GamesList games={this.state.games} />
            </div>
        );
    }
}

export default App;