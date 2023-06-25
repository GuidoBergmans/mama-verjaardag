function random () {
    if (make_the_random_logic == 123) {
        oven = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f c c c c c c c c c c c c c c f 
            f c c c c f f f f f f c c c c f 
            f c c c f f f f f f f f c c c f 
            f c c f f f f f f f f f f c c f 
            f c c f f f f f f f f f f c c f 
            f c c f f f f f f f f f f c c f 
            f c c c c c c c c c c c c c c f 
            f b b b b b b b b b b b b b b f 
            f b b b b b b b b b b b b b b f 
            f b b b b b b b b b b b b b b f 
            f b b b b b f f f f b b b b b f 
            f b b b f f 4 2 4 2 f f b b b f 
            f b b f 4 2 4 2 4 4 2 2 f b b f 
            f b b f 5 4 5 4 4 5 2 4 f b b f 
            f f f f 4 2 4 5 2 4 5 2 f f f f 
            `, SpriteKind.Player)
        oven.changeScale(1.5, ScaleAnchor.Middle)
        oven.setPosition(20, 30)
        glazuren = sprites.create(img`
            f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 f f f 3 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 f f 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 3 f 9 9 9 9 9 f 
            f 9 9 9 9 9 3 f f f 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        glazuren.changeScale(1.5, ScaleAnchor.Middle)
        glazuren.setPosition(80, 30)
        kaars = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 4 4 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 4 4 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        kaars.changeScale(1.5, ScaleAnchor.Middle)
        kaars.setPosition(140, 30)
        pauseUntil(() => controller.anyButton.isPressed())
        sprites.destroy(oven)
        pauseUntil(() => controller.left.isPressed())
        pauseUntil(() => controller.right.isPressed())
        sprites.destroy(glazuren)
        taart.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f f f f f f f f f f f f f f 
            f 2 3 3 3 3 3 8 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 5 3 3 3 3 3 3 3 2 3 3 f 
            f 3 e e e 3 4 e e 3 e 3 e e e f 
            f e e e e 3 e e e 3 e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
        pauseUntil(() => controller.down.isPressed())
        sprites.destroy(kaars)
        taart.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 4 f . . . . . . . . 
            . . . . . f 4 4 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            f f f f f f f 2 f f f f f f f f 
            f 2 3 3 3 3 3 8 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 5 3 3 3 3 3 3 3 2 3 3 f 
            f 3 e e e 3 4 e e 3 e 3 e e e f 
            f e e e e 3 e e e 3 e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
    } else if (make_the_random_logic == 321) {
        kaars = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 4 4 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 4 4 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        kaars.changeScale(1.5, ScaleAnchor.Middle)
        kaars.setPosition(20, 30)
        glazuren = sprites.create(img`
            f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 f f f 3 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 f f 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 3 f 9 9 9 9 9 f 
            f 9 9 9 9 9 3 f f f 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        glazuren.changeScale(1.5, ScaleAnchor.Middle)
        glazuren.setPosition(80, 30)
        oven = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f c c c c c c c c c c c c c c f 
            f c c c c f f f f f f c c c c f 
            f c c c f f f f f f f f c c c f 
            f c c f f f f f f f f f f c c f 
            f c c f f f f f f f f f f c c f 
            f c c f f f f f f f f f f c c f 
            f c c c c c c c c c c c c c c f 
            f b b b b b b b b b b b b b b f 
            f b b b b b b b b b b b b b b f 
            f b b b b b b b b b b b b b b f 
            f b b b b b f f f f b b b b b f 
            f b b b f f 4 2 4 2 f f b b b f 
            f b b f 4 2 4 2 4 4 2 2 f b b f 
            f b b f 5 4 5 4 4 5 2 4 f b b f 
            f f f f 4 2 4 5 2 4 5 2 f f f f 
            `, SpriteKind.Player)
        oven.changeScale(1.5, ScaleAnchor.Middle)
        oven.setPosition(140, 30)
        pauseUntil(() => controller.down.isPressed())
        sprites.destroy(kaars)
        taart.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 4 f . . . . . . . . 
            . . . . . f 4 4 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            f f f f f f f f f f f f f f f f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
        pauseUntil(() => controller.left.isPressed())
        pauseUntil(() => controller.right.isPressed())
        sprites.destroy(glazuren)
        taart.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 4 f . . . . . . . . 
            . . . . . f 4 4 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            f f f f f f f 2 f f f f f f f f 
            f 2 3 3 3 3 3 8 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 5 3 3 3 3 3 3 3 2 3 3 f 
            f 3 e e e 3 4 e e 3 e 3 e e e f 
            f e e e e 3 e e e 3 e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
        pause(25)
        pauseUntil(() => !(controller.anyButton.isPressed()))
        pauseUntil(() => controller.anyButton.isPressed())
        sprites.destroy(oven)
    } else if (make_the_random_logic == 312) {
        kaars = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 4 4 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 4 4 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        kaars.changeScale(1.5, ScaleAnchor.Middle)
        kaars.setPosition(20, 30)
        oven = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f c c c c c c c c c c c c c c f 
            f c c c c f f f f f f c c c c f 
            f c c c f f f f f f f f c c c f 
            f c c f f f f f f f f f f c c f 
            f c c f f f f f f f f f f c c f 
            f c c f f f f f f f f f f c c f 
            f c c c c c c c c c c c c c c f 
            f b b b b b b b b b b b b b b f 
            f b b b b b b b b b b b b b b f 
            f b b b b b b b b b b b b b b f 
            f b b b b b f f f f b b b b b f 
            f b b b f f 4 2 4 2 f f b b b f 
            f b b f 4 2 4 2 4 4 2 2 f b b f 
            f b b f 5 4 5 4 4 5 2 4 f b b f 
            f f f f 4 2 4 5 2 4 5 2 f f f f 
            `, SpriteKind.Player)
        oven.changeScale(1.5, ScaleAnchor.Middle)
        oven.setPosition(80, 30)
        glazuren = sprites.create(img`
            f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 f f f 3 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 f f 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 3 f 9 9 9 9 9 f 
            f 9 9 9 9 9 3 f f f 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        glazuren.changeScale(1.5, ScaleAnchor.Middle)
        glazuren.setPosition(140, 30)
        pauseUntil(() => controller.down.isPressed())
        sprites.destroy(kaars)
        taart.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 4 f . . . . . . . . 
            . . . . . f 4 4 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            f f f f f f f f f f f f f f f f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
        pauseUntil(() => !(controller.anyButton.isPressed()))
        pauseUntil(() => controller.anyButton.isPressed())
        sprites.destroy(oven)
        pauseUntil(() => controller.left.isPressed())
        pauseUntil(() => controller.right.isPressed())
        sprites.destroy(glazuren)
        taart.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 4 f . . . . . . . . 
            . . . . . f 4 4 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            f f f f f f f 2 f f f f f f f f 
            f 2 3 3 3 3 3 8 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 5 3 3 3 3 3 3 3 2 3 3 f 
            f 3 e e e 3 4 e e 3 e 3 e e e f 
            f e e e e 3 e e e 3 e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
    } else if (make_the_random_logic == 132) {
        oven = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f c c c c c c c c c c c c c c f 
            f c c c c f f f f f f c c c c f 
            f c c c f f f f f f f f c c c f 
            f c c f f f f f f f f f f c c f 
            f c c f f f f f f f f f f c c f 
            f c c f f f f f f f f f f c c f 
            f c c c c c c c c c c c c c c f 
            f b b b b b b b b b b b b b b f 
            f b b b b b b b b b b b b b b f 
            f b b b b b b b b b b b b b b f 
            f b b b b b f f f f b b b b b f 
            f b b b f f 4 2 4 2 f f b b b f 
            f b b f 4 2 4 2 4 4 2 2 f b b f 
            f b b f 5 4 5 4 4 5 2 4 f b b f 
            f f f f 4 2 4 5 2 4 5 2 f f f f 
            `, SpriteKind.Player)
        oven.changeScale(1.5, ScaleAnchor.Middle)
        oven.setPosition(20, 30)
        kaars = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 4 4 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 4 4 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        kaars.changeScale(1.5, ScaleAnchor.Middle)
        kaars.setPosition(80, 30)
        glazuren = sprites.create(img`
            f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 f f f 3 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 f f 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 3 f 9 9 9 9 9 f 
            f 9 9 9 9 9 3 f f f 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        glazuren.changeScale(1.5, ScaleAnchor.Middle)
        glazuren.setPosition(140, 30)
        pauseUntil(() => controller.anyButton.isPressed())
        sprites.destroy(oven)
        pauseUntil(() => controller.down.isPressed())
        sprites.destroy(kaars)
        taart.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 4 f . . . . . . . . 
            . . . . . f 4 4 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            f f f f f f f f f f f f f f f f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
        pauseUntil(() => controller.left.isPressed())
        pauseUntil(() => controller.right.isPressed())
        sprites.destroy(glazuren)
        taart.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 4 f . . . . . . . . 
            . . . . . f 4 4 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            f f f f f f f 2 f f f f f f f f 
            f 2 3 3 3 3 3 8 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 5 3 3 3 3 3 3 3 2 3 3 f 
            f 3 e e e 3 4 e e 3 e 3 e e e f 
            f e e e e 3 e e e 3 e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
    } else if (make_the_random_logic == 231) {
        glazuren = sprites.create(img`
            f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 f f f 3 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 f f 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 3 f 9 9 9 9 9 f 
            f 9 9 9 9 9 3 f f f 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        glazuren.changeScale(1.5, ScaleAnchor.Middle)
        glazuren.setPosition(20, 30)
        kaars = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 4 4 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 4 4 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        kaars.changeScale(1.5, ScaleAnchor.Middle)
        kaars.setPosition(80, 30)
        oven = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f c c c c c c c c c c c c c c f 
            f c c c c f f f f f f c c c c f 
            f c c c f f f f f f f f c c c f 
            f c c f f f f f f f f f f c c f 
            f c c f f f f f f f f f f c c f 
            f c c f f f f f f f f f f c c f 
            f c c c c c c c c c c c c c c f 
            f b b b b b b b b b b b b b b f 
            f b b b b b b b b b b b b b b f 
            f b b b b b b b b b b b b b b f 
            f b b b b b f f f f b b b b b f 
            f b b b f f 4 2 4 2 f f b b b f 
            f b b f 4 2 4 2 4 4 2 2 f b b f 
            f b b f 5 4 5 4 4 5 2 4 f b b f 
            f f f f 4 2 4 5 2 4 5 2 f f f f 
            `, SpriteKind.Player)
        oven.changeScale(1.5, ScaleAnchor.Middle)
        oven.setPosition(140, 30)
        pauseUntil(() => controller.left.isPressed())
        pauseUntil(() => controller.right.isPressed())
        sprites.destroy(glazuren)
        taart.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f f f f f f f f f f f f f f 
            f 2 3 3 3 3 3 8 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 5 3 3 3 3 3 3 3 2 3 3 f 
            f 3 e e e 3 4 e e 3 e 3 e e e f 
            f e e e e 3 e e e 3 e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
        pauseUntil(() => controller.down.isPressed())
        sprites.destroy(kaars)
        taart.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 4 f . . . . . . . . 
            . . . . . f 4 4 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            f f f f f f f 2 f f f f f f f f 
            f 2 3 3 3 3 3 8 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 5 3 3 3 3 3 3 3 2 3 3 f 
            f 3 e e e 3 4 e e 3 e 3 e e e f 
            f e e e e 3 e e e 3 e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
        pauseUntil(() => !(controller.anyButton.isPressed()))
        pauseUntil(() => controller.anyButton.isPressed())
        sprites.destroy(oven)
    } else {
        glazuren = sprites.create(img`
            f f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 f f f 3 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 f f 9 9 9 9 9 f 
            f 9 9 9 9 9 f 3 3 3 f 9 9 9 9 9 f 
            f 9 9 9 9 9 3 f f f 3 9 9 9 9 9 f 
            f 9 9 9 9 9 3 3 3 3 3 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        glazuren.changeScale(1.5, ScaleAnchor.Middle)
        glazuren.setPosition(20, 30)
        oven = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f c c c c c c c c c c c c c c f 
            f c c c c f f f f f f c c c c f 
            f c c c f f f f f f f f c c c f 
            f c c f f f f f f f f f f c c f 
            f c c f f f f f f f f f f c c f 
            f c c f f f f f f f f f f c c f 
            f c c c c c c c c c c c c c c f 
            f b b b b b b b b b b b b b b f 
            f b b b b b b b b b b b b b b f 
            f b b b b b b b b b b b b b b f 
            f b b b b b f f f f b b b b b f 
            f b b b f f 4 2 4 2 f f b b b f 
            f b b f 4 2 4 2 4 4 2 2 f b b f 
            f b b f 5 4 5 4 4 5 2 4 f b b f 
            f f f f 4 2 4 5 2 4 5 2 f f f f 
            `, SpriteKind.Player)
        oven.changeScale(1.5, ScaleAnchor.Middle)
        oven.setPosition(80, 30)
        kaars = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 9 9 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 4 4 9 9 9 9 9 9 f 
            f 9 9 9 9 4 4 4 4 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 2 2 9 9 9 9 9 9 f 
            f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        kaars.changeScale(1.5, ScaleAnchor.Middle)
        kaars.setPosition(140, 30)
        pauseUntil(() => controller.left.isPressed())
        pauseUntil(() => controller.right.isPressed())
        sprites.destroy(glazuren)
        taart.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f f f f f f f f f f f f f f 
            f 2 3 3 3 3 3 8 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 5 3 3 3 3 3 3 3 2 3 3 f 
            f 3 e e e 3 4 e e 3 e 3 e e e f 
            f e e e e 3 e e e 3 e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
        pauseUntil(() => !(controller.anyButton.isPressed()))
        pauseUntil(() => controller.anyButton.isPressed())
        sprites.destroy(oven)
        pauseUntil(() => controller.down.isPressed())
        sprites.destroy(kaars)
        taart.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 4 f . . . . . . . . 
            . . . . . f 4 4 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            f f f f f f f 2 f f f f f f f f 
            f 2 3 3 3 3 3 8 3 3 3 3 3 3 3 f 
            f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
            f 3 3 3 5 3 3 3 3 3 3 3 2 3 3 f 
            f 3 e e e 3 4 e e 3 e 3 e e e f 
            f e e e e 3 e e e 3 e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `)
    }
    info.changeScoreBy(Math.round(info.countdown()))
    info.stopCountdown()
    taart.setVelocity(50, 0)
    pause(1750)
    sprites.destroy(taart)
}
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.gameOver(true)
})
let random1 = 0
let taart: Sprite = null
let kaars: Sprite = null
let glazuren: Sprite = null
let oven: Sprite = null
let make_the_random_logic = 0
let tijd = 10
let timer = 0
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffcccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffcccccffffccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccbbbccffffcccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccbbbccfffffccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffcccbbbcccfffffcccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffcccccccccccfffffccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccfffffcccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccccccccccffffcccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccfffcccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee11118888888888888888888eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee11111888888888881111188eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee11111888888888811111118eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee11118888888888111111118eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee888888888881f8811111188eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee888888888811f8881188888eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee888888888111f8888888888eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee888888881111f8888888888eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee888888811111f8888888888eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee888888888888f8888888888eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee88888eeeeeeeeeeeee88888eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee88888888eeeeeeeee888888eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee888888888eeeeeee8888888eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee99999999999999999999999eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee99999999999999999999999eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee99999f999999999fffff999eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee999ffff999999999999f999eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee99ff99ffff9999999999999eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee99999999999999999999999eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee999999999999999fffff999eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee99999999ff9999ff999ff99eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee9999fffff99999999999999eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee99999999999999999999999eeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeee
    eeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
let mama = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f d d f f c c . 
    f f f f f d d f f c c f . 
    f f f b d d d d b f f f . 
    . f 4 f d d d d f 4 f . . 
    . f d d d d d d d d f . . 
    . f f f d d d d f f f . . 
    d d f b f f f f b f d d . 
    d d f 7 7 7 7 7 7 f d d . 
    . d f 6 6 6 6 6 6 f d . . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mama.setScale(4.5, ScaleAnchor.Middle)
mama.setPosition(85, 55)
info.setLife(3)
forever(function () {
    timer = 0
    taart = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Food)
    taart.setPosition(0, 75)
    taart.setScale(2, ScaleAnchor.Middle)
    taart.setVelocity(50, 0)
    pause(1723)
    taart.setVelocity(0, 0)
    random1 = randint(0, 6)
    if (random1 == 1) {
        make_the_random_logic = 123
    } else if (random1 == 2) {
        make_the_random_logic = 321
    } else if (random1 == 3) {
        make_the_random_logic = 312
    } else if (random1 == 4) {
        make_the_random_logic = 132
    } else if (random1 == 5) {
        make_the_random_logic = 231
    } else {
        make_the_random_logic = 213
    }
    info.startCountdown(tijd)
    tijd = tijd * 0.8
    random()
})
