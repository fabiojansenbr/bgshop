import React from 'react';
import { render } from 'react-dom';
import GameCard from './components/GameCard';

import 'semantic-ui-css/semantic.min.css';

const games = [
    {
        name: 'Quadropolis',
        thumbnail: 'https://cf.geekdo-images.com/tthn7L9-fC_GaXJHfA20VdTrFts=/fit-in/1200x630/pic2840020.jpg',
        price: '32.99',
        players: '2-4',
        duration: '60'
    },
    {
        name: 'Five Tribes',
        thumbnail: 'https://cf.geekdo-images.com/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg',
        price: '51.00',
        players: '2-4',
        duration: '80'
    },
    {
        name: 'Roll for the Galaxy',
        thumbnail: 'https://cf.geekdo-images.com/Vi3pvbq9sLk_OHzxio8lzjB_77k=/fit-in/246x300/pic1473629.jpg',
        price: '29.99',
        players: '2-5',
        duration: '45'
    }
];

render(<GameCard game={games[1]} />, document.getElementById('root'));