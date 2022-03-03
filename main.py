def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
        """),
        spacePlane,
        200,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    Alien.destroy()
    Alien.destroy(effects.fire, 500)
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    otherSprite2.destroy(effects.spray, 500)
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

Alien: Sprite = None
projectile: Sprite = None
spacePlane: Sprite = None
spacePlane = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(spacePlane, 200, 200)
spacePlane.set_stay_in_screen(True)
info.set_life(3)
info.start_countdown(30)

def on_update_interval():
    global Alien
    Alien = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    Alien.set_velocity(-100, 0)
    Alien.set_position(160, 0)
    Alien.set_position(160, randint(0, 120))
game.on_update_interval(500, on_update_interval)
