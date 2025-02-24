/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  T: () => r
});
var r = function(e, t, n) {
  var r = n.getBoundingClientRect(),
    i = r.width,
    o = r.height,
    a = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    l = a - (n.getBoundingClientRect().left + window.pageXOffset),
    c = s - (n.getBoundingClientRect().top + window.pageYOffset);
  l < 0 ? l = 0 : l > i && (l = i), c < 0 ? c = 0 : c > o && (c = o);
  var u = l / i,
    d = 1 - c / o;
  return {
    h: t.h,
    s: u,
    v: d,
    a: t.a,
    source: "hsv"
  }
}