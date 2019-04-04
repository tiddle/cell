import React, { Component } from 'react';
import './App.css';
import { Board } from './board/Board';

class App extends Component {
	constructor(props: any) {
		super(props);
	}
	render() {
		return <Board width={10} height={10} />;
	}
}

export default App;
