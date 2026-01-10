/** Chunk was on 45620 **/
/** chunk id: 401975, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk595868 = require("./595868.js"),
  Chunk853637 = require("./853637.js");
let o = e => {
  let {
    skipPulseAnimation: t = false
  } = e;
  return (0, r.jsx)("div", {
    className: a()(s.productCardContainer, i.productSkeletonCardContainer, {
      [i.pulseAnimation]: !t
    }),
    children: (0, r.jsxs)("div", {
      className: a()(s.productCardContentContainer, i.productSkeletonContent),
      children: [(0, r.jsx)("div", {
        className: i.productSkeletonTitle
      }), (0, r.jsx)("div", {
        className: i.productSkeletonDescription
      })]
    })
  })
}