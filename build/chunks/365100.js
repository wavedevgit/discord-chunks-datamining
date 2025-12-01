/** Chunk was on web.js **/
/** chunk id: 365100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk49691 = require("./49691.js"),
  Chunk285363 = require("./285363.js"),
  Chunk977489 = require("./977489.js"),
  Chunk436857 = require("./436857.js");

function s(e, t) {
  var n = (0, r.Z)(e),
    s = (0, i.Z)(e),
    l = n.visualViewport,
    c = s.clientWidth,
    u = s.clientHeight,
    d = 0,
    f = 0;
  if (l) {
    c = l.width, u = l.height;
    var p = (0, o.Z)();
    (p || !p && "fixed" === t) && (d = l.offsetLeft, f = l.offsetTop)
  }
  return {
    width: c,
    height: u,
    x: d + (0, a.Z)(e),
    y: f
  }
}