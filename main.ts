loops.forever(function () {
    agent.moveFrontOne()
    agent.turn_Left()
    agent.turn_Right()
    agent.turnImg(TurnDirectionImg.Left)
    agent.moveImg(SixDirectionImg.Forward, 1)
})
