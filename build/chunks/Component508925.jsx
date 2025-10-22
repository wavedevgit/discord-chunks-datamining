/** Chunk was on 96887 **/
/** chunk id: 508925, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755419 = require("./755419.jsx"),
  Chunk200192 = require("./200192.js");
let o = e => {
  let {
    product: t,
    animationState: r,
    className: i
  } = e, o = s.K[t.skuId];
  return null != o ? (0, n.jsx)("div", {
    className: a()(l.externalProductWrapper, i),
    children: null != o.render && o.render({
      animationState: r,
      alt: t.name
    })
  }) : null
}