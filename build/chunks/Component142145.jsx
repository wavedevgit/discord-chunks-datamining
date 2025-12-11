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
  var t, n, s, l;
  let {
    layerConfig: c,
    animationType: u,
    ticking: d,
    time: f,
    hasPlayedThrough: p,
    setHasPlayedThrough: _,
    urlQueryString: m,
    maxLoops: h,
    loopEnd: g,
    bannerAdjustment: E
  } = e, b = true;
  if (d || (b = false), f < c.start && (b = false), !c.loop && f > c.duration + c.start && (b = false), u === i.y.ANIMATION_TYPE_PERSISTENT && !p && null != h && f >= g && _(true), c.loop && true !== c.loopDelay && c.loopDelay > 0) {
    let e = c.duration + c.loopDelay,
      t = Math.floor((f - c.start) / e);
    f - c.start - t * e > c.duration && (u === i.y.ANIMATION_TYPE_INTERMITTENT && !p && null != h && t >= h && _(true), b = false)
  }
  return b ? (0, r.jsx)("img", {
    src: null != m ? "".concat(c.src, "?query=").concat(m) : c.src,
    className: o.effect,
    style: {
      top: (null != (s = null == (t = c.position) ? true : t.y) ? s : 0) - E,
      left: null != (l = null == (n = c.position) ? true : n.x) ? l : 0
    },
    alt: "",
    "aria-hidden": true
  }) : (0, r.jsx)("img", {
    src: a.td,
    alt: "",
    "aria-hidden": true
  })
}