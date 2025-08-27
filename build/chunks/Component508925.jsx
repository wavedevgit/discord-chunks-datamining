/** Chunk was on web.js **/
/** chunk id: 508925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755419 = require("./755419.jsx"),
  Chunk200192 = require("./200192.js");
let l = e => {
  let {
    product: t,
    animationState: n,
    className: i
  } = e, l = o.K[t.skuId];
  return null != l ? (0, r.jsx)("div", {
    className: a()(s.externalProductWrapper, i),
    children: null != l.render && l.render({
      animationState: n,
      alt: t.name
    })
  }) : null
}