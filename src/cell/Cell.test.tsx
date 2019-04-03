import React from 'react';
import ReactDOM from 'react-dom';
import { Cell } from './Cell';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Cell x={1} y={2} active={true} onClick={()=>{}}/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
