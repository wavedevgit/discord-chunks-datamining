/** Chunk was on 56035 **/
/** chunk id: 990792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk183519 = require("./183519.js");
let p = Chunk73800.memo(function(e) {
  let {
    file: t,
    audio: n,
    className: i,
    waveformSettings: p
  } = e, [y, b] = a.useState({
    width: 0,
    height: 0
  }), v = a.useRef(null), x = a.useMemo(() => {
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
      fineTuningResolution: t / m.nl.fineTuningScale,
      duration: t
    }, null != p ? p : {})
  }, [n, p]), j = (0, f.b1)(t), w = (0, f.NN)(j, v.current, x), N = (0, c.ZP)(), C = (0, d.Sl)((0, o.wj)(N) ? h.Il.PRIMARY_300 : h.Il.PRIMARY_700), S = null == j || null == w, O = (0 === y.width || 0 === y.height || S) && null != t, E = a.useCallback(() => {
    null != v.current && b({
      width: v.current.offsetWidth,
      height: v.current.offsetHeight
    })
  }, []);
  return a.useEffect(() => {
    if (null != v.current) {
      let e = new ResizeObserver((0, s.debounce)(E, 50));
      return e.observe(v.current), () => {
        e.disconnect()
      }
    }
  }, [E]), a.useEffect(() => {
    if (null == v.current) return;
    let e = v.current,
      t = e.getContext("2d");
    if (null == t) return;
    let {
      width: n,
      height: l
    } = e;
    if (0 !== y.width && 0 !== y.height && null != w && w.length > 0) {
      let e = n / w.length,
        a = -(e * (m.nl.waveformBarWidth - 1));
      t.clearRect(0, 0, n, l), t.fillStyle = C.hex;
      for (let n = 0; n < w.length; n++) {
        let i = w[n] * l,
          r = n * e + a,
          s = l / 2 - i / 2;
        t.fillRect(r, s, e - a, i)
      }
    }
  }, [C, y, N, w]), <div className={r()(g.container, i)}>{<canvas className={g.waveformCanvas} ref={v} width={4 * y.width} height={4 * y.height} />}{O && <div className={g.loading}><u.$jN type={u.RAz.SPINNING_CIRCLE} /></div>}</div>
})