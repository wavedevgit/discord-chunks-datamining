/** Chunk was on web.js **/
/** chunk id: 335346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk557766 = require("./557766.js");
let s = e => {
  let {
    invertTail: t,
    leftOffset: n,
    rightOffset: i,
    tailSpineClassName: s,
    tailTargetInnerClassName: l
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(a.tail, t ? a.tailPositionInverted : a.tailPositionNormal),
    style: {
      left: n,
      right: i
    },
    children: [(0, r.jsx)("div", {
      className: o()(a.tailSpine, s)
    }), (0, r.jsx)("div", {
      className: o()(a.tailTargetOuter, t ? a.tailTargetPositionInverted : a.tailTargetPositionNormal),
      children: (0, r.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "8",
        height: "8",
        viewBox: "0 0 8 8",
        fill: "none",
        children: (0, r.jsx)("circle", {
          cx: "50%",
          cy: "50%",
          r: "3",
          className: o()(a.tailTargetInner, l)
        })
      })
    })]
  })
}