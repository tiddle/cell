import { createInitialBoard, getSurroundingActive } from './board-helpers';

it('generates the initial board correctly', () => {
	const board = createInitialBoard(2, 3);
	expect(board.length).toBe(3);
	expect(board[0].length).toBe(2);
});

it('calculates active cells properly', () => {
	let board = createInitialBoard(4, 4);
	expect(getSurroundingActive(1, 1, board)).toBe(0);

	board[0][0] = true;
	expect(getSurroundingActive(1, 1, board)).toBe(1);

	board[3][3] = true;
	expect(getSurroundingActive(0, 0, board)).toBe(1);

	board[1][1] = true;
	expect(getSurroundingActive(0, 0, board)).toBe(2);
	expect(getSurroundingActive(3, 3, board)).toBe(1);
});
