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
		this.resetBoard = this.resetBoard.bind(this);
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
				<button onClick={this.nextGenerationClick}>
					Next Generation
				</button>
				<button onClick={this.resetBoard}>Reset Board</button>
			</>
		);
	}

	private cellClick(x: number, y: number): void {
		this.setState(state => {
			state.board[x][y] = !state.board[x][y];
			return {
				board: state.board
			};
		});
	}

	private nextGenerationClick(): void {
		const newBoard = getNextBoardState(this.state.board);
		this.setState({
			board: newBoard
		});
	}

	private resetBoard(): void {
		this.setState({
			board: createInitialBoard(this.props.width, this.props.height)
		});
	}
}
