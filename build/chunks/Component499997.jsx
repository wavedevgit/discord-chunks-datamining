/** Chunk was on web.js **/
/** chunk id: 499997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk92190 = require("./92190.js"),
  Chunk106376 = require("./106376.js");
let u = e => {
  let {
    className: t,
    animationState: n = "on"
  } = e, u = (0, o.e7)([a.Z], () => a.Z.useReducedMotion), [d, f] = (0, i.useState)(false), p = (0, i.useRef)(null), _ = "on" === n || "on_hover" === n && d;
  return (0, i.useEffect)(() => {
    null !== p.current && (_ ? p.current.play() : (p.current.currentTime = 0, p.current.pause()))
  }, [_]), (0, r.jsx)("div", {
    onMouseEnter: "on_hover" === n ? () => f(true) : true,
    onMouseLeave: "on_hover" === n ? () => f(false) : true,
    children: u ? (0, r.jsx)("img", {
      src: l.Z,
      className: t,
      alt: "Orb"
    }) : (0, r.jsxs)(s.Z, {
      className: t,
      autoPlay: true,
      loop: true,
      ref: p,
      children: [(0, r.jsx)("source", {
        src: c.Z,
        type: "video/webm"
      }), (0, r.jsx)("img", {
        src: l.Z,
        className: t,
        alt: "Orb"
      })]
    })
  })
}