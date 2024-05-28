
declare const enum SixDirectionImg {
    //% block="10:前(まえ)"
    //% jres alias = ""
    Forward = SixDirection.Forward,
    //% block="20:後(うし)ろ"
    //% jres alias = ""
    Back = SixDirection.Back,
    //% block="30:左(ひだり)"
    //% jres alias = ""
    Left = SixDirection.Left,
    //% block="40:右(みぎ)"
    //% jres alias = ""
    Right = SixDirection.Right,
    //% block="50:上(うえ)"
    //% jres alias = ""
    Up = SixDirection.Up,
    //% block="60:下(した)"
    //% jres alias = ""
    Down = SixDirection.Down
}

declare const enum TurnDirectionImg {
    //% block="10:左(ひだり)"
    //% jres alias = ""
    Left = TurnDirection.Left,
    //% block="20:右(みぎ)"
    //% jres alias = ""
    Right = TurnDirection.Right
}

namespace agent {
    //% weight=500
    //% block="01:前(まえ)`SixDirectionImg.Forward`に 1 ブロック移動(いどう)"
    export function moveFrontOne(): void {
        agent.move(FORWARD, 1);
    }
    //% weight=490
    //% block="02:向(む)きを左(ひだり)`TurnDirectionImg.Left`に変(か)える"
    export function turn_Left(): void {
        agent.turn(LEFT_TURN);
    }
    //% weight=480
    //% block="03:向(む)きを右(みぎ)`TurnDirectionImg.Right`に変(か)える"
    export function turn_Right(): void {
        agent.turn(RIGHT_TURN)
    }
    //% weight=470
    //% block="04:%direction|に%blocks|ブロック移動(いどう)"
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=160
    //% blocks.defl=1   
    export function moveImg(direction: SixDirectionImg, blocks:number): void {
        agent.move(direction, blocks);
    }
    //% weight=450
    //% block="05:向(む)きを%direction|に変(か)える"
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=80
    export function turnImg(direction: TurnDirectionImg): void {
        agent.turn(direction);
    }
}
