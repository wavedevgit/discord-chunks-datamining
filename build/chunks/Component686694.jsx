/** Chunk was on 12581 **/
/** chunk id: 686694, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var s, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  h = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk585483 = require("./585483.js"),
  Chunk624138 = require("./624138.js"),
  Chunk890056 = require("./890056.js"),
  Chunk636879 = require("./636879.js"),
  Chunk810847 = require("./810847.js"),
  Chunk898625 = require("./898625.js"),
  Chunk981631 = require("./981631.js"),
  Chunk644155 = require("./644155.js");

function b(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
let y = (0, Chunk624138.Mg)(Chunk477690.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
  x = 1 / 120;
class E extends(s = Chunk473749.Component) {
  componentDidMount() {
    this.initialize()
  }
  componentDidUpdate(t) {
    let {
      waveState: e
    } = this.props;
    e === g.hO.FILLING && e !== t.waveState && this.waveFill()
  }
  componentWillUnmount() {
    this.terminate()
  }
  initialize() {
    this.children.forEach(t => t.initialize()), this.bindEvents(), this.resizeCanvas(), document.hidden && this.delayedPause()
  }
  terminate() {
    this.pause(), this.unbindEvents(), this.children.forEach(t => t.terminate())
  }
  bindEvents() {
    window.addEventListener("resize", this.resizeCanvas, false), window.addEventListener("blur", this.delayedPause, false), window.addEventListener("focus", this.play, false), document.addEventListener("visibilitychange", this.handleVisibilityChange, false), Chunk585483.S.subscribe(Chunk981631.CkL.WAVE_EMPHASIZE, this.handleWaveEmphasize)
  }
  unbindEvents() {
    window.removeEventListener("resize", this.resizeCanvas, false), window.removeEventListener("blur", this.delayedPause, false), window.removeEventListener("focus", this.play, false), document.removeEventListener("visibilitychange", this.handleVisibilityChange, false), Chunk585483.S.unsubscribe(Chunk981631.CkL.WAVE_EMPHASIZE, this.handleWaveEmphasize)
  }
  advanceTransitionalState() {
    let {
      waveState: t
    } = this.props;
    (module === Chunk898625.hO.INITIAL || module === Chunk898625.hO.FILLING) && this.updateWaveState(module + 1)
  }
  waveFill() {
    this._isPlaying ? this.children.forEach(t => t.fill()) : this.updateWaveState(Chunk898625.hO.FILLED)
  }
  updateAnimation(t) {
    this.children.forEach(e => e.update(t))
  }
  renderAnimation() {
    let {
      canvasFillStyle: t
    } = this.props, {
      canvasContext: e
    } = this;
    null != exports && (exports.fillStyle = module, exports.fillRect(0, 0, this.width, this.height), this.children.forEach(t => t.render(e)))
  }
  render() {
    let {
      waveState: t,
      hideFallback: e,
      embedded: i
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.Sfi.Consumer, {
      children: s => {
        let {
          reducedMotion: r
        } = s;
        return r.enabled ? (0, n.jsx)("div", {
          className: h()(w.fallbackImage, {
            [w.embedded]: i,
            [w.visible]: !e && t >= g.hO.ENTERED
          })
        }) : (0, n.jsx)("canvas", {
          className: h()(w.canvas, {
            [w.embedded]: i
          }),
          ref: this.setCanvas
        })
      }
    })
  }
  constructor(t) {
    super(t), b(this, "width", 0), b(this, "height", 0), b(this, "canvas", true), b(this, "canvasContext", true), b(this, "children", []), b(this, "wave", true), b(this, "ratio", 0), b(this, "_lastTick", 0), b(this, "_isPlaying", false), b(this, "_reqAnimId", null), b(this, "_pauseTimeout", true), b(this, "setCanvas", t => {
      var e;
      if (null == t) return;
      this.canvas = t, this.canvasContext = this.canvas.getContext("2d");
      let i = null != (e = window.devicePixelRatio) ? e : 1,
        s = this.canvasContext.webkitBackingStorePixelRatio || this.canvasContext.mozBackingStorePixelRatio || this.canvasContext.msBackingStorePixelRatio || this.canvasContext.oBackingStorePixelRatio || this.canvasContext.backingStorePixelRatio || 1;
      this.ratio = i / s, this.resizeCanvas()
    }), b(this, "resizeCanvas", () => {
      this.width = window.innerWidth, this.height = window.innerHeight;
      let {
        canvas: t,
        canvasContext: e,
        width: i,
        height: s,
        ratio: n
      } = this;
      null != t && null != e && (t.width = i * n, t.height = s * n, t.style.width = i + "px", t.style.height = s + "px", e.scale(n, n)), i <= y ? this.pause() : this.play(), this.wave.resizeWave(), this.renderAnimation()
    }), b(this, "handleVisibilityChange", () => {
      document.hidden ? this.delayedPause() : this.play()
    }), b(this, "play", () => {
      clearTimeout(this._pauseTimeout), this._isPlaying || (this._isPlaying = true, this.run())
    }), b(this, "pause", () => {
      clearTimeout(this._pauseTimeout), this._isPlaying = false, null != this._reqAnimId && window.cancelAnimationFrame(this._reqAnimId), this._reqAnimId = null, this.advanceTransitionalState()
    }), b(this, "delayedPause", () => {
      clearTimeout(this._pauseTimeout), this._pauseTimeout = setTimeout(this.pause, 4e3)
    }), b(this, "updateWaveState", t => {
      let {
        updateWaveState: e
      } = this.props;
      e(t)
    }), b(this, "handleWaveEmphasize", () => {
      this.wave.emphasize()
    }), b(this, "run", () => {
      if (!this._isPlaying) return;
      if (0 === this._lastTick) {
        this._lastTick = Date.now(), this._reqAnimId = requestAnimationFrame(this.run);
        return
      }
      let t = Date.now(),
        e = Math.min((t - this._lastTick) / 1e3, 8 * x);
      for (; e > 0;) {
        let t = e < x ? e : x;
        this.updateAnimation(t), e -= t
      }
      this.renderAnimation(), this._lastTick = t, this._reqAnimId = requestAnimationFrame(this.run)
    }), this.wave = new m.Z(this.updateWaveState), this.children = [new p.Z, new f.Z, this.wave]
  }
}
b(E, "defaultProps", {
  embedded: false
});
let O = t => {
  let e = (0, c.dQu)(l.Z.unsafe_rawColors.PRIMARY_630).hex();
  return (0, n.jsx)(E, function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {},
        s = Object.keys(i);
      "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
        return Object.getOwnPropertyDescriptor(i, t).enumerable
      }))), s.forEach(function(e) {
        b(t, e, i[e])
      })
    }
    return t
  }({
    canvasFillStyle: e
  }, t))
}