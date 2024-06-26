
/**
 * Custom blocks
 */
//% weight=100 color=#54bfff icon="\uf03d" block="カメラ"
namespace Camera2 {

    const COMMND_BASE: string = `camera @s `;
    const FREE: string = `${COMMND_BASE} set minecraft:free`;

    //% block="被写体ワーク| 被写体:%facing| 移動先:%pos=minecraftCreatePosition| イージング種類:%easeType| イージング秒:%easeTime| ワーク取消:%clear"
    //% easeTime.defl=3
    //% easeType.fieldEditor="gridpicker"
    //% easeType.fieldOptions.width=120
    //% clear.defl=true
    //% clear.shadow=toggleOnOff
    export function EaseEntity(facing: TargetSelectorKind, pos: Position, easeType: Easing, easeTime: number, clear: boolean): void {
        const easeCmd: string = `ease ${easeTime} ${_getEasingId(easeType)} `;//イージング
        const posCmd: string = `pos ${pos} `;//移動先座標
        const facingCmd: string = `facing ${mobs.target(facing)}`;//被写体:
        //camera <players: target> set <preset: string> ease <easeTime: float> <easeType: Easing> pos <position: x y z> facing <lookAtEntity: target>
        const cmd: string = `${FREE} ${easeCmd} ${posCmd} ${facingCmd}`;//コマンド
        player.say(cmd);
        player.execute(cmd);//実行
        loops.pause(easeTime * 1000)//待機
        if (clear) {
            CameraClear(0); //カメラワーク取消
        }
    }

    //% block="%time秒後にカメラワーク取消"
    //% time.defl=0
    export function CameraClear(time: number): void {
        loops.pause(time * 1000)//待機
        player.execute(`${COMMND_BASE} clear`);
    }


    //% group="フェード"
    //% block="フェード| イン秒:%fadeInSeconds| 停止秒:%holdSeconds| アウト秒:%fadeOutSeconds| 色:%colorCode=colorNumberPicker| ワーク取消:%clear"
    //% fadeInSeconds.defl=1
    //% holdSeconds.defl=1
    //% fadeOutSeconds.defl=0
    //% colorCode.defl=0x000000
    //% clear.defl=false
    //% clear.shadow=toggleOnOff
    export function fadeTime(fadeInSeconds: number, holdSeconds: number, fadeOutSeconds: number, colorCode: number, clear: boolean): void {
        const fadeTimeCmd: string = `fade time ${fadeInSeconds} ${holdSeconds} ${fadeOutSeconds} `
        const red = (colorCode >> 16) & 0xFF;
        const green = (colorCode >> 8) & 0xFF;
        const blue = colorCode & 0xFF;
        const colorCmd: string = `color ${red} ${green} ${blue} `
        //camera <players: target> fade time <fadeInSeconds: float> <holdSeconds: float> <fadeOutSeconds: float> color <red: int> <green: int> <blue: int>
        const cmd: string = `${COMMND_BASE} ${fadeTimeCmd} ${colorCmd}`;
        player.say(cmd);
        player.execute(cmd);//実行
        loops.pause((fadeInSeconds + holdSeconds + fadeOutSeconds) * 1000)//待機
        if (clear) {
            CameraClear(0); //カメラワーク取消
        }
    }


    //% group="フェード"
    //% block="%color=colorNumberPicker"
    //% color.defl=0xff0000
    export function setcolors(color: number): number {
        return color;
    }

    //% group="フェード"
    //% block="赤%red| 緑%green|青%blue"
    //% red.min=0 red.max=255 green.min=0 green.max=255 blue.min=0 blue.max=255
    export function rgb(red: number, green: number, blue: number): number {
        return ((red & 0xFF) << 16) | ((green & 0xFF) << 8) | (blue & 0xFF);
    }


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

}

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
