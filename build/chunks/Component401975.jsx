/** Chunk was on 45620 **/
/** chunk id: 401975, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk595868 = require("./595868.js"),
  Chunk853637 = require("./853637.js");
let s = e => {
  let {
    skipPulseAnimation: t = false
  } = e;
  return (0, r.jsx)("div", {
    className: a()(i.productCardContainer, o.productSkeletonCardContainer, {
      [o.pulseAnimation]: !t
    }),
    children: (0, r.jsxs)("div", {
      className: a()(i.productCardContentContainer, o.productSkeletonContent),
      children: [(0, r.jsx)("div", {
        className: o.productSkeletonTitle
      }), (0, r.jsx)("div", {
        className: o.productSkeletonDescription
      })]
    })
  })
}