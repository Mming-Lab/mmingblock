
declare const enum SixDirectionImg {
    //% block="まえ"
    //% jres alias = ""
    Forward = SixDirection.Forward,
    //% block="うしろ"
    //% jres alias = ""
    Back = SixDirection.Back,
    //% block="ひだり"
    //% jres alias = ""
    Left = SixDirection.Left,
    //% block="みぎ"
    //% jres alias = ""
    Right = SixDirection.Right,
    //% block="うえ"
    //% jres alias = ""
    Up = SixDirection.Up,
    //% block="した"
    //% jres alias = ""
    Down = SixDirection.Down
}

declare const enum TurnDirectionImg {
    //% block="ひだり"
    //% jres alias = ""
    Left = TurnDirection.Left,
    //% block="みぎ"
    //% jres alias = ""
    Right = TurnDirection.Right
}

namespace agent {
    //% weight=500
    //% block="`SixDirectionImg.Forward`に 1 ぽ すすむ"
    export function moveFrontOne(): void {
        agent.move(FORWARD, 1);
    }
    //% weight=490
    //% block="`TurnDirectionImg.Left`を むく"
    export function turn_Left(): void {
        agent.turn(LEFT_TURN);
    }
    //% weight=480
    //% block="`TurnDirectionImg.Right`を むく"
    export function turn_Right(): void {
        agent.turn(RIGHT_TURN)
    }
    //% weight=470
    //% block="%direction|に%blocks|ぽ すすむ"
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=160
    //% blocks.defl=1   
    export function moveImg(direction: SixDirectionImg, blocks:number): void {
        agent.move(direction, blocks);
    }
    //% weight=460
    //% block="%direction|を むく"
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=80
    export function turnImg(direction: TurnDirectionImg): void {
        agent.turn(direction);
    }
    //% weight=450
    //% block="%direction|に 1 ぽ すすむ"
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=160
    //% blocks.defl=1   
    export function moveOneImg(direction: SixDirectionImg): void {
        agent.move(direction, 1);
    }
}
