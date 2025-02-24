/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  T: () => r
});
var r = function(e, t, n, r, i) {
  var o = i.clientWidth,
    a = i.clientHeight,
    s = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    c = s - (i.getBoundingClientRect().left + window.pageXOffset),
    u = l - (i.getBoundingClientRect().top + window.pageYOffset);
  if ("vertical" === n) {
    var d = void 0;
    if (d = u < 0 ? 0 : u > a ? 1 : Math.round(100 * u / a) / 100, t.a !== d) return {
      h: t.h,
      s: t.s,
      l: t.l,
      a: d,
      source: "rgb"
    }
  } else {
    var f = void 0;
    if (r !== (f = c < 0 ? 0 : c > o ? 1 : Math.round(100 * c / o) / 100)) return {
      h: t.h,
      s: t.s,
      l: t.l,
      a: f,
      source: "rgb"
    }
  }
  return null
}