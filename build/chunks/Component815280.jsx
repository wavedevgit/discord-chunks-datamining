/** Chunk was on 59275 **/
/** chunk id: 815280, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
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
let g = e => {
  let {
    bannerStatic: t,
    bannerAnimated: n,
    bannerRive: l,
    isResponsive: g = false,
    eventTargetRef: f
  } = e, m = (0, a.bG)([o.A], () => o.A.useReducedMotion), p = (0, a.bG)([u.A], () => u.A.isFocused()), h = null != n && !m && p;
  return null != l ? (0, r.jsx)(i._, {
    src: l,
    fit: "fit-width",
    eventTargetRef: f
  }) : h ? (0, r.jsx)(c.A, {
    className: s()({
      [d.no]: g
    }, d.BW, d.ud),
    src: n,
    autoPlay: true,
    loop: true
  }) : (0, r.jsx)("div", {
    className: s()({
      [d.no]: g
    }, d.BW, d._e),
    style: {
      backgroundImage: "url(".concat(t, ")")
    }
  })
}