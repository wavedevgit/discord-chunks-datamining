/** Chunk was on web.js **/
/** chunk id: 343713, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk49691 = require("./49691.js"),
  Chunk316138 = require("./316138.js"),
  Chunk874900 = require("./874900.js"),
  Chunk882159 = require("./882159.js"),
  Chunk953177 = require("./953177.js"),
  Chunk660027 = require("./660027.js"),
  Chunk408431 = require("./408431.js");

function u(e) {
  return (0, o.Re)(e) && "fixed" !== (0, a.Z)(e).position ? e.offsetParent : null
}

function d(e) {
  var t = /firefox/i.test((0, c.Z)());
  if (/Trident/i.test((0, c.Z)()) && (0, o.Re)(e) && "fixed" === (0, a.Z)(e).position) return null;
  var n = (0, l.Z)(e);
  for ((0, o.Zq)(n) && (n = n.host);
    (0, o.Re)(n) && 0 > ["html", "body"].indexOf((0, i.Z)(n));) {
    var r = (0, a.Z)(n);
    if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || false !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
    n = n.parentNode
  }
  return null
}

function f(e) {
  for (var t = (0, r.Z)(e), n = u(e); n && (0, s.Z)(n) && "static" === (0, a.Z)(n).position;) n = u(n);
  return n && ("html" === (0, i.Z)(n) || "body" === (0, i.Z)(n) && "static" === (0, a.Z)(n).position) ? t : n || d(e) || t
}