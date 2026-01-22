/** Chunk was on web.js **/
/** chunk id: 205238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk559374 = require("./559374.js"),
  Chunk688899 = require("./688899.js"),
  Chunk421336 = require("./421336.js"),
  Chunk190792 = require("./190792.js");

function o(e, t) {
  var n = (0, r.A)(e),
    o = (0, i.A)(e),
    l = n.visualViewport,
    c = o.clientWidth,
    u = o.clientHeight,
    d = 0,
    f = 0;
  if (l) {
    c = l.width, u = l.height;
    var p = (0, s.A)();
    (p || !p && "fixed" === t) && (d = l.offsetLeft, f = l.offsetTop)
  }
  return {
    width: c,
    height: u,
    x: d + (0, a.A)(e),
    y: f
  }
}