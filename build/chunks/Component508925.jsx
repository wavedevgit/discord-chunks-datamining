/** Chunk was on 96910 **/
/** chunk id: 508925, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  b: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755419 = require("./755419.jsx"),
  Chunk434372 = require("./434372.js");
let s = e => {
  let {
    product: t,
    animationState: r,
    className: a
  } = e, s = l.K[t.skuId];
  return null != s ? (0, n.jsx)("div", {
    className: i()(o.externalProductWrapper, a),
    children: null != s.render && s.render({
      animationState: r,
      alt: t.name
    })
  }) : null
}