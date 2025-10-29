/** Chunk was on 45620 **/
/** chunk id: 401975, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk213301 = require("./213301.js"),
  Chunk586312 = require("./586312.js");
let o = e => {
  let {
    skipPulseAnimation: t = false
  } = e;
  return (0, r.jsx)("div", {
    className: i()(s.productCardContainer, a.productSkeletonCardContainer, {
      [a.pulseAnimation]: !t
    }),
    children: (0, r.jsxs)("div", {
      className: i()(s.productCardContentContainer, a.productSkeletonContent),
      children: [(0, r.jsx)("div", {
        className: a.productSkeletonTitle
      }), (0, r.jsx)("div", {
        className: a.productSkeletonDescription
      })]
    })
  })
}