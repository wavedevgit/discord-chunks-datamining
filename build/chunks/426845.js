/** Chunk was on 66382 **/
/** chunk id: 426845, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  T: () => n
});
var n = function(e, t, r, n) {
  var o = n.clientWidth,
    a = n.clientHeight,
    i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    s = i - (n.getBoundingClientRect().left + window.pageXOffset),
    u = l - (n.getBoundingClientRect().top + window.pageYOffset);
  if ("vertical" === t) {
    var c = true;
    if (c = u < 0 ? 359 : u > a ? 0 : 360 * (-(100 * u / a) + 100) / 100, r.h !== c) return {
      h: c,
      s: r.s,
      l: r.l,
      a: r.a,
      source: "hsl"
    }
  } else {
    var p = true;
    if (p = s < 0 ? 0 : s > o ? 359 : 100 * s / o * 360 / 100, r.h !== p) return {
      h: p,
      s: r.s,
      l: r.l,
      a: r.a,
      source: "hsl"
    }
  }
  return null
}