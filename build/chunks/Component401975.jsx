/** Chunk was on 45620 **/
/** chunk id: 401975, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk595868 = require("./595868.js"),
  Chunk853637 = require("./853637.js");
let i = e => {
  let {
    skipPulseAnimation: t = false
  } = e;
  return (0, r.jsx)("div", {
    className: a()(o.productCardContainer, s.productSkeletonCardContainer, {
      [s.pulseAnimation]: !t
    }),
    children: (0, r.jsxs)("div", {
      className: a()(o.productCardContentContainer, s.productSkeletonContent),
      children: [(0, r.jsx)("div", {
        className: s.productSkeletonTitle
      }), (0, r.jsx)("div", {
        className: s.productSkeletonDescription
      })]
    })
  })
}