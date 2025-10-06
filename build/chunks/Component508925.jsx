/** Chunk was on 96887 **/
/** chunk id: 508925, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755419 = require("./755419.jsx"),
  Chunk200192 = require("./200192.js");
let s = e => {
  let {
    product: t,
    animationState: r,
    className: n
  } = e, s = l.K[t.skuId];
  return null != s ? (0, a.jsx)("div", {
    className: i()(o.externalProductWrapper, n),
    children: null != s.render && s.render({
      animationState: r,
      alt: t.name
    })
  }) : null
}