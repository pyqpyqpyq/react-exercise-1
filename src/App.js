import React, { Component } from 'react';
import './App.scss';
import  { Avatar }from './components/Avatar';
import { Title } from './components/Title';
import avatarSrc from './assets/avatar.jpg';
import { Divider } from './components/Divider';
import { Section } from './components/Section';
import { Education } from './components/Education';

const title = 'Hello,';
const description = 'my name is kamil 24yo and this is my resume/cv';

const educations = [
  {
    id: 1,
    year: 1990,
    title: 'I was born in Katowice',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatemaut placeat quam deserunt, pariatur nam ad commodi modi',
  },

  {
    id: 2,
    year: 2005,
    title: 'Secondary school specializing in artistic',
    description:
      'pariatur nam ad commodi modi voluptas quoratione quia molestias nesciunt debitis ab quae. Sit, reprehenderit aliquam',
  },

  {
    id: 3,
    year: 2009,
    title: 'First level graduation in Graphic Design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatemaut placeat quam deserunt, pariatur nam ad commodi modi',
  },

  {
    id: 4,
    year: 2012,
    title: 'Second level graduation in Graphic Design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatemaut placeat quam deserunt, pariatur nam ad commodi modi',
  },
];

class App extends Component {
  render() {
    // return <main className="app">start here</main>;
    return (
      <main className="app">
        <Avatar src={avatarSrc} />
        <Title title={title} description={description} />
        <Divider />

        <Section title="About me">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aut placeat quam deserunt, pariatur nam ad commodi modi voluptas quo
            ratione quia molestias nesciunt debitis ab quae. Sit, reprehenderit
            aliquam.
          </p>
        </Section>

        <Section title="Education">
          {educations.map((education) => (
            <Education key={education.id} education={education} />
          ))}
        </Section>
      </main>
    );
  }
}

export default App;
