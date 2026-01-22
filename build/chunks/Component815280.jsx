/** Chunk was on 59275 **/
/** chunk id: 815280, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk653887 = require("./653887.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk531685 = require("./531685.js"),
  Chunk402314 = require("./402314.js");
let f = e => {
  let {
    bannerStatic: t,
    bannerAnimated: l,
    bannerRive: r,
    isResponsive: f = false,
    eventTargetRef: b
  } = e, g = (0, a.bG)([o.A], () => o.A.useReducedMotion), m = (0, a.bG)([u.A], () => u.A.isFocused()), p = null != l && !g && m;
  return null != r ? (0, n.jsx)(i._, {
    src: r,
    fit: "fit-width",
    eventTargetRef: b
  }) : p ? (0, n.jsx)(c.A, {
    className: s()({
      [d.no]: f
    }, d.BW, d.ud),
    src: l,
    autoPlay: true,
    loop: true
  }) : (0, n.jsx)("div", {
    className: s()({
      [d.no]: f
    }, d.BW, d._e),
    style: {
      backgroundImage: "url(".concat(t, ")")
    }
  })
}