/** Chunk was on web.js **/
/** chunk id: 514467, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk444746 = require("./444746.js"),
  Chunk273101 = require("./273101.js"),
  Chunk559374 = require("./559374.js"),
  Chunk190792 = require("./190792.js");

function o(e, t, n) {
  true === t && (t = false), true === n && (n = false);
  var o = e.getBoundingClientRect(),
    l = 1,
    c = 1;
  t && (0, r.sb)(e) && (l = e.offsetWidth > 0 && (0, i.LI)(o.width) / e.offsetWidth || 1, c = e.offsetHeight > 0 && (0, i.LI)(o.height) / e.offsetHeight || 1);
  var u = ((0, r.vq)(e) ? (0, a.A)(e) : window).visualViewport,
    d = !(0, s.A)() && n,
    f = (o.left + (d && u ? u.offsetLeft : 0)) / l,
    p = (o.top + (d && u ? u.offsetTop : 0)) / c,
    _ = o.width / l,
    h = o.height / c;
  return {
    width: _,
    height: h,
    top: p,
    right: f + _,
    bottom: p + h,
    left: f,
    x: f,
    y: p
  }
}