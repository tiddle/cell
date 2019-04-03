import React, { Component } from 'react';
import './cell.css';

export interface ICellProps {
	onClick: (x: number, y: number, active: boolean) => void;
	x: number;
	y: number;
	active?: boolean;
}

interface ICellState {
	active: boolean;
}

export class Cell extends Component<ICellProps, ICellState> {
	public constructor(props: ICellProps) {
		super(props);

		this.state = {
			active: this.props.active || false
		};

		this.onClick = this.onClick.bind(this);
	}

	public render() {
		if (this.state.active)
			return (
				<li className="cell" onClick={this.onClick}>
					☺
				</li>
			);

		return (
			<li className="cell" onClick={this.onClick}>
				{' '}
			</li>
		);
	}

	private onClick() {
		this.props.onClick(this.props.x, this.props.y, this.state.active);
	}
}
