 
enum Easing {
    //% block=""
    //% jres alias = ""
    linear,
    //% block=""
    //% jres alias = ""
    spring,
    //% block=""
    //% jres alias = ""
    in_quad,
    //% block=""
    //% jres alias = ""
    out_quad,
    //% block=""
    //% jres alias = ""
    in_out_quad,
    //% block=""
    //% jres alias = ""
    in_cubic,
    //% block=""
    //% jres alias = ""
    out_cubic,
    //% block=""
    //% jres alias = ""
    in_out_cubic,
    //% block=""
    //% jres alias = ""
    in_quart,
    //% block=""
    //% jres alias = ""
    out_quart,
    //% block=""
    //% jres alias = ""
    in_out_quart,
    //% block=""
    //% jres alias = ""
    in_quint,
    //% block=""
    //% jres alias = ""
    out_quint,
    //% block=""
    //% jres alias = ""
    in_out_quint,
    //% block=""
    //% jres alias = ""
    in_sine,
    //% block=""
    //% jres alias = ""
    out_sine,
    //% block=""
    //% jres alias = ""
    in_out_sine,
    //% block=""
    //% jres alias = ""
    in_expo,
    //% block=""
    //% jres alias = ""
    out_expo,
    //% block=""
    //% jres alias = ""
    in_out_expo,
    //% block=""
    //% jres alias = ""
    in_circ,
    //% block=""
    //% jres alias = ""
    out_circ,
    //% block=""
    //% jres alias = ""
    in_out_circ,
    //% block=""
    //% jres alias = ""
    in_bounce,
    //% block=""
    //% jres alias = ""
    out_bounce,
    //% block=""
    //% jres alias = ""
    in_out_bounce,
    //% block=""
    //% jres alias = ""
    in_back,
    //% block=""
    //% jres alias = ""
    out_back,
    //% block=""
    //% jres alias = ""
    in_out_back,
    //% block=""
    //% jres alias = ""
    in_elastic,
    //% block=""
    //% jres alias = ""
    out_elastic,
    //% block=""
    //% jres alias = ""
    in_out_elastic
}
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Custom {

    export function _getEasingId(id: Easing) {
        switch (id) {
            case Easing.linear: return "linear";
            case Easing.spring: return "spring";
            case Easing.in_quad: return "in_quad";
            case Easing.out_quad: return "out_quad";
            case Easing.in_out_quad: return "in_out_quad";
            case Easing.in_cubic: return "in_cubic";
            case Easing.out_cubic: return "out_cubic";
            case Easing.in_out_cubic: return "in_out_cubic";
            case Easing.in_quart: return "in_quart";
            case Easing.out_quart: return "out_quart";
            case Easing.in_out_quart: return "in_out_quart";
            case Easing.in_quint: return "in_quint";
            case Easing.out_quint: return "out_quint";
            case Easing.in_out_quint: return "in_out_quint";
            case Easing.in_sine: return "in_sine";
            case Easing.out_sine: return "out_sine";
            case Easing.in_out_sine: return "in_out_sine";
            case Easing.in_expo: return "in_expo";
            case Easing.out_expo: return "out_expo";
            case Easing.in_out_expo: return "in_out_expo";
            case Easing.in_circ: return "in_circ";
            case Easing.out_circ: return "out_circ";
            case Easing.in_out_circ: return "in_out_circ";
            case Easing.in_bounce: return "in_bounce";
            case Easing.out_bounce: return "out_bounce";
            case Easing.in_out_bounce: return "in_out_bounce";
            case Easing.in_back: return "in_back";
            case Easing.out_back: return "out_back";
            case Easing.in_out_back: return "in_out_back";
            case Easing.in_elastic: return "in_elastic";
            case Easing.out_elastic: return "out_elastic";
            case Easing.in_out_elastic: return "in_out_elastic";
            default:
                player.errorMessage("Unknown Easing enum value");
                return undefined;
        }
    }

    const COMMND_BASE: string ="camera @s ";
    const CLEAR: string = "${COMMND_BASE} clear";
    const FREE: string = "${COMMND_BASE} set minecraft: free";
    //% block="カメラワーク| 移動先:%pos=minecraftCreatePosition| 被写体:%facing| イージング種類:%easeType| イージング秒:%easeTime| ワーク取消:%clear"
    //% easeTime.defl=10
    //% easeType.fieldEditor="gridpicker"
    //% easeType.fieldOptions.width=120
    //% clear.defl=true
    //% clear.shadow=toggleOnOff
    export function freeCamera(pos: Position, facing: TargetSelectorKind, easeType: Easing, easeTime: number, clear: boolean): void {
        const facingCmd: string = `facing ${mobs.target(facing)}`;//被写体:
        const posCmd: string = `pos ${pos} `;//移動先座標
        const easeCmd: string = `ease ${easeTime} ${_getEasingId(easeType)} `;//イージング
        const cmd: string = `${FREE} ${easeCmd} ${posCmd} ${facingCmd}`;//コマンド
        player.execute(cmd);//実行
        loops.pause(easeTime * 1000)//待機
    }

    //% block="%time秒後にカメラワーク取消"
    //% time.defl=0
    export function CameraClear(time: number): void {
        loops.pause(time * 1000)//待機
        player.execute(`${COMMND_BASE} clear`);
    }


    
}