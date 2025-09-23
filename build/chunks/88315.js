/** Chunk was on 47387 **/
/** chunk id: 88315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P7: () => m,
  RR: () => p,
  UN: () => c,
  bg: () => E,
  hn: () => d,
  np: () => f
});
var Chunk979590 = require("./979590.js"),
  l = require.n(Chunk979590),
  Chunk866442 = require("./866442.js"),
  Chunk220082 = require("./220082.js"),
  Chunk594174 = require("./594174.js"),
  Chunk984063 = require("./984063.js"),
  Chunk813900 = require("./813900.js");

function c(e) {
  let t = e.current,
    n = null == t ? true : t.getContext("2d");
  null != t && null != n && n.clearRect(0, 0, t.width, t.height)
}

function d(e, t) {
  let {
    width: n,
    height: r,
    left: l,
    top: i
  } = e.getBoundingClientRect();
  return {
    x: (t.clientX - l) / n,
    y: (t.clientY - i) / r
  }
}

function f(e, t) {
  return Math.round(e * t * window.devicePixelRatio)
}

function p(e, t, n) {
  return {
    x: f(e.x, t),
    y: f(e.y, n),
    deltaTime: e.deltaTime
  }
}

function m(e) {
  return e.type === u.W.LINE
}

function E(e, t, n, r) {
  var u;
  let c = o.default.getUser(e),
    d = null == c ? true : c.getAvatarURL(null, s.Ks),
    f = null != d ? null == (u = a.SR.getState().palette[d]) ? true : u[0] : null,
    p = null != f ? "#".concat(l()({
      r: f[0],
      g: f[1],
      b: f[2]
    }).toHex()) : r,
    m = (0, i.Bd)((0, i._i)(p)) > .5 ? n : t;
  return {
    fillColor: p,
    outlineColor: m
  }
}