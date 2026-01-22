/** Chunk was on web.js **/
/** chunk id: 420474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk140851 = require("./140851.js"),
  Chunk205238 = require("./205238.js"),
  Chunk853717 = require("./853717.js"),
  Chunk389704 = require("./389704.js"),
  Chunk821085 = require("./821085.js"),
  Chunk688899 = require("./688899.js"),
  Chunk175924 = require("./175924.js"),
  Chunk444746 = require("./444746.js"),
  Chunk514467 = require("./514467.js"),
  Chunk543894 = require("./543894.js"),
  Chunk865645 = require("./865645.js"),
  Chunk619881 = require("./619881.js"),
  Chunk395177 = require("./395177.js"),
  Chunk273101 = require("./273101.js");

function g(e, t) {
  var n = (0, d.A)(e, false, "fixed" === t);
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
}

function E(e, t, n) {
  return t === r.R9 ? (0, h.A)((0, i.A)(e, n)) : (0, u.vq)(t) ? g(t, n) : (0, h.A)((0, a.A)((0, l.A)(e)))
}

function b(e) {
  var t = (0, s.A)((0, f.A)(e)),
    n = ["absolute", "fixed"].indexOf((0, c.A)(e).position) >= 0 && (0, u.sb)(e) ? (0, o.A)(e) : e;
  return (0, u.vq)(n) ? t.filter(function(e) {
    return (0, u.vq)(e) && (0, p.A)(e, n) && "body" !== (0, _.A)(e)
  }) : []
}

function y(e, t, n, r) {
  var i = [].concat("clippingParents" === t ? b(e) : [].concat(t), [n]),
    a = i[0],
    s = i.reduce(function(t, n) {
      var i = E(e, n, r);
      return t.top = (0, m.T9)(i.top, t.top), t.right = (0, m.jk)(i.right, t.right), t.bottom = (0, m.jk)(i.bottom, t.bottom), t.left = (0, m.T9)(i.left, t.left), t
    }, E(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
}