/** Chunk was on web.js **/
/** chunk id: 685516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk740078 = require("./740078.js"),
  Chunk365100 = require("./365100.js"),
  Chunk558376 = require("./558376.js"),
  Chunk620720 = require("./620720.js"),
  Chunk343713 = require("./343713.js"),
  Chunk285363 = require("./285363.js"),
  Chunk874900 = require("./874900.js"),
  Chunk882159 = require("./882159.js"),
  Chunk175922 = require("./175922.js"),
  Chunk660027 = require("./660027.js"),
  Chunk67966 = require("./67966.js"),
  Chunk316138 = require("./316138.js"),
  Chunk6138 = require("./6138.js"),
  Chunk894417 = require("./894417.js");

function g(e, t) {
  var n = (0, d.Z)(e, false, "fixed" === t);
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
}

function E(e, t, n) {
  return t === r.Pj ? (0, m.Z)((0, i.Z)(e, n)) : (0, u.kK)(t) ? g(t, n) : (0, m.Z)((0, o.Z)((0, l.Z)(e)))
}

function b(e) {
  var t = (0, a.Z)((0, f.Z)(e)),
    n = ["absolute", "fixed"].indexOf((0, c.Z)(e).position) >= 0 && (0, u.Re)(e) ? (0, s.Z)(e) : e;
  return (0, u.kK)(n) ? t.filter(function(e) {
    return (0, u.kK)(e) && (0, p.Z)(e, n) && "body" !== (0, _.Z)(e)
  }) : []
}

function y(e, t, n, r) {
  var i = [].concat("clippingParents" === t ? b(e) : [].concat(t), [n]),
    o = i[0],
    a = i.reduce(function(t, n) {
      var i = E(e, n, r);
      return t.top = (0, h.Fp)(i.top, t.top), t.right = (0, h.VV)(i.right, t.right), t.bottom = (0, h.VV)(i.bottom, t.bottom), t.left = (0, h.Fp)(i.left, t.left), t
    }, E(e, o, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
}