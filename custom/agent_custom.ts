
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

namespace agent {

    //% blockGap=8
    //% weight=330
    //% shim=TD_ID blockId=SixDirectionImgBlock
    //% block="%sixDirectionImg"
    //% sixDirectionImg.fieldEditor="gridpicker"
    export function __sixDirectionImg(sixDirectionImg: SixDirectionImg): number {
        return sixDirectionImg;
    }

    //% weight=500
    //% block="01:`SixDirectionImg.Forward`前(まえ)に 1 ブロック移動(いどう)"
    export function moveFrontOne(): void {
        agent.move(FORWARD, 1);
    }
    //% weight=490
    //% block="02:`TurnDirectionImg.LeftTurn`向(む)きを左(ひだり)に変(か)える"
    export function turn_Left(): void {
        agent.turn(LEFT_TURN);
    }
    //% weight=480
    //% block="03:`TurnDirectionImg.RightTurn`向(む)きを右(みぎ)に変(か)える"
    export function turn_Right(): void {
        agent.turn(RIGHT_TURN)
    }
    //% weight=470
    //% block="04:エージェントを%direction|に%blocks|ブロック移動(いどう)させる"
    //% blocks.defl=1
    export function moveImg(direction: SixDirectionImg, blocks:number): void {
        agent.move(direction, blocks);
    }



}