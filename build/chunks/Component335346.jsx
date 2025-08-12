/** Chunk was on 82081 **/
/** chunk id: 335346, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  V: () => c
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356);
require("./755721.js"), require("./481060.js"), require("./937860.jsx");
var Chunk185905 = require("./185905.js");
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