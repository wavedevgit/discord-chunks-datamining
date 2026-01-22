/** Chunk was on web.js **/
/** chunk id: 679970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk157620 = require("./157620.js"),
  Chunk561418 = require("./561418.js");
let u = e => {
  let {
    className: t,
    animationState: n = "on"
  } = e, u = (0, a.bG)([s.A], () => s.A.useReducedMotion), [d, f] = (0, i.useState)(false), p = (0, i.useRef)(null), _ = "on" === n || "on_hover" === n && d;
  return (0, i.useEffect)(() => {
    null !== p.current && (_ ? p.current.play() : (p.current.currentTime = 0, p.current.pause()))
  }, [_]), (0, r.jsx)("div", {
    onMouseEnter: "on_hover" === n ? () => f(true) : true,
    onMouseLeave: "on_hover" === n ? () => f(false) : true,
    children: u ? (0, r.jsx)("img", {
      src: l.A,
      className: t,
      alt: "Orb"
    }) : (0, r.jsxs)(o.A, {
      className: t,
      autoPlay: true,
      loop: true,
      ref: p,
      children: [(0, r.jsx)("source", {
        src: c.A,
        type: "video/webm"
      }), (0, r.jsx)("img", {
        src: l.A,
        className: t,
        alt: "Orb"
      })]
    })
  })
}