/** Chunk was on 17869 **/
/** chunk id: 666717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PA: () => p,
  RT: () => h,
  _t: () => d,
  av: () => u,
  iV: () => c,
  yO: () => f
});
var Chunk440745 = require("./440745.js"),
  r = require.n(Chunk440745),
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
    height: l,
    left: r,
    top: i
  } = e.getBoundingClientRect();
  return {
    x: (t.clientX - r) / n,
    y: (t.clientY - i) / l
  }
}

function d(e, t) {
  return Math.round(e * t * window.devicePixelRatio)
}

function h(e, t, n) {
  return {
    x: d(e.x, t),
    y: d(e.y, n),
    deltaTime: e.deltaTime
  }
}

function p(e) {
  return e.type === o.Z.LINE
}

function f(e, t, n, l) {
  var o;
  let c = s.default.getUser(e),
    u = null == c ? true : c.getAvatarURL(null, 80),
    d = null != u ? null == (o = a.Ip.getState().palette[u]) ? true : o[0] : null,
    h = null != d ? "#".concat(r()({
      r: d[0],
      g: d[1],
      b: d[2]
    }).toHex()) : l,
    p = (0, i.OK)((0, i.LX)(h)) > .5 ? n : t;
  return {
    fillColor: h,
    outlineColor: p
  }
}
require("./824217.js")