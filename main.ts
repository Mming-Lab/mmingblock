loops.forever(function () {
    agent.moveFrontOne()
    agent.turn_Left()
    agent.turn_Right()
    agent.moveImg(SixDirectionImg.Forward, 1)
})
