/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(119837),
  o = n(802433),
  a = n(687322);
let s = e => {
  var t, n, s, l;
  let {
    layerConfig: c,
    animationType: u,
    ticking: d,
    time: f,
    accessibilityLabel: _,
    hasPlayedThrough: p,
    setHasPlayedThrough: h,
    urlQueryString: g,
    maxLoops: m,
    loopEnd: E,
    bannerAdjustment: v
  } = e, b = !0;
  if (d || (b = !1), f < c.start && (b = !1), !c.loop && f > c.duration + c.start && (b = !1), u === o.Q.PERSISTENT && !p && null != m && f >= E && h(!0), c.loop && void 0 !== c.loopDelay && c.loopDelay > 0) {
    let e = c.duration + c.loopDelay,
      t = Math.floor((f - c.start) / e);
    f - c.start - t * e > c.duration && (u === o.Q.INTERMITTENT && !p && null != m && t >= m && h(!0), b = !1)
  }
  return b ? (0, r.jsx)("img", {
    src: null != g ? "".concat(c.src, "?query=").concat(g) : c.src,
    className: a.effect,
    style: {
      top: (null !== (s = null === (t = c.position) || void 0 === t ? void 0 : t.y) && void 0 !== s ? s : 0) - v,
      left: null !== (l = null === (n = c.position) || void 0 === n ? void 0 : n.x) && void 0 !== l ? l : 0
    },
    alt: _
  }) : (0, r.jsx)("img", {
    src: i.td,
    alt: _
  })
}