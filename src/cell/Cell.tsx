import React, { Component } from 'react';
import './cell.css';

export interface ICellProps {
	onClick: (x: number, y: number, active: boolean) => void;
	x: number;
	y: number;
	active: boolean;
}

export class Cell extends Component<ICellProps> {
	public constructor(props: ICellProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	public render() {
		if (this.props.active) {
			return (
				<li className="cell" onClick={this.onClick}>
					☺
				</li>
			);
		}

		return (
			<li className="cell" onClick={this.onClick}>
				{' '}
			</li>
		);
	}

	private onClick() {
		this.props.onClick(this.props.x, this.props.y, this.props.active);
	}
}
