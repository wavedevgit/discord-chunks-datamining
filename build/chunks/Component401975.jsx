/** Chunk was on 45620 **/
/** chunk id: 401975, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk217726 = require("./217726.js"),
  Chunk586312 = require("./586312.js");
let o = e => {
  let {
    skipPulseAnimation: t = false
  } = e;
  return (0, r.jsx)("div", {
    className: a()(s.baseProductCardContainer, i.productSkeletonCardContainer, {
      [i.pulseAnimation]: !t
    }),
    children: (0, r.jsxs)("div", {
      className: a()(s.baseProductCardContentContainer, i.productSkeletonContent),
      children: [(0, r.jsx)("div", {
        className: i.productSkeletonTitle
      }), (0, r.jsx)("div", {
        className: i.productSkeletonDescription
      })]
    })
  })
}