/** Chunk was on 86642 **/
/** chunk id: 88315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P7: () => h,
  RR: () => f,
  UN: () => u,
  bg: () => m,
  hn: () => d,
  np: () => p
});
var Chunk979590 = require("./979590.js"),
  r = require.n(Chunk979590),
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
    height: i,
    left: r,
    top: l
  } = e.getBoundingClientRect();
  return {
    x: (t.clientX - r) / n,
    y: (t.clientY - l) / i
  }
}

function p(e, t) {
  return Math.round(e * t * window.devicePixelRatio)
}

function f(e, t, n) {
  return {
    x: p(e.x, t),
    y: p(e.y, n),
    deltaTime: e.deltaTime
  }
}

function h(e) {
  return e.type === s.W.LINE
}

function m(e, t, n, i) {
  var s;
  let u = o.default.getUser(e),
    d = null == u ? true : u.getAvatarURL(null, c.Ks),
    p = null != d ? null == (s = a.SR.getState().palette[d]) ? true : s[0] : null,
    f = null != p ? "#".concat(r()({
      r: p[0],
      g: p[1],
      b: p[2]
    }).toHex()) : i,
    h = (0, l.Bd)((0, l._i)(f)) > .5 ? n : t;
  return {
    fillColor: f,
    outlineColor: h
  }
}