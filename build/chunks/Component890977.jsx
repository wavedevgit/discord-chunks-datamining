/** Chunk was on 82124 **/
/** chunk id: 890977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => v
}), require("./49124.js");
var r, i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk500923 = require("./500923.js"),
  u = require.n(Chunk500923),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk484334 = require("./484334.js"),
  Chunk158877 = require("./158877.js"),
  Chunk459140 = require("./459140.js");

function m(e) {
  let t = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
    n = a.useRef(null);
  return a.useEffect(() => {
    let r;
    return null != n.current && (r = u().loadAnimation({
      container: n.current,
      renderer: "svg",
      loop: true,
      autoplay: !t,
      animationData: JSON.parse(JSON.stringify(e))
    })), () => {
      null == r || r.destroy()
    }
  }, [n, t, e]), n
}

function b(e) {
  let {
    className: t
  } = e;
  return (0, l.jsx)("div", {
    ref: m(r || (r = n.t(f, 2))),
    className: s()(g.glow, t)
  })
}

function y(e) {
  let {
    className: t
  } = e;
  return (0, l.jsx)("div", {
    ref: m(i || (i = n.t(h, 2))),
    className: s()(g.trinkets, t)
  })
}
let v = e => {
  let {
    children: t,
    animationContainerClassName: n,
    glowClassName: r,
    trinketsClassName: i,
    onMount: o
  } = e;
  return a.useEffect(() => {
    o()
  }, [o]), (0, l.jsxs)("div", {
    className: n,
    children: [(0, l.jsx)(b, {
      className: r
    }), (0, l.jsx)("div", {
      className: g.circleLayer
    }), (0, l.jsx)("div", {
      className: g.entrypoint,
      children: t
    }), (0, l.jsx)(y, {
      className: i
    })]
  })
}