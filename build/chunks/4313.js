/** Chunk was on web.js **/
/** chunk id: 4313, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk175922 = require("./175922.js"),
  Chunk759202 = require("./759202.js"),
  Chunk316138 = require("./316138.js"),
  Chunk882159 = require("./882159.js"),
  Chunk977489 = require("./977489.js"),
  Chunk285363 = require("./285363.js"),
  Chunk538018 = require("./538018.js"),
  Chunk894417 = require("./894417.js");

function d(e) {
  var t = e.getBoundingClientRect(),
    n = (0, u.NM)(t.width) / e.offsetWidth || 1,
    r = (0, u.NM)(t.height) / e.offsetHeight || 1;
  return 1 !== n || 1 !== r
}

function f(e, t, n) {
  true === n && (n = false);
  var u = (0, o.Re)(t),
    f = (0, o.Re)(t) && d(t),
    p = (0, l.Z)(t),
    _ = (0, r.Z)(e, f, n),
    m = {
      scrollLeft: 0,
      scrollTop: 0
    },
    h = {
      x: 0,
      y: 0
    };
  return (u || !u && !n) && (("body" !== (0, a.Z)(t) || (0, c.Z)(p)) && (m = (0, i.Z)(t)), (0, o.Re)(t) ? (h = (0, r.Z)(t, true), h.x += t.clientLeft, h.y += t.clientTop) : p && (h.x = (0, s.Z)(p))), {
    x: _.left + m.scrollLeft - h.x,
    y: _.top + m.scrollTop - h.y,
    width: _.width,
    height: _.height
  }
}