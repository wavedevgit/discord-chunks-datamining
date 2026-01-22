/** Chunk was on 70959 **/
/** chunk id: 243456, original params: t,e,i (module,exports,require) **/
function n(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
require.d(exports, {
  A: () => r
}), require("./896048.js"), require("./65821.js");
class r {
  drawInto(t, e, i, n) {
    e %= this.frameCount, this.requireFrame(e);
    let [r, s, h, o] = a(e, this.frameWidth, this.frameHeight, this.cells);
    t.drawImage(this.canvas, r, s, h, o, 0, 0, i, n)
  }
  drop() {
    var t;
    null == (t = this.native) || t.drop(), this.native = null
  }
  requireFrame(t) {
    null != this.native && (this.renderedFrames.has(t) || (this.paint(t), this.renderedFrames.add(t)), this.renderedFrames.size === this.frameCount && this.drop())
  }
  paint(t) {
    if (null != this.native) {
      var e;
      let i = new ImageData(this.native.get_bgra(t, this.frameWidth, this.frameHeight), this.frameWidth, this.frameHeight),
        [n, r, s, h] = a(t, this.frameWidth, this.frameHeight, this.cells);
      null == (e = this.context) || e.putImageData(i, n, r, 0, 0, s, h)
    }
  }
  constructor(t, e, i, r) {
    n(this, "key", true), n(this, "canvas", true), n(this, "context", true), n(this, "cells", true), n(this, "native", true), n(this, "renderedFrames", true), n(this, "frameWidth", true), n(this, "frameHeight", true), n(this, "frameRate", true), n(this, "frameCount", true);
    const [a, s, h] = function(t, e, i) {
      let n = Math.ceil(Math.sqrt(i));
      return [n, n * t, n * e]
    }(i, r, t.frames);
    if (this.key = e, this.canvas = function(t, e) {
        if ("function" == typeof OffscreenCanvas) return new OffscreenCanvas(t, e);
        let i = document.createElement("canvas");
        return i.width = t, i.height = e, i
      }(s, h), this.context = this.canvas.getContext("2d"), this.cells = a, this.native = t, this.renderedFrames = new Set, this.frameWidth = i, this.frameHeight = r, this.frameRate = t.fps, this.frameCount = t.frames, null == this.context) throw Error("couldn't create 2d canvas context.")
  }
}

function a(t, e, i, n) {
  return [Math.floor(t / n) * e, t % n * i, e, i]
}