/** Chunk was on web.js **/
/** chunk id: 368327, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk299619 = require("./299619.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk771273 = require("./771273.jsx"),
  Chunk182417 = require("./182417.jsx"),
  Chunk958315 = require("./958315.js");

function p(e) {
  let {
    className: t,
    slide: n,
    videoEntrySrc: a,
    videoLoopSrc: p
  } = e, _ = i.useRef(null), h = i.useRef(null), m = (0, l.bG)([c.A], () => c.A.useReducedMotion), [g, E] = i.useState(m), y = i.useContext(u.GD), b = i.useContext(d.Aq), O = i.useCallback(() => {
    var e, t;
    E(true), m || null == (t = h.current) || t.play(), null == (e = _.current) || e.pause()
  }, [m]), v = i.useCallback(e => {
    let t = (g ? h : _).current,
      r = e.detail.canvas,
      i = e.detail.context;
    if (null == t || t.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
    let a = t.getBoundingClientRect(),
      s = r.getBoundingClientRect(),
      o = r.width / s.width,
      l = r.height / s.height,
      c = (a.left - s.left) * o,
      u = (a.top - s.top) * l,
      d = a.width,
      f = a.height,
      p = 0;
    null == b || b((e, t) => (t === n && (p = Math.max(e.opacity.get(), 0)), null)), i.save(), i.globalCompositeOperation = "screen", i.globalAlpha = p, i.drawImage(t, c, u, d, f), i.restore()
  }, [g, n, b]);
  return i.useEffect(() => (y.addEventListener("frameEnd", v), () => y.removeEventListener("frameEnd", v)), [y, v]), (0, r.jsxs)("div", {
    className: s()(f.iE, t),
    children: [(0, r.jsx)(o.A, {
      ref: _,
      className: f.yt,
      style: {
        opacity: 0
      },
      autoPlay: !m,
      muted: true,
      playsInline: true,
      onEnded: O,
      children: (0, r.jsx)("source", {
        src: a,
        type: "video/webm"
      })
    }), (0, r.jsx)(o.A, {
      ref: h,
      className: f.YV,
      style: {
        opacity: 0
      },
      muted: true,
      playsInline: true,
      loop: true,
      children: (0, r.jsx)("source", {
        src: p,
        type: "video/webm"
      })
    })]
  })
}