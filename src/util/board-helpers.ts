/**
 * For setting up the initial empty board
 *
 * @param x
 * @param y
 */
export function createInitialBoard(x: number, y: number): boolean[][] {
	const output = [];

	for (let i = 0; i < y; i++) {
		let row = [];
		for (let t = 0; t < x; t++) {
			row.push(false);
		}

		output.push(row);
	}

	return output;
}

/**
 * Retreiving how many active cells are neighbouring a coord
 * World is round, not flat earth, so each coord always has 8 neightbours
 *
 * @param x
 * @param y
 * @param boardState
 */
export function getSurroundingActive(
	x: number,
	y: number,
	boardState: boolean[][]
): number {
	let active = 0;
	let topY = y - 1;
	let bottomY = y + 1;
	if (y === 0) {
		topY = boardState.length - 1;
	}

	if (y === boardState.length - 1) {
		bottomY = 0;
	}

	let leftX = x - 1;
	let rightX = x + 1;
	if (x === 0) {
		leftX = boardState[0].length - 1;
	}

	if (x === boardState[0].length - 1) {
		rightX = 0;
	}

	// top left
	if (boardState[topY][leftX]) {
		active++;
	}

	// top mid
	if (boardState[topY][x]) {
		active++;
	}

	// top right
	if (boardState[topY][rightX]) {
		active++;
	}

	// mid left
	if (boardState[y][leftX]) {
		active++;
	}

	// mid right
	if (boardState[y][rightX]) {
		active++;
	}

	// bottom left
	if (boardState[bottomY][leftX]) {
		active++;
	}

	// bottom mid
	if (boardState[bottomY][x]) {
		active++;
	}

	// bottom right
	if (boardState[bottomY][rightX]) {
		active++;
	}

	return active;
}

/**
 * Check if this cell will survive the next iteration
 *
 * @param x
 * @param y
 * @param boardState
 */
export function willThisCellSurvive(
	x: number,
	y: number,
	boardState: boolean[][]
): boolean {
	const activeNeighbours = getSurroundingActive(x, y, boardState);

	if (activeNeighbours === 2 && boardState[y][x]) {
		return true;
	}

	if (activeNeighbours === 3) {
		return true;
	}

	return false;
}

/**
 * Calculate the next iteration of board state
 *
 * @param boardState
 */
export function getNextBoardState(boardState: boolean[][]): boolean[][] {
	return boardState.map((curr, y) => {
		return curr.map((c, x) => {
			return willThisCellSurvive(x, y, boardState);
		});
	});
}
