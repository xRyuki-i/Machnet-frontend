    const sky = document.querySelector('.sky');
    const bird = document.querySelector('.bird');
    const menu = document.querySelector('.menu');
    const ground = document.querySelector('.ground');
    const tap = document.querySelector('.tapToStart');
    const score = document.querySelector('.score__sky');
    const bestScore = document.querySelector('.bestScore');
    const pauseIndicator = document.querySelector('.pause');
    const gameScreen = document.querySelector('.gameScreen');
    const resumeIndicator = document.querySelector('.resume');

    const gap = 450; 
    const gravity = 10;
    const jumpForce = 70;
    
    let counter = 0;
    let obstacleTimeout;
    let birdLeft = 190;
    let birdBottom = 100;
    let highScore = localStorage.getItem("best");;
    
    let angle = -30;
    let isPause = true;
    let isGameOver = false;

    function startGame(){
        if (!isPause) {
            if (birdBottom > 0) {
            updateBird();
            updateScore();
            }
        }
    }
    
    function updateBird() {
        birdBottom = parseInt(window.getComputedStyle(bird).getPropertyValue('bottom'));
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + 'px';
        
        if (angle < 90) {
            angle += 7;
        }        
        let turn = "rotate"+ "(" + angle + "deg" + ")";

        bird.style.transform = turn;

        let positionX = window.getComputedStyle(ground).getPropertyValue('background-position-x');
        let newPosX = parseInt(positionX) + 20;
        ground.style.backgroundPositionX = newPosX + "px";
    }

    function jumpBird(birdBottom) {
        if(birdBottom < 450 && birdBottom > 5 && !isPause) birdBottom += jumpForce;
        bird.style.bottom = birdBottom + 'px';
        bird.style.transform = "rotate(-15deg)";
        angle = -30;
    }

    function space(e) {
        if (e.keyCode === 32) {
            jumpBird(birdBottom);
        }
    }

    function addObstacle() {
        let obstacleLeft = 500;
        let obstacleBottom = getRandomBottom();

        const obstacle = document.createElement('section');
        const topObstacle = document.createElement('section');

        if (!isGameOver) {
            obstacle.classList.add('obstacle');
            topObstacle.classList.add('topObstacle');
        }

        gameScreen.appendChild(obstacle);
        gameScreen.appendChild(topObstacle);

        obstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleBottom + 'px';

        topObstacle.style.left = obstacleLeft + 'px';
        topObstacle.style.bottom = obstacleBottom + gap + 'px';


        function updateObstacle(){
            if (!isGameOver) {
                obstacleLeft -= 2;
                obstacle.style.left = obstacleLeft + 'px';
                topObstacle.style.left = obstacleLeft + 'px';
            }
            
            if (obstacleLeft === -80) {
                clearInterval(obstacleInterval);
                gameScreen.removeChild(obstacle);
                gameScreen.removeChild(topObstacle);
            }

            if (obstacleLeft === 110) {
                counter += 1;
            }

            if (obstacleLeft > 110 && obstacleLeft < 250 &&
                (birdBottom < obstacleBottom + 172 || birdBottom > obstacleBottom + 322)            
                || birdBottom < 0) {
                gameOver();
                clearInterval(obstacleInterval);
            }
        }


        let obstacleInterval = setInterval(()=>{
            if (!isPause) {
                updateObstacle();
            }
        }, 20);
        obstacleTimeout = setTimeout(addObstacle, 3000);
    }

    function getRandomBottom(){
        return Math.floor(Math.random() * 75);
    }

    function gameOver() {
        clearInterval(gameInterval);
        storeBestScore();
        isGameOver = true;
        document.removeEventListener('keypress', space);
        menu.style.display = 'flex';
    }

    function pause() {
        if (isPause) {
            isPause = false;
            setTimeout(addObstacle, 1500);
            pauseIndicator.style.display = "none";
            resumeIndicator.style.display = "block";
            tap.style.display = "none";
            score.style.display = "block";
            document.addEventListener('keypress', space); 
        } else {
            isPause = true;  
            clearTimeout(obstacleTimeout);
             pauseIndicator.style.display = "block";
            resumeIndicator.style.display = "none"; 
            document.removeEventListener('keypress', space);          
        }
    }

    function updateScore(){
        score.innerText = counter;
    } 

    function storeBestScore() {
        if (highScore < counter) {
            localStorage.setItem("best", counter);
            highScore = localStorage.getItem("best");
            bestScore.innerText = highScore;
        }else {
            bestScore.innerText = highScore;
        }
    };

// Main
    const gameInterval = setInterval(()=>{
        startGame(); 
    },70) 
    
    document.addEventListener('click', pause);
