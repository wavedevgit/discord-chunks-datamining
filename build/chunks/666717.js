/** Chunk was on 31748 **/
/** chunk id: 666717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PA: () => p,
  RT: () => f,
  _t: () => d,
  av: () => u,
  iV: () => c,
  yO: () => g
});
var Chunk440745 = require("./440745.js"),
  l = require.n(Chunk440745),
  Chunk317097 = require("./317097.js"),
  Chunk654107 = require("./654107.js"),
  Chunk287809 = require("./287809.js"),
  Chunk134753 = require("./134753.js");

function c(e) {
  let t = e.current,
    n = null == t ? true : t.getContext("2d");
  null != t && null != n && n.clearRect(0, 0, t.width, t.height)
}

function u(e, t) {
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

function d(e, t) {
  return Math.round(e * t * window.devicePixelRatio)
}

function f(e, t, n) {
  return {
    x: d(e.x, t),
    y: d(e.y, n),
    deltaTime: e.deltaTime
  }
}

function p(e) {
  return e.type === s.Z.LINE
}

function g(e, t, n, r) {
  var s;
  let c = o.default.getUser(e),
    u = null == c ? true : c.getAvatarURL(null, 80),
    d = null != u ? null == (s = a.Ip.getState().palette[u]) ? true : s[0] : null,
    f = null != d ? "#".concat(l()({
      r: d[0],
      g: d[1],
      b: d[2]
    }).toHex()) : r,
    p = (0, i.OK)((0, i.LX)(f)) > .5 ? n : t;
  return {
    fillColor: f,
    outlineColor: p
  }
}
require("./824217.js")