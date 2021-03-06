namespace SpriteKind {
    export const Hoop = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . 1 . . . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . 1 . 1 1 1 . . . . . 
        . . . . . . 1 1 . 1 . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 1 . 1 . . . . . . 
        . . . . . . 1 1 . 1 . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . 1 . 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 . 1 1 1 1 . . . . . 
        . . . . . 1 . 1 . . 1 . . . . . 
        `, nemy, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Hoop, function (sprite, otherSprite) {
    game.over(true, effects.splatter)
})
info.onLifeZero(function () {
    music.playMelody("- F A E F E C F ", 120)
    game.over(false, effects.melt)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let nemy: Sprite = null
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ......................................................................................................3.........................................................
    ............................................33........................................................3.........................................................
    .............................................3........................................................3.........................................................
    ..............................................3......................................................3..........................................................
    ..............................................3.....................................................3...........................................................
    ...............................................3...................................................3............................................................
    ...............................................3...................................................3............................................................
    ...............................................3..................................................3.............................................................
    ..............................................3..................................................33.............................................................
    ..............................................3..................................................3..............................................................
    ..............................................3..................................................3..............................................................
    ..............................................3..................................................3..............................................................
    ..............................................3..................................................3..............................................................
    ..............................................3..................................................3..............................................................
    .............................................3...................................................3..............................................................
    .............................................3...................................................3..............................................................
    .............................................3....................................................3.............................................................
    .............................................3....................................................3.............................................................
    ............................................3.....................................................3.............................................................
    ............................................3......................................................3............................................................
    ............................................3......................................................3............................................................
    ...........................................3........................................................3...........................................................
    ...........................................3........................................................3...........................................................
    ..........................................3.........................................................3...........................................................
    ..........................................3..........................................................3..........................................................
    .........................................3...........................................................3..........................................................
    .........................................3...........................................................3..........................................................
    ........................................3............................................................3..........................................................
    ........................................3.............................................................3.........................................................
    .......................................3..............................................................3.........................................................
    .......................................3..............................................................3.........................................................
    ......................................3...............................................................3.........................................................
    ......................................3................................................................3........................................................
    .....................................3.................................................................3........................................................
    .....................................3.................................................................3........................................................
    ....................................3..................................................................3........................................................
    ....................................3...................................................................3.......................................................
    ....................................3...................................................................3.......................................................
    ....................................3...................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ..................................3.....................................................................3.......................................................
    ..................................3.....................................................................3.......................................................
    .................................3......................................................................3.......................................................
    .................................3......................................................................3.......................................................
    .................................3......................................................................3.......................................................
    ................................3.......................................................................3.......................................................
    ................................3.......................................................................3.......................................................
    ................................3.......................................................................3.......................................................
    ...............................3........................................................................3.......................................................
    ...............................3.......................................................................3........................................................
    ...............................3.......................................................................3........................................................
    ...............................3.......................................................................3........................................................
    ...............................3.......................................................................3........................................................
    ...............................3.......................................................................3........................................................
    ...............................3......................................................................3.........................................................
    ...............................3......................................................................3.........................................................
    ...............................3......................................................................3.........................................................
    ...............................3.....................................................................3..........................................................
    ...............................3.....................................................................3..........................................................
    ...............................3.....................................................................3..........................................................
    ...............................3....................................................................3...........................................................
    ...............................3....................................................................3...........................................................
    ...............................3....................................................................3...........................................................
    ...............................3...................................................................3............................................................
    ...............................33..................................................................3............................................................
    ................................3.................................................................3.............................................................
    .................................33..............................................................3..............................................................
    ..................................333...........................................................3...............................................................
    ....................................3333333.....................................................3...............................................................
    ...........................................33333...............................................3................................................................
    ...............................................3.............................................33.................................................................
    .............................................................................................3..................................................................
    ............................................................................................3...................................................................
    ..........................................................................................33....................................................................
    ..........................................................................................3.....................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
nemy = sprites.create(img`
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    2 2 2 2 2 . . . . . . . 2 2 2 . 
    2 . . . . . . . . . . . . . 2 2 
    2 . . . . 2 2 2 2 . . . . . . 2 
    2 . . . 2 2 . . 2 . . . . . . 2 
    2 . . 2 2 . . . 2 2 2 . . . 2 2 
    2 2 2 2 . . . . . . 2 2 2 2 2 . 
    . 2 2 . . . . . . . . . . . . . 
    `, SpriteKind.Player)
nemy.setPosition(60, 111)
nemy.setVelocity(50, 0)
nemy.setFlag(SpriteFlag.BounceOnWall, true)
let mySprite2 = sprites.create(img`
    ............................................................
    33333.........33333..........................33333..........
    33333.........33333........333333............33333..........
    333333........33333........3333333...........33333.......333
    3333333.......33333........333333333.........33333.......333
    33333333......33333.......33333333333........33333......3333
    333333333.................3333333333333................33333
    .333333333.............3333333333333333333............333333
    .333333333333.......3333333333333333333333333333333333333333
    ..3333333333333333333333333333333333333333333333333333333333
    ...3333333333333333333333333333.3333333333333333333333333333
    ....333333333333333333333333333....3333333333333333333333333
    ......3333333333333333333333.........333333333333333333333..
    .........3333333333333333.......................333333333...
    `, SpriteKind.Hoop)
mySprite2.setPosition(75, 8)
let cttv = sprites.create(img`
    . 2 2 . 2 2 2 . 2 2 . . 2 . . . 
    . 2 . . 2 . 2 . 2 . 2 . 2 . . . 
    . 2 . . 2 . 2 . 2 . . 2 2 . . . 
    . 2 2 . 2 2 2 . 2 . . . 2 . . . 
    . . . . . . . . . . . . . . . . 
    . 2 2 . . 2 2 2 . 2 2 . . 2 2 . 
    . 2 . 2 . 2 . 2 . 2 2 2 2 2 2 . 
    . 2 . 2 . 2 . 2 . 2 . . . . 2 . 
    . 2 2 . . 2 2 2 . 2 . . . . 2 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
cttv.setPosition(68, 50)
cttv.setVelocity(50, 0)
cttv.setFlag(SpriteFlag.BounceOnWall, true)
info.setLife(3)
