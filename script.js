let cells = [];
document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const scoreElement = document.getElementById('score');
    const highScoreElement = document.getElementById('high-score');
    const resetButton = document.getElementById('reset');

    const WIDTH = 4;
    let score = 0;
    let highScore = 0;

    // Initialize the board
    function initBoard() {
        cells = [];
        board.innerHTML = '';
        for (let i = 0; i < 16; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            board.appendChild(cell);
            cells.push(cell);
        }
        updateBoard();
    }

    // Randomly add a new tile (2 or 4) to the board
    function addRandomTile() {
        const emptyCells = cells.filter(cell => !cell.textContent);
        if (emptyCells.length === 0) return;
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        const newValue = Math.random() < 0.9 ? 2 : 4;
        randomCell.textContent = newValue;
        // randomCell.classList.add(`tile-${newValue}`);
    }

    // Update the board (style the cells based on their values)
    function updateBoard() {
        cells.forEach(cell => {
            cell.textContent = '';
            cell.className = 'cell';
        });
        const tiles = document.querySelectorAll('.cell');
        tiles.forEach(tile => {
            const value = parseInt(tile.textContent);
            if (value) {
                // tile.classList.add(`tile-${value}`);
                tile.textContent = value;
            }
        });
    }

    // Reset the game
    function resetGame() {
        score = 0;
        scoreElement.textContent = score;
        initBoard();
        addRandomTile();
        addRandomTile();
    }

    // Event listeners
    resetButton.addEventListener('click', resetGame);

    // Initialize the game on load
    resetGame();

    function moveLeft() {
        for (let i = 0; i < 16; i++) {
            if (i % 4 == 0) {
                let first = cells[i].textContent;
                let second = cells[i + 1].textContent;
                let third = cells[i + 2].textContent;
                let fourth = cells[i + 3].textContent;
                let row = [parseInt(first), parseInt(second), parseInt(third), parseInt(fourth)]
                
                let filteredRow = row.filter(num => num)
                let zeroCnt = 4 - filteredRow.length;
                let zeros = Array(zeroCnt).fill('');
                let newRow = filteredRow.concat(zeros);

                cells[i].textContent = newRow[0];
                cells[i + 1].textContent = newRow[1];
                cells[i + 2].textContent = newRow[2];
                cells[i + 3].textContent = newRow[3];
            }
        }
    }

    function moveRight() {
        for (let i = 0; i < 16; i++) {
            if (i % 4 == 0) {
                let first = cells[i].textContent;
                let second = cells[i + 1].textContent;
                let third = cells[i + 2].textContent;
                let fourth = cells[i + 3].textContent;
                let row = [parseInt(first), parseInt(second), parseInt(third), parseInt(fourth)]
                
                let filteredRow = row.filter(num => num)
                let zeroCnt = 4 - filteredRow.length;
                let zeros = Array(zeroCnt).fill('');
                let newRow = zeros.concat(filteredRow);

                cells[i].textContent = newRow[0];
                cells[i + 1].textContent = newRow[1];
                cells[i + 2].textContent = newRow[2];
                cells[i + 3].textContent = newRow[3];
            }
        }
    }

    function moveUp() {
        for (let i = 0; i < 4; i++) {
            let first = cells[i].textContent;
            let second = cells[i + WIDTH].textContent;
            let third = cells[i + WIDTH * 2].textContent;
            let fourth = cells[i + WIDTH * 3].textContent;
            let colum = [parseInt(first), parseInt(second), parseInt(third), parseInt(fourth)]
            
            let filteredColum = colum.filter(num => num)
            let zeroCnt = 4 - filteredColum.length;
            let zeros = Array(zeroCnt).fill('');
            let newRow = filteredColum.concat(zeros);

            cells[i].textContent = newRow[0];
            cells[i + WIDTH].textContent = newRow[1];
            cells[i + WIDTH * 2].textContent = newRow[2];
            cells[i + WIDTH * 3].textContent = newRow[3];
        }
    }

    function moveDown() {
        for (let i = 0; i < 4; i++) {
            let first = cells[i].textContent;
            let second = cells[i + WIDTH].textContent;
            let third = cells[i + WIDTH * 2].textContent;
            let fourth = cells[i + WIDTH * 3].textContent;
            let colum = [parseInt(first), parseInt(second), parseInt(third), parseInt(fourth)]
            
            let filteredColum = colum.filter(num => num)
            let zeroCnt = 4 - filteredColum.length;
            let zeros = Array(zeroCnt).fill('');
            let newRow = zeros.concat(filteredColum);

            cells[i].textContent = newRow[0];
            cells[i + WIDTH].textContent = newRow[1];
            cells[i + WIDTH * 2].textContent = newRow[2];
            cells[i + WIDTH * 3].textContent = newRow[3];
        }
    }

    function keyLeft() {
        moveLeft();
    }
    function keyRight() {
        moveRight();
    }
    function keyUp() {
        moveUp();
    }
    function keyDown() {
        moveDown();
    }

    ///assign functions to keys
    function control(e) {
            if (e.key === "ArrowLeft") {
                keyLeft();
            } else if (e.key == "ArrowRight") {
                keyRight();
            } else if (e.key == "ArrowUp") {
                keyUp();
            } else if (e.key === "ArrowDown") {
                keyDown();
            }
        }
        document.addEventListener("keydown", control);
});
