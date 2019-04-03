/**
 * For genererating an array for the initial setup of the board
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
	if (boardState[leftX][topY]) {
		active++;
    }
    
    // top mid
	if (boardState[x][topY]) {
		active++;
    }

    // top right
	if (boardState[rightX][topY]) {
		active++;
    }

    // mid left 
	if (boardState[leftX][y]) {
		active++;
    }

    // mid right
	if (boardState[rightX][y]) {
		active++;
    }

    // bottom left
	if (boardState[leftX][bottomY]) {
		active++;
    }

    // bottom mid 
	if (boardState[x][bottomY]) {
		active++;
    }

    // bottom right
	if (boardState[rightX][bottomY]) {
		active++;
    }

	return active;
}
