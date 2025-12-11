/** Chunk was on web.js **/
/** chunk id: 142145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk480210 = require("./480210.js"),
  Chunk119837 = require("./119837.js"),
  Chunk664545 = require("./664545.js");
let s = e => {
  var t, n, s, l, c;
  let {
    layerConfig: u,
    animationType: d,
    ticking: f,
    time: p,
    hasPlayedThrough: _,
    setHasPlayedThrough: m,
    maxLoops: h,
    loopEnd: g,
    bannerAdjustment: E,
    imageData: b
  } = e, y = true;
  if (f || (y = false), p < u.start && (y = false), !u.loop && p > u.duration + u.start && (y = false), d === i.y.ANIMATION_TYPE_PERSISTENT && !_ && null != h && p >= g && m(true), u.loop && true !== u.loopDelay && u.loopDelay > 0) {
    let e = u.duration + u.loopDelay,
      t = Math.floor((p - u.start) / e);
    p - u.start - t * e > u.duration && (d === i.y.ANIMATION_TYPE_INTERMITTENT && !_ && null != h && t >= h && m(true), y = false)
  }
  return y ? (0, r.jsx)("img", {
    src: null != (s = null == b ? true : b.src) ? s : u.src,
    className: o.effect,
    style: {
      top: (null != (l = null == (t = u.position) ? true : t.y) ? l : 0) - E,
      left: null != (c = null == (n = u.position) ? true : n.x) ? c : 0
    },
    alt: "",
    "aria-hidden": true
  }) : (0, r.jsx)("img", {
    src: a.td,
    alt: "",
    "aria-hidden": true
  })
}