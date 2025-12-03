/** Chunk was on 45620 **/
/** chunk id: 401975, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk213301 = require("./213301.js"),
  Chunk586312 = require("./586312.js");
let s = e => {
  let {
    skipPulseAnimation: t = false
  } = e;
  return (0, r.jsx)("div", {
    className: i()(o.productCardContainer, a.productSkeletonCardContainer, {
      [a.pulseAnimation]: !t
    }),
    children: (0, r.jsxs)("div", {
      className: i()(o.productCardContentContainer, a.productSkeletonContent),
      children: [(0, r.jsx)("div", {
        className: a.productSkeletonTitle
      }), (0, r.jsx)("div", {
        className: a.productSkeletonDescription
      })]
    })
  })
}