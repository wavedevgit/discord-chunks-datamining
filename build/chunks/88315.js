/** Chunk was on 69813 **/
/** chunk id: 88315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P7: () => g,
  RR: () => p,
  UN: () => u,
  bg: () => b,
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

function u(e) {
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

function g(e) {
  return e.type === c.W.LINE
}

function b(e, t, n, r) {
  var c;
  let u = o.default.getUser(e),
    d = null == u ? true : u.getAvatarURL(null, s.Ks),
    f = null != d ? null == (c = a.SR.getState().palette[d]) ? true : c[0] : null,
    p = null != f ? "#".concat(l()({
      r: f[0],
      g: f[1],
      b: f[2]
    }).toHex()) : r,
    g = (0, i.Bd)((0, i._i)(p)) > .5 ? n : t;
  return {
    fillColor: p,
    outlineColor: g
  }
}