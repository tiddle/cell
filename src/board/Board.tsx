import React, { Component } from 'react';

import { Cell } from '../cell/Cell';
import { createInitialBoard, getNextBoardState } from '../util/board-helpers';

import './board.css';

export interface IBoardProps {
	width: number;
	height: number;
}

interface IBoardState {
	// history: boolean[][];
	board: boolean[][];
}

export class Board extends Component<IBoardProps, IBoardState> {
	public constructor(props: IBoardProps) {
		super(props);

		this.state = {
			// history: [],
			board: createInitialBoard(this.props.width, this.props.height)
		};

		this.cellClick = this.cellClick.bind(this);
		this.nextGenerationClick = this.nextGenerationClick.bind(this);
	}

	public render() {
		return (
			<>
				<div className="board">
					{this.state.board.map((curr, x) => {
						return (
							<div key={x}>
								{curr.map((c, y) => {
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
				<button onClick={this.nextGenerationClick}>&raquo;</button>
			</>
		);
	}

	private cellClick(x: number, y: number, active: boolean): void {
		console.log(x, y, active);

		this.setState(state => {
			state.board[x][y] = !state.board[x][y];
			return {
				board: state.board
			};
		});
	}

	private nextGenerationClick(): void {
		const newBoard = getNextBoardState(this.state.board);
		console.log(newBoard);
		this.setState({
			board: newBoard
		});
	}
}
