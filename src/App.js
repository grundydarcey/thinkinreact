import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Main from './Main';
import Display from './Display';

export default class App extends Component {
  constructor(props) {
    super(props)
  this.state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  }
}


doThis() {
  console.log(this.state)
}

  render() {
    return (
      <main className='App'>
        <Header></Header><button onClick={() => this.doThis()}>Click this</button>
        <Main>
        </Main>
        <Display FEATURES={this.props.FEATURES} />
      </main>
    )
  }
}