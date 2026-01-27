/** Chunk was on web.js **/
/** chunk id: 821085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk559374 = require("./559374.js"),
  Chunk619881 = require("./619881.js"),
  Chunk175924 = require("./175924.js"),
  Chunk444746 = require("./444746.js"),
  Chunk439776 = require("./439776.js"),
  Chunk543894 = require("./543894.js"),
  Chunk205219 = require("./205219.js");

function u(e) {
  return (0, o.sb)(e) && "fixed" !== (0, a.A)(e).position ? e.offsetParent : null
}

function d(e) {
  var t = /firefox/i.test((0, c.A)());
  if (/Trident/i.test((0, c.A)()) && (0, o.sb)(e) && "fixed" === (0, a.A)(e).position) return null;
  var n = (0, l.A)(e);
  for ((0, o.Ng)(n) && (n = n.host);
    (0, o.sb)(n) && 0 > ["html", "body"].indexOf((0, i.A)(n));) {
    var r = (0, a.A)(n);
    if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || false !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
    n = n.parentNode
  }
  return null
}

function f(e) {
  for (var t = (0, r.A)(e), n = u(e); n && (0, s.A)(n) && "static" === (0, a.A)(n).position;) n = u(n);
  return n && ("html" === (0, i.A)(n) || "body" === (0, i.A)(n) && "static" === (0, a.A)(n).position) ? t : n || d(e) || t
}