loops.forever(function () {
    agent.moveFrontOne()
    agent.moveOneImg(SixDirectionImg.Forward)
    agent.moveImg(SixDirectionImg.Forward, 1)
    agent.turn_Left()
    agent.turn_Right()
    agent.turnImg(TurnDirectionImg.Left)
})
