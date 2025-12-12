/** Chunk was on web.js **/
/** chunk id: 175922, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk882159 = require("./882159.js"),
  Chunk894417 = require("./894417.js"),
  Chunk49691 = require("./49691.js"),
  Chunk436857 = require("./436857.js");

function s(e, t, n) {
  true === t && (t = false), true === n && (n = false);
  var s = e.getBoundingClientRect(),
    l = 1,
    c = 1;
  t && (0, r.Re)(e) && (l = e.offsetWidth > 0 && (0, i.NM)(s.width) / e.offsetWidth || 1, c = e.offsetHeight > 0 && (0, i.NM)(s.height) / e.offsetHeight || 1);
  var u = ((0, r.kK)(e) ? (0, o.Z)(e) : window).visualViewport,
    d = !(0, a.Z)() && n,
    f = (s.left + (d && u ? u.offsetLeft : 0)) / l,
    p = (s.top + (d && u ? u.offsetTop : 0)) / c,
    _ = s.width / l,
    m = s.height / c;
  return {
    width: _,
    height: m,
    top: p,
    right: f + _,
    bottom: p + m,
    left: f,
    x: f,
    y: p
  }
}