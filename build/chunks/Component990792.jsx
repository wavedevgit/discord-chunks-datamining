/** Chunk was on 56035 **/
/** chunk id: 990792, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk44315 = require("./44315.js"),
  Chunk293501 = require("./293501.js"),
  Chunk943351 = require("./943351.js"),
  Chunk231338 = require("./231338.js"),
  Chunk782445 = require("./782445.js");
let p = Chunk647438.memo(function(e) {
  let {
    file: n,
    audio: t,
    className: i,
    waveformSettings: p
  } = e, [y, b] = l.useState({
    width: 0,
    height: 0
  }), v = l.useRef(null), x = l.useMemo(() => {
    var e;
    let n = null != (e = null == t ? true : t.duration) ? e : 1;
    return function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), a.forEach(function(n) {
          var a;
          a = t[n], n in e ? Object.defineProperty(e, n, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = a
        })
      }
      return e
    }({
      fineTuning: false,
      fineTuningResolution: n / m.nl.fineTuningScale,
      duration: n
    }, null != p ? p : {})
  }, [t, p]), j = (0, f.b1)(n), w = (0, f.NN)(j, v.current, x), _ = (0, c.ZP)(), N = (0, d.Sl)((0, s.wj)(_) ? g.Il.PRIMARY_300 : g.Il.PRIMARY_700), C = null == j || null == w, S = (0 === y.width || 0 === y.height || C) && null != n, O = l.useCallback(() => {
    null != v.current && b({
      width: v.current.offsetWidth,
      height: v.current.offsetHeight
    })
  }, []);
  return l.useEffect(() => {
    if (null != v.current) {
      let e = new ResizeObserver((0, o.debounce)(O, 50));
      return e.observe(v.current), () => {
        e.disconnect()
      }
    }
  }, [O]), l.useEffect(() => {
    if (null == v.current) return;
    let e = v.current,
      n = e.getContext("2d");
    if (null == n) return;
    let {
      width: t,
      height: a
    } = e;
    if (0 !== y.width && 0 !== y.height && null != w && w.length > 0) {
      let e = t / w.length,
        l = -(e * (m.nl.waveformBarWidth - 1));
      n.clearRect(0, 0, t, a), n.fillStyle = N.hex;
      for (let t = 0; t < w.length; t++) {
        let i = w[t] * a,
          r = t * e + l,
          o = a / 2 - i / 2;
        n.fillRect(r, o, e - l, i)
      }
    }
  }, [N, y, _, w]), (0, a.jsxs)("div", {
    className: r()(h.container, i),
    children: [(0, a.jsx)("canvas", {
      className: h.waveformCanvas,
      ref: v,
      width: 4 * y.width,
      height: 4 * y.height
    }), S && (0, a.jsx)("div", {
      className: h.loading,
      children: (0, a.jsx)(u.$jN, {
        type: u.RAz.SPINNING_CIRCLE
      })
    })]
  })
})