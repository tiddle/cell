import React, { Component } from 'react';

import { Cell } from '../cell/Cell';

import './board.css';

export interface IBoardProps {
	width: number;
	height: number;
}

interface IBoardState {
	active: boolean;
}

export class Board extends Component<IBoardProps, IBoardState> {
	public constructor(props: IBoardProps) {
		super(props);
	}

	public render() {
		return (<div className="App">
			<Cell x={1} y={2} onClick={this.cellClick} />
        </div>);
	}

	private cellClick(x: number, y: number): void {
		console.log(x, y);
	}
}
