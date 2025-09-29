/** Chunk was on 96887 **/
/** chunk id: 508925, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk755419 = require("./755419.jsx"),
  Chunk367737 = require("./367737.js");
let s = e => {
  let {
    product: t,
    animationState: r,
    className: i
  } = e, s = l.K[t.skuId];
  return null != s ? (0, a.jsx)("div", {
    className: n()(o.externalProductWrapper, i),
    children: null != s.render && s.render({
      animationState: r,
      alt: t.name
    })
  }) : null
}