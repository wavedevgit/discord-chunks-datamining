/** Chunk was on 40184 **/
/** chunk id: 890977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => C
}), require("./49124.js");
var i, r, Chunk54381 = require("./54381.js"),
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

function g(e) {
  let t = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
    n = a.useRef(null);
  return a.useEffect(() => {
    let i;
    return null != n.current && (i = u().loadAnimation({
      container: n.current,
      renderer: "svg",
      loop: true,
      autoplay: !t,
      animationData: JSON.parse(JSON.stringify(e))
    })), () => {
      null == i || i.destroy()
    }
  }, [n, t, e]), n
}

function b(e) {
  let {
    className: t
  } = e;
  return (0, l.jsx)("div", {
    ref: g(i || (i = n.t(f, 2))),
    className: s()(m.glow, t)
  })
}

function y(e) {
  let {
    className: t
  } = e;
  return (0, l.jsx)("div", {
    ref: g(r || (r = n.t(h, 2))),
    className: s()(m.trinkets, t)
  })
}
let C = e => {
  let {
    children: t,
    animationContainerClassName: n,
    glowClassName: i,
    trinketsClassName: r,
    onMount: o
  } = e;
  return a.useEffect(() => {
    o()
  }, [o]), (0, l.jsxs)("div", {
    className: n,
    children: [(0, l.jsx)(b, {
      className: i
    }), (0, l.jsx)("div", {
      className: m.circleLayer
    }), (0, l.jsx)("div", {
      className: m.entrypoint,
      children: t
    }), (0, l.jsx)(y, {
      className: r
    })]
  })
}