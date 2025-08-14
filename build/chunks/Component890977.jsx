/** Chunk was on web.js **/
/** chunk id: 890977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => b
}), require("./49124.js");
var r, i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk500923 = require("./500923.js"),
  u = require.n(Chunk500923),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk484334 = require("./484334.js"),
  Chunk158877 = require("./158877.js"),
  Chunk505723 = require("./505723.js");

function m(e) {
  let t = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
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

function g(e) {
  let {
    className: t
  } = e;
  return (0, o.jsx)("div", {
    ref: m(r || (r = n.t(_, 2))),
    className: l()(h.glow, t)
  })
}

function E(e) {
  let {
    className: t
  } = e;
  return (0, o.jsx)("div", {
    ref: m(i || (i = n.t(p, 2))),
    className: l()(h.trinkets, t)
  })
}
let b = e => {
  let {
    children: t,
    animationContainerClassName: n,
    glowClassName: r,
    trinketsClassName: i,
    onMount: s
  } = e;
  return a.useEffect(() => {
    s()
  }, [s]), (0, o.jsxs)("div", {
    className: n,
    children: [(0, o.jsx)(g, {
      className: r
    }), (0, o.jsx)("div", {
      className: h.circleLayer
    }), (0, o.jsx)("div", {
      className: h.entrypoint,
      children: t
    }), (0, o.jsx)(E, {
      className: i
    })]
  })
}