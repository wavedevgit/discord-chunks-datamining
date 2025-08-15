/** Chunk was on 30202 **/
/** chunk id: 329242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk51144 = require("./51144.js"),
  Chunk606837 = require("./606837.js");
let c = e => {
  let {
    user: t,
    fill: n
  } = e, r = "\xa0(@".concat(l.ZP.getUserTag(t, {
    decoration: "never"
  }), ")");
  return (0, i.jsxs)(a.Text, {
    className: s()([{
      [o.fill]: n
    }]),
    variant: "text-md/medium",
    children: [(0, i.jsx)("span", {
      className: o.username,
      children: l.ZP.getName(t)
    }), (0, i.jsx)("span", {
      className: o.discriminator,
      children: r
    })]
  })
}