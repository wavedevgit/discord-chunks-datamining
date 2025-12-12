/** Chunk was on web.js **/
/** chunk id: 558376, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk285363 = require("./285363.js"),
  Chunk874900 = require("./874900.js"),
  Chunk977489 = require("./977489.js"),
  Chunk636226 = require("./636226.js"),
  Chunk894417 = require("./894417.js");

function l(e) {
  var t, n = (0, r.Z)(e),
    l = (0, a.Z)(e),
    c = null == (t = e.ownerDocument) ? true : t.body,
    u = (0, s.Fp)(n.scrollWidth, n.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0),
    d = (0, s.Fp)(n.scrollHeight, n.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0),
    f = -l.scrollLeft + (0, o.Z)(e),
    p = -l.scrollTop;
  return "rtl" === (0, i.Z)(c || n).direction && (f += (0, s.Fp)(n.clientWidth, c ? c.clientWidth : 0) - u), {
    width: u,
    height: d,
    x: f,
    y: p
  }
}