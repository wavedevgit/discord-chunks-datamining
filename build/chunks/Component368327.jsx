/** Chunk was on 20941 **/
/** chunk id: 368327, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk299619 = require("./299619.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk771273 = require("./771273.jsx"),
  Chunk182417 = require("./182417.jsx"),
  Chunk958315 = require("./958315.js");

function f(e) {
  let {
    className: t,
    slide: n,
    videoEntrySrc: a,
    videoLoopSrc: f
  } = e, p = l.useRef(null), h = l.useRef(null), b = (0, o.bG)([c.A], () => c.A.useReducedMotion), [g, x] = l.useState(b), y = l.useContext(u.GD), v = l.useContext(d.Aq), j = l.useCallback(() => {
    var e, t;
    x(true), b || null == (t = h.current) || t.play(), null == (e = p.current) || e.pause()
  }, [b]), C = l.useCallback(e => {
    let t = (g ? h : p).current,
      r = e.detail.canvas,
      l = e.detail.context;
    if (null == t || t.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
    let a = t.getBoundingClientRect(),
      i = r.getBoundingClientRect(),
      s = r.width / i.width,
      o = r.height / i.height,
      c = (a.left - i.left) * s,
      u = (a.top - i.top) * o,
      d = a.width,
      m = a.height,
      f = 0;
    null == v || v((e, t) => (t === n && (f = Math.max(e.opacity.get(), 0)), null)), l.save(), l.globalCompositeOperation = "screen", l.globalAlpha = f, l.drawImage(t, c, u, d, m), l.restore()
  }, [g, n, v]);
  return l.useEffect(() => (y.addEventListener("frameEnd", C), () => y.removeEventListener("frameEnd", C)), [y, C]), (0, r.jsxs)("div", {
    className: i()(m.iE, t),
    children: [(0, r.jsx)(s.A, {
      ref: p,
      className: m.yt,
      style: {
        opacity: 0
      },
      autoPlay: !b,
      muted: true,
      playsInline: true,
      onEnded: j,
      children: (0, r.jsx)("source", {
        src: a,
        type: "video/webm"
      })
    }), (0, r.jsx)(s.A, {
      ref: h,
      className: m.YV,
      style: {
        opacity: 0
      },
      muted: true,
      playsInline: true,
      loop: true,
      children: (0, r.jsx)("source", {
        src: f,
        type: "video/webm"
      })
    })]
  })
}