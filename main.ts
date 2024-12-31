function createAsteroids () {
    info.startCountdown(15)
    while (info.countdown() > 0) {
        projectile = sprites.createProjectileFromSide(assets.image`asteroid0`, randint(-75, -25), randint(-25, 25))
        projectile.setPosition(160, randint(5, 115))
        pause(randint(250, 1000))
    }
}
function startGame () {
    info.setLife(3)
    scene.setBackgroundImage(assets.image`spaceBackground`)
}
let projectile: Sprite = null
startGame()
