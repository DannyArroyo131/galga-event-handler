controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 5 5 5 5 5 5 5 5 7 7 . 
        . . . 7 5 7 7 7 7 7 7 7 7 5 7 . 
        . . . 7 5 5 5 5 5 5 5 5 5 5 7 . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
    music.pewPew.play()
})
info.onCountdownEnd(function () {
    if (100 < info.score()) {
        game.over(true, effects.confetti)
    } else {
        game.over(false, effects.slash)
    }
})
function StartGame () {
    return "Hello" + "" + "Space Traveler" + ""
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.knock.play()
    Alien.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.bigCrash.play()
    pause(5000)
})
function Spaceship (MySpaceShip: Sprite) {
    spacePlane = sprites.create(img`
        .......8............
        .......88...........
        .......888..........
        .......8888.........
        .......88888........
        .......888888.......
        .......81888888881..
        .......821122211111.
        .......81888888881..
        .......888888.......
        .......88888........
        .......8888.........
        .......888..........
        .......88...........
        .......8............
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Player)
    controller.moveSprite(spacePlane, 100, 100)
    spacePlane.setStayInScreen(true)
    info.setLife(3)
    info.startCountdown(30)
}
let Alien: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
Spaceship(spacePlane)
let Beginning = StartGame()
game.splash(Beginning)
forever(function () {
    music.playMelody("C5 B A A B A A B ", 120)
})
game.onUpdateInterval(500, function () {
    Alien = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a a a a c a c . . 
        . . c c f f f f a a a c a a c . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c c c a b b 6 b b b c c 
        c a f f f f c c c 6 b b b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b a . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c b a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `, SpriteKind.Enemy)
    Alien.setVelocity(-100, 0)
    Alien.setPosition(160, 0)
    Alien.setPosition(160, randint(0, 120))
})
