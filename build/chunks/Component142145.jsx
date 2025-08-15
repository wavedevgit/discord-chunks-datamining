/** Chunk was on web.js **/
/** chunk id: 142145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk119837 = require("./119837.js"),
  Chunk802433 = require("./802433.js"),
  Chunk107225 = require("./107225.js");
let s = e => {
  var t, n, s, l;
  let {
    layerConfig: c,
    animationType: u,
    ticking: d,
    time: f,
    hasPlayedThrough: _,
    setHasPlayedThrough: p,
    urlQueryString: h,
    maxLoops: m,
    loopEnd: g,
    bannerAdjustment: E
  } = e, b = true;
  if (d || (b = false), f < c.start && (b = false), !c.loop && f > c.duration + c.start && (b = false), u === a.Q.PERSISTENT && !_ && null != m && f >= g && p(true), c.loop && true !== c.loopDelay && c.loopDelay > 0) {
    let e = c.duration + c.loopDelay,
      t = Math.floor((f - c.start) / e);
    f - c.start - t * e > c.duration && (u === a.Q.INTERMITTENT && !_ && null != m && t >= m && p(true), b = false)
  }
  return b ? (0, r.jsx)("img", {
    src: null != h ? "".concat(c.src, "?query=").concat(h) : c.src,
    className: o.effect,
    style: {
      top: (null != (s = null == (t = c.position) ? true : t.y) ? s : 0) - E,
      left: null != (l = null == (n = c.position) ? true : n.x) ? l : 0
    },
    alt: "",
    "aria-hidden": true
  }) : (0, r.jsx)("img", {
    src: i.td,
    alt: "",
    "aria-hidden": true
  })
}