/** Chunk was on 40556 **/
/** chunk id: 997098, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk30875 = require("./30875.js"),
  Chunk335416 = require("./335416.js"),
  Chunk62108 = require("./62108.js");
let g = Chunk64700.memo(function(e) {
  let {
    file: t,
    audio: n,
    className: a,
    waveformSettings: g
  } = e, [h, v] = i.useState({
    width: 0,
    height: 0
  }), b = i.useRef(null), x = i.useMemo(() => {
    var e;
    let t = null != (e = null == n ? true : n.duration) ? e : 1;
    return function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({
      fineTuning: false,
      fineTuningResolution: t / f.Jh.fineTuningScale,
      duration: t
    }, null != g ? g : {})
  }, [n, g]), p = (0, d.AX)(t), j = (0, d.$t)(p, b.current, x), y = (0, c.Ay)(), w = (0, o.rdh)(u.A.colors.ICON_STRONG).hex(), N = null == p || null == j, O = (0 === h.width || 0 === h.height || N) && null != t, A = i.useCallback(() => {
    null != b.current && v({
      width: b.current.offsetWidth,
      height: b.current.offsetHeight
    })
  }, []);
  return i.useEffect(() => {
    if (null != b.current) {
      let e = new ResizeObserver((0, s.debounce)(A, 50));
      return e.observe(b.current), () => {
        e.disconnect()
      }
    }
  }, [A]), i.useEffect(() => {
    if (null == b.current) return;
    let e = b.current,
      t = e.getContext("2d");
    if (null == t) return;
    let {
      width: n,
      height: l
    } = e;
    if (0 !== h.width && 0 !== h.height && null != j && j.length > 0) {
      let e = n / j.length,
        i = -(e * (f.Jh.waveformBarWidth - 1));
      t.clearRect(0, 0, n, l), t.fillStyle = w;
      for (let n = 0; n < j.length; n++) {
        let a = j[n] * l,
          r = n * e + i,
          s = l / 2 - a / 2;
        t.fillRect(r, s, e - i, a)
      }
    }
  }, [w, h, y, j]), (0, l.jsxs)("div", {
    className: r()(m.kL, a),
    children: [(0, l.jsx)("canvas", {
      className: m.s4,
      ref: b,
      width: 4 * h.width,
      height: 4 * h.height
    }), O && (0, l.jsx)("div", {
      className: m.Lq,
      children: (0, l.jsx)(o.y$y, {
        type: o.tVU.SPINNING_CIRCLE
      })
    })]
  })
})