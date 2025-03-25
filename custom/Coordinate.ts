//% weight=99 color=#54bfff icon="\uf03d" block="座標"
namespace Coordinate {
    //% block="円| 半径:%radius"
    export function Circl(radius: number) {
        let 座標: number[][] = []
        let err = 0
        let y = 0
        let x = 0
        x = radius
        while (x >= y) {
            座標.push([x, y])
            座標.push([x, 0 - y])
            座標.push([y, x])
            座標.push([y, 0 - x])
            座標.push([0 - y, x])
            座標.push([0 - y, 0 - x])
            座標.push([0 - x, y])
            座標.push([0 - x, 0 - y])
            if (err <= 0) {
                y += 1
                err += 2 * y + 1
            }
            if (err > 0) {
                x += 0 - 1
                err += 0 - (2 * x + 1)
            }
        }
        return 座標
    }


    //% block="ロジスティック曲線| x座標:%x| 環境収容力:%K"
    export function logistic(x: number, K: number) {
        const b = 0.5
        const c = 0.5
        const e = 2.718281828459045
        return K / (1 + b ** ((0 - c) * x))
    }

    //% block="線| 始点:%p0=minecraftCreatePosition| 終点:%p1=minecraftCreatePosition"
    export function 線(p0: Position, p1: Position) {
        let 座標: Position[] = []
        p0 = p0.toWorld()
        p1 = p1.toWorld()
        let x0 = Math.round(p0.getValue(Axis.X))
        let x1 = Math.round(p1.getValue(Axis.X))
        let y0 = Math.round(p0.getValue(Axis.Y))
        let y1 = Math.round(p1.getValue(Axis.Y))
        let z0 = Math.round(p0.getValue(Axis.Z))
        let z1 = Math.round(p1.getValue(Axis.Z))
        let dx = Math.abs(x1 - x0)
        const sx = x0 < x1 ? 1 : -1;
        let dy = Math.abs(y1 - y0)
        const sy = y0 < y1 ? 1 : -1;
        let dz = Math.abs(z1 - z0)
        const sz = z0 < z1 ? 1 : -1;
        let dm = dx > dy ? dx : dy;
        dm = dm > dz ? dm : dz;
        let i = dm
        x1 = dm / 2
        y1 = dm / 2
        z1 = dm / 2
        for (let j = 0; j <= dm; j++) {
            const p = positions.createWorld(x0, y0, z0)
            座標.push(p)
            x1 += 0 - dx
            if (x1 < 0) {
                x1 += dm
                x0 += sx
            }
            y1 += 0 - dy
            if (y1 < 0) {
                y1 += dm
                y0 += sy
            }
            z1 += 0 - dz
            if (z1 < 0) {
                z1 += dm
                z0 += sz
            }
        }
        return 座標
    }

    //% block="球 半径:%radius"
    export function sphere(radius: number) {
        let 座標: Position[] = []
        if (radius <= 0) return 座標;

        radius = Math.round(radius);
        const radius2 = radius * radius;
        const radiuso = (radius - 1) * (radius - 1)
        for (let x = -radius; x <= radius; ++x) {
            const x2 = x * x;
            for (let y = -radius; y <= radius; ++y) {
                const y2 = y * y;
                if (x2 + y2 > radius2) continue;

                for (let z = -radius; z <= radius; ++z) {
                    const z2 = z * z;
                    if (x2 + y2 + z2 > radius2) continue;
                    const p = positions.createWorld(x, y, z);
                    座標.push(p)
                }
            }
        }
        return 座標
    }
}