/** Chunk was on web.js **/
/** chunk id: 88315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P7: () => p,
  RR: () => _,
  UN: () => u,
  bg: () => h,
  hn: () => d,
  np: () => f
});
var Chunk979590 = require("./979590.js"),
  i = require.n(Chunk979590),
  Chunk866442 = require("./866442.js"),
  Chunk220082 = require("./220082.js"),
  Chunk594174 = require("./594174.js"),
  Chunk984063 = require("./984063.js"),
  Chunk813900 = require("./813900.js");

function u(e) {
  let t = e.current,
    n = null == t ? true : t.getContext("2d");
  null != t && null != n && n.clearRect(0, 0, t.width, t.height)
}

function d(e, t) {
  let {
    width: n,
    height: r,
    left: i,
    top: o
  } = e.getBoundingClientRect();
  return {
    x: (t.clientX - i) / n,
    y: (t.clientY - o) / r
  }
}

function f(e, t) {
  return Math.round(e * t * window.devicePixelRatio)
}

function _(e, t, n) {
  return {
    x: f(e.x, t),
    y: f(e.y, n),
    deltaTime: e.deltaTime
  }
}

function p(e) {
  return e.type === l.W.LINE
}

function h(e, t, n, r) {
  var l;
  let u = s.default.getUser(e),
    d = null == u ? true : u.getAvatarURL(null, c.Ks),
    f = null != d ? null == (l = a.SR.getState().palette[d]) ? true : l[0] : null,
    _ = null != f ? "#".concat(i()({
      r: f[0],
      g: f[1],
      b: f[2]
    }).toHex()) : r,
    p = (0, o.Bd)((0, o._i)(_)) > .5 ? n : t;
  return {
    fillColor: _,
    outlineColor: p
  }
}