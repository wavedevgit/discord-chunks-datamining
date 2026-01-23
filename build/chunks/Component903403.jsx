/** Chunk was on 59275 **/
/** chunk id: 903403, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk653887 = require("./653887.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk531685 = require("./531685.js"),
  Chunk993408 = require("./993408.js"),
  Chunk203312 = require("./203312.jsx"),
  Chunk212407 = require("./212407.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk68763 = require("./68763.js");

function b(e) {
  let {
    category: t
  } = e, n = (0, i.bG)([c.A], () => c.A.useReducedMotion), s = (0, i.bG)([d.A], () => d.A.isFocused()), {
    catalogBannerStatic: g,
    catalogBannerAnimated: b,
    catalogBannerRive: h
  } = (0, m.MV)(t), E = l.useRef(null), v = null != h;
  return (0, r.jsxs)("div", {
    ref: E,
    className: a()(_.sW, {
      [_.by]: v
    }),
    children: [v ? (0, r.jsx)(o._, {
      src: h,
      fit: "cover",
      alignment: "center-left",
      style: {
        width: "100%",
        height: "100%"
      },
      eventTargetRef: E,
      autoplay: true
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        className: _.ze,
        src: g,
        alt: t.name
      }), null != b && !n && s && (0, r.jsx)(u.A, {
        src: b,
        className: _.tr,
        autoPlay: true,
        loop: true
      })]
    }), (0, r.jsx)(f.A, {
      category: t,
      className: _.v0,
      daysRemainingText: p.t["8gsP5M"]
    })]
  })
}(0, Chunk993408.$b)(90)