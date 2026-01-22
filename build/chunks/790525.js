/** Chunk was on web.js **/
/** chunk id: 790525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk514467 = require("./514467.js"),
  Chunk434891 = require("./434891.js"),
  Chunk619881 = require("./619881.js"),
  Chunk444746 = require("./444746.js"),
  Chunk421336 = require("./421336.js"),
  Chunk688899 = require("./688899.js"),
  Chunk324049 = require("./324049.js"),
  Chunk273101 = require("./273101.js");

function d(e) {
  var t = e.getBoundingClientRect(),
    n = (0, u.LI)(t.width) / e.offsetWidth || 1,
    r = (0, u.LI)(t.height) / e.offsetHeight || 1;
  return 1 !== n || 1 !== r
}

function f(e, t, n) {
  true === n && (n = false);
  var u = (0, s.sb)(t),
    f = (0, s.sb)(t) && d(t),
    p = (0, l.A)(t),
    _ = (0, r.A)(e, f, n),
    h = {
      scrollLeft: 0,
      scrollTop: 0
    },
    m = {
      x: 0,
      y: 0
    };
  return (u || !u && !n) && (("body" !== (0, a.A)(t) || (0, c.A)(p)) && (h = (0, i.A)(t)), (0, s.sb)(t) ? (m = (0, r.A)(t, true), m.x += t.clientLeft, m.y += t.clientTop) : p && (m.x = (0, o.A)(p))), {
    x: _.left + h.scrollLeft - m.x,
    y: _.top + h.scrollTop - m.y,
    width: _.width,
    height: _.height
  }
}