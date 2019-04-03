import { createInitialBoard } from './board-helpers';

it('generates the initial board correctly', () => {
    const board = createInitialBoard(2, 3);
    expect(board.length).toBe(3);
    expect(board[0].length).toBe(2);
});