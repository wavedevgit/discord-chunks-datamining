/** Chunk was on 75393 **/
/** chunk id: 812381, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk920981 = require("./920981.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk335131 = require("./335131.js"),
  Chunk52030 = require("./52030.js"),
  Chunk978134 = require("./978134.js");
let u = () => {
  let e = (0, Chunk442837.e7)([Chunk52030.Z], () => Chunk52030.Z.getShopHomeConfigOverride()),
    t = [{
      label: "DISABLED (no override)",
      value: true
    }, ...Object.values(Chunk920981.H).filter(e => e !== l.H.SUMMER_SALE_TAKEOVER).map(e => ({
      label: e,
      value: e
    }))];
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk978134.container,
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: "Shop Home Override"
    }), (0, Chunk54381.jsx)(Chunk199849.y6, {
      className: Chunk978134.selector,
      options: exports,
      value: module,
      onChange: e => {
        (0, o.fi)(e)
      }
    })]
  })
}