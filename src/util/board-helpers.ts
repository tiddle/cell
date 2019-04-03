/**
 * For genererating an array for the initial setup of the board
 */
export function createInitialBoard(x: number, y: number): boolean[][] {
    const output = [];

    for(let i = 0; i < y; i++) {
        let row = [];
        for(let t = 0; t < x; t++) {
            row.push(false);
        }

        output.push(row);
    }

    return output;
}
