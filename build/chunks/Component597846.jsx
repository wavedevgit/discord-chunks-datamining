/** Chunk was on 13474 **/
/** chunk id: 597846, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658312 = require("./658312.js"),
  Chunk503082 = require("./503082.js");
let u = {
    minInterval: 1e3 / 60
  },
  c = e => {
    let {
      drawCallback: t,
      size: r,
      fps: c = 60,
      useOffscreen: s = true,
      playing: o = true,
      useClockOptions: d = {}
    } = e, f = a.useMemo(() => Object.assign({
      minInterval: 1e3 / c
    }, u, d), [c, d]), m = a.useRef(null), h = a.useRef(null);
    a.useEffect(() => {
      null != h.current && r.w > 0 && r.h > 0 && h.current.setSize(r)
    }, [r]), a.useEffect(() => {
      if (null != m.current) {
        let e = new l.Z(m.current);
        h.current = e, s && e.setupOffscreenCanvas()
      }
    }, [m, s, r]);
    let {
      ticking: p,
      stop: y,
      reset: w
    } = (0, i.Z)(e => {
      if (null != h.current) {
        let {
          width: r,
          height: n
        } = h.current.canvas;
        h.current.clearRect({
          x: 0,
          y: 0,
          w: r,
          h: n
        }), t(h.current, e / 1e3)
      }
    }, f);
    return a.useEffect(() => {
      o && !p.current && w(), o || y()
    }, [o, w, y, p]), (0, n.jsx)("div", {
      children: (0, n.jsx)("canvas", {
        ref: m
      })
    })
  }