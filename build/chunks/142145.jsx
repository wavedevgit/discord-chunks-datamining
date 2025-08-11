/** Chunk was on web.js **/
/** chunk id: 142145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk119837 = require("./119837.js"),
  Chunk802433 = require("./802433.js"),
  Chunk422786 = require("./422786.js");
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
  if (d || (b = false), f < c.start && (b = false), !c.loop && f > c.duration + c.start && (b = false), u === o.Q.PERSISTENT && !_ && null != m && f >= g && p(true), c.loop && true !== c.loopDelay && c.loopDelay > 0) {
    let e = c.duration + c.loopDelay,
      t = Math.floor((f - c.start) / e);
    f - c.start - t * e > c.duration && (u === o.Q.INTERMITTENT && !_ && null != m && t >= m && p(true), b = false)
  }
  return b ? <img src={null != h ? "".concat(c.src, "?query=").concat(h) : c.src} className={a.effect} style={{
      top: (null != (s = null == (t = c.position) ? true : t.y) ? s : 0) - E,
      left: null != (l = null == (n = c.position) ? true : n.x) ? l : 0
    }} alt={""} aria-hidden={true} /> : <img src={i.td} alt={""} aria-hidden={true} />
}