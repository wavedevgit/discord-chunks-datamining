/** Chunk was on 99673 **/
/** chunk id: 338764, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var s, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  h = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk203982 = require("./203982.js"),
  Chunk240248 = require("./240248.js"),
  Chunk397197 = require("./397197.js"),
  Chunk109764 = require("./109764.js"),
  Chunk574902 = require("./574902.js"),
  Chunk852431 = require("./852431.js"),
  Chunk652215 = require("./652215.js"),
  Chunk917686 = require("./917686.js");

function b(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
let y = (0, Chunk240248.xI)(Chunk319060.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
  x = 1 / 120;
class E extends(s = Chunk64700.Component) {
  componentDidMount() {
    this.initialize()
  }
  componentDidUpdate(t) {
    let {
      waveState: e
    } = this.props;
    e === g.go.FILLING && e !== t.waveState && this.waveFill()
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
    window.addEventListener("resize", this.resizeCanvas, false), window.addEventListener("blur", this.delayedPause, false), window.addEventListener("focus", this.play, false), document.addEventListener("visibilitychange", this.handleVisibilityChange, false), d._.subscribe(v.jej.WAVE_EMPHASIZE, this.handleWaveEmphasize)
  }
  unbindEvents() {
    window.removeEventListener("resize", this.resizeCanvas, false), window.removeEventListener("blur", this.delayedPause, false), window.removeEventListener("focus", this.play, false), document.removeEventListener("visibilitychange", this.handleVisibilityChange, false), d._.unsubscribe(v.jej.WAVE_EMPHASIZE, this.handleWaveEmphasize)
  }
  advanceTransitionalState() {
    let {
      waveState: t
    } = this.props;
    (t === g.go.INITIAL || t === g.go.FILLING) && this.updateWaveState(t + 1)
  }
  waveFill() {
    this._isPlaying ? this.children.forEach(t => t.fill()) : this.updateWaveState(g.go.FILLED)
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
    null != e && (e.fillStyle = t, e.fillRect(0, 0, this.width, this.height), this.children.forEach(t => t.render(e)))
  }
  render() {
    let {
      waveState: t,
      hideFallback: e,
      embedded: i
    } = this.props;
    return (0, n.jsx)(c.CZY.Consumer, {
      children: s => {
        let {
          reducedMotion: r
        } = s;
        return r.enabled ? (0, n.jsx)("div", {
          className: h()(w.s9, {
            [w.F9]: i,
            [w.RK]: !e && t >= g.go.ENTERED
          })
        }) : (0, n.jsx)("canvas", {
          className: h()(w.Ji, {
            [w.F9]: i
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
    }), this.wave = new m.A(this.updateWaveState), this.children = [new p.A, new f.A, this.wave]
  }
}
b(E, "defaultProps", {
  embedded: false
});
let O = t => {
  let e = (0, c.rdh)(l.A.unsafe_rawColors.PRIMARY_630).hex();
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