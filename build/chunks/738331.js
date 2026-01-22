/** Chunk was on 47950 **/
/** chunk id: 738331, original params: e,t (module,exports,require) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.calculateChange = function(e, t, r, n, o) {
  var a = o.clientWidth,
    i = o.clientHeight,
    l = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    u = l - (o.getBoundingClientRect().left + window.pageXOffset),
    c = s - (o.getBoundingClientRect().top + window.pageYOffset);
  if ("vertical" === r) {
    var p = true;
    if (p = c < 0 ? 0 : c > i ? 1 : Math.round(100 * c / i) / 100, t.a !== p) return {
      h: t.h,
      s: t.s,
      l: t.l,
      a: p,
      source: "rgb"
    }
  } else {
    var d = true;
    if (n !== (d = u < 0 ? 0 : u > a ? 1 : Math.round(100 * u / a) / 100)) return {
      h: t.h,
      s: t.s,
      l: t.l,
      a: d,
      source: "rgb"
    }
  }
  return null
}