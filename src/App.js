import React, { Component } from 'react';
import './App.scss';
import { Avatar } from './components/Avatar';
import avatarSrc from './assets/avatar.jpg';

// const title = 'Hello,';
// const description = 'my name is kamil 24yo and this is my resume/cv';

// const educations = [
//   {
//     id: 1,
//     year: 1990,
//     title: 'I was born in Katowice',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatemaut placeat quam deserunt, pariatur nam ad commodi modi',
//   },

//   {
//     id: 2,
//     year: 2005,
//     title: 'Secondary school specializing in artistic',
//     description:
//       'pariatur nam ad commodi modi voluptas quoratione quia molestias nesciunt debitis ab quae. Sit, reprehenderit aliquam',
//   },

//   {
//     id: 3,
//     year: 2009,
//     title: 'First level graduation in Graphic Design',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatemaut placeat quam deserunt, pariatur nam ad commodi modi',
//   },

//   {
//     id: 4,
//     year: 2012,
//     title: 'Second level graduation in Graphic Design',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatemaut placeat quam deserunt, pariatur nam ad commodi modi',
//   },
// ];

class App extends Component {
  render() {
    // return <main className="app">start here</main>;
    return (
      <main className="app">
        <Avatar src={avatarSrc} />
      </main>
    );
  }
}

export default App;
