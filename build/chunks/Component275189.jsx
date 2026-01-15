/** Chunk was on web.js **/
/** chunk id: 275189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk92951 = require("./92951.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk193869 = require("./193869.jsx"),
  Chunk225055 = require("./225055.jsx"),
  Chunk609150 = require("./609150.js");

function p(e) {
  let {
    className: t,
    slide: n,
    videoEntrySrc: a,
    videoLoopSrc: p
  } = e, _ = i.useRef(null), h = i.useRef(null), m = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), [g, E] = i.useState(m), b = i.useContext(u.$r), y = i.useContext(d.xS), O = i.useCallback(() => {
    var e, t;
    E(true), m || null == (t = h.current) || t.play(), null == (e = _.current) || e.pause()
  }, [m]), v = i.useCallback(e => {
    let t = (g ? h : _).current,
      r = e.detail.canvas,
      i = e.detail.context;
    if (null == t || t.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
    let a = t.getBoundingClientRect(),
      o = r.getBoundingClientRect(),
      s = r.width / o.width,
      l = r.height / o.height,
      c = (a.left - o.left) * s,
      u = (a.top - o.top) * l,
      d = a.width,
      f = a.height,
      p = 0;
    null == y || y((e, t) => (t === n && (p = Math.max(e.opacity.get(), 0)), null)), i.save(), i.globalCompositeOperation = "screen", i.globalAlpha = p, i.drawImage(t, c, u, d, f), i.restore()
  }, [g, n, y]);
  return i.useEffect(() => (b.addEventListener("frameEnd", v), () => b.removeEventListener("frameEnd", v)), [b, v]), (0, r.jsxs)("div", {
    className: o()(f.wrapper, t),
    children: [(0, r.jsx)(s.Z, {
      ref: _,
      className: f.entryVideo,
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
    }), (0, r.jsx)(s.Z, {
      ref: h,
      className: f.loopingVideo,
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