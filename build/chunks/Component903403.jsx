/** Chunk was on 59275 **/
/** chunk id: 903403, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    category: t
  } = e, l = (0, i.bG)([c.A], () => c.A.useReducedMotion), s = (0, i.bG)([d.A], () => d.A.isFocused()), {
    catalogBannerStatic: f,
    catalogBannerAnimated: h,
    catalogBannerRive: E
  } = (0, g.MV)(t), v = r.useRef(null), A = null != E;
  return (0, n.jsxs)("div", {
    ref: v,
    className: a()(m.sW, {
      [m.by]: A
    }),
    children: [A ? (0, n.jsx)(o._, {
      src: E,
      fit: "cover",
      alignment: "center-left",
      style: {
        width: "100%",
        height: "100%"
      },
      eventTargetRef: v,
      autoplay: true
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("img", {
        className: m.ze,
        src: f,
        alt: t.name
      }), null != h && !l && s && (0, n.jsx)(u.A, {
        src: h,
        className: m.tr,
        autoPlay: true,
        loop: true
      })]
    }), (0, n.jsx)(b.A, {
      category: t,
      className: m.v0,
      daysRemainingText: p.t["8gsP5M"]
    })]
  })
}(0, Chunk993408.$b)(90)