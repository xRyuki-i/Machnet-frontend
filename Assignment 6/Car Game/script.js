const track = document.querySelector('#track');
let lastRenderTime = 0;
let isGameOver = false;
let addCounter = 0;
let runRequest = true;

const carSpeed = 5;
const backGroundSpeed = "120px";


const runGame = () => {
    if (runRequest) {
        window.requestAnimationFrame(main);
    }
}

const positionGenerator = () => {
    return {
        x: Math.floor(Math.random() * 4) + 1,
        y: 0
    }
}

const getStyle = (element) => {
    return getComputedStyle(element);
}

function main(currentTime) {

    let trackStyle = getStyle(track);
    let positionY = trackStyle.getPropertyValue('background-position-y');
    let newPosY = parseInt(positionY) + parseInt(backGroundSpeed);
    track.style.backgroundPositionY = newPosY + "px";

    if (isGameOver) {
        runRequest = false;
        gameOver();
    }

    runGame();
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondSinceLastRender < 1 / carSpeed) return;
    addCounter += 1
    if (addCounter === 2) {
        addObstacle();
        addCounter = 0;
    }
    lastRenderTime = currentTime;

    update();
    render();
}

window.requestAnimationFrame(main);


const update = () => {
    updatePlayer();
    updateObstacle();
}

const render = () => {
    track.innerHTML = "";
    renderPlayer(track);
    renderObstacle(track);
}

//Player
const player = { x: 1, y: 6 };
const updatePlayer = () => {
    const changePosition = getUpdatedPositon();
    player.x = changePosition;
}

const renderPlayer = (track) => {
    const playerElement = document.createElement('div');
    playerElement.style.gridColumnStart = player.x;
    playerElement.style.gridRowStart = player.y;
    playerElement.classList.add('player');
    track.appendChild(playerElement);
}

const hitObstacle = (obstacle) => {
    return player.x === obstacle.x && (player.y - 1) === obstacle.y
}

//Input

let changePosition = player.x;
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowLeft':
            if (changePosition === 1) break;
            changePosition = changePosition - 1;
            break;
        case 'ArrowRight':
            if (changePosition === 4) break;
            changePosition = changePosition + 1;
            break;
    }
})

const getUpdatedPositon = () => {
    return changePosition;
}

//Obstacle
let obstacles = [
    positionGenerator()
]

const updateObstacle = () => {
    obstacles.map(obstacle => {
        if (obstacle.y < 8) {
            obstacle.y += 1;
        } else {
            obstacles.shift();
        }

        if (hitObstacle(obstacle)) {
            isGameOver = true;
        }
    })


}

const addObstacle = () => {
    const newPosition = positionGenerator();
    const x = newPosition.x;
    const y = newPosition.y;
    obstacles.push({ x, y });
}



const renderObstacle = (track) => {
    obstacles.map(obstacle => {
        const obstacleElement = document.createElement('div');
        obstacleElement.style.gridColumnStart = obstacle.x;
        obstacleElement.style.gridRowStart = obstacle.y;
        obstacleElement.classList.add('obstacle');
        track.appendChild(obstacleElement);
    })
}

const gameOver = () => {
    const resultContainer = document.querySelector('.gameMenu');
    resultContainer.style.display = "block";
}

