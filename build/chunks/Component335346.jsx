/** Chunk was on 82081 **/
/** chunk id: 335346, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  V: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk557766 = require("./557766.js");
let c = e => {
  let {
    invertTail: t,
    leftOffset: r,
    rightOffset: a,
    tailSpineClassName: c,
    tailTargetInnerClassName: s
  } = e;
  return (0, n.jsxs)("div", {
    className: o()(i.tail, t ? i.tailPositionInverted : i.tailPositionNormal),
    style: {
      left: r,
      right: a
    },
    children: [(0, n.jsx)("div", {
      className: o()(i.tailSpine, c)
    }), (0, n.jsx)("div", {
      className: o()(i.tailTargetOuter, t ? i.tailTargetPositionInverted : i.tailTargetPositionNormal),
      children: (0, n.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "8",
        height: "8",
        viewBox: "0 0 8 8",
        fill: "none",
        children: (0, n.jsx)("circle", {
          cx: "50%",
          cy: "50%",
          r: "3",
          className: o()(i.tailTargetInner, s)
        })
      })
    })]
  })
}