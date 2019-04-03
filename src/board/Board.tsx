import React, { Component } from 'react';

import { Cell } from '../cell/Cell';
import { createInitialBoard } from '../util/board-helpers';

import './board.css';

export interface IBoardProps {
	width: number;
	height: number;
}

interface IBoardState {
	board: boolean[][];
}

export class Board extends Component<IBoardProps, IBoardState> {
	public constructor(props: IBoardProps) {
		super(props);

		this.state = {
			board: createInitialBoard(this.props.width, this.props.height)
		};

		console.log(this.state.board);

		this.cellClick = this.cellClick.bind(this);
	}

	public render() {
		return (
			<div className="App">
				{this.state.board.map((curr, y) => {
					return (
						<div key={y}>
							{curr.map((c, x) => {
								let key = String(x) + String(y);
								return (
									<Cell
										key={key}
										x={x}
										y={y}
										active={c}
										onClick={this.cellClick}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	}

	private cellClick(x: number, y: number, active: boolean): void {
		console.log(x, y, active);
	}
}
