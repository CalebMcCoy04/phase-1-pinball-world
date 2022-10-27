const gameList =   document.querySelector('.game-list')
const mainGame = document.querySelector('.game-details')
const gameImage = document.querySelector('#detail-image')
const gameName = document.querySelector('#detail-title')

fetch('http://localhost:3000/games')
.then(r => r.json())
.then(gamesArray => {
    gamesArray.forEach(game =>{
        renderGameNames(game)
        renderMain(gamesArray[0])
    })
})


function renderGameNames(gameListObj) {
    const games = document.createElement('h5')
    games.textContent = `${gameListObj.name} (${gameListObj.manufacturer_name})`
    gameList.append(games)
    games.addEventListener('click', (e) =>{
        renderMain(gameListObj)
    })
}
function renderMain(gameObj){
    gameImage.src = gameObj.image
    gameName.textContent = gameObj.name
    highScore.textContent = gameObj.high_score
    mainGame.appendChild(gameImage, gameName, highScore)
}
const formHigh = document.querySelector('#high-score-form')
const highScore = document.querySelector('#detail-high-score')



formHigh.addEventListener('submit', (e) => {
    e.preventDefault()
 highScore.innerHTML = ''
  highScore.append(e.target['score-input'].value)

})
