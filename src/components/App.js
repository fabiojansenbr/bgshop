import React from 'react';
import GamesList from './GamesList';

const games = [
    {
        _id: 1,
        name: 'Quadropolis',
        thumbnail: 'https://cf.geekdo-images.com/tthn7L9-fC_GaXJHfA20VdTrFts=/fit-in/1200x630/pic2840020.jpg',
        price: 3299,
        players: '2-4',
        duration: 60
    },
    {
        _id: 2,
        name: 'Five Tribes',
        thumbnail: 'https://cf.geekdo-images.com/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg',
        price: 5100,
        players: '2-4',
        duration: 80
    },
    {
        _id: 3,
        name: 'Roll for the Galaxy',
        thumbnail: 'https://cf.geekdo-images.com/Vi3pvbq9sLk_OHzxio8lzjB_77k=/fit-in/246x300/pic1473629.jpg',
        price: 2999,
        players: '2-5',
        duration: 45
    }
];

const App = () => (
  <div className='ui container'>
      <GamesList games={games} />
  </div>
);

export default App;