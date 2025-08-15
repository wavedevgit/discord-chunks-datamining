/** Chunk was on 96887 **/
/** chunk id: 508925, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755419 = require("./755419.jsx"),
  Chunk200192 = require("./200192.js");
let l = e => {
  let {
    product: t,
    animationState: r,
    className: n
  } = e, l = o.K[t.skuId];
  return null != l ? (0, a.jsx)("div", {
    className: i()(s.externalProductWrapper, n),
    children: null != l.render && l.render({
      animationState: r,
      alt: t.name
    })
  }) : null
}