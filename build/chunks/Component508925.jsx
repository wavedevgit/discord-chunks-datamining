/** Chunk was on 96887 **/
/** chunk id: 508925, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755419 = require("./755419.jsx"),
  Chunk669790 = require("./669790.js");
let o = e => {
  let {
    product: t,
    animationState: r,
    className: a
  } = e, o = s.K[t.skuId];
  return null != o ? (0, n.jsx)("div", {
    className: i()(l.externalProductWrapper, a),
    children: null != o.render && o.render({
      animationState: r,
      alt: t.name
    })
  }) : null
}