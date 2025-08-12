/** Chunk was on 93886 **/
/** chunk id: 812381, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  a: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk920981 = require("./920981.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk335131 = require("./335131.js"),
  Chunk52030 = require("./52030.js"),
  Chunk898746 = require("./898746.js");
let d = () => {
  let e = (0, Chunk442837.e7)([Chunk52030.Z], () => Chunk52030.Z.getShopHomeConfigOverride()),
    t = [{
      label: "DISABLED (no override)",
      value: true
    }, ...Object.values(Chunk920981.H).filter(e => e !== r.H.SUMMER_SALE_TAKEOVER).map(e => ({
      label: e,
      value: e
    }))];
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk898746.container,
    children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: "Shop Home Override"
    }), (0, Chunk255367.jsx)(Chunk481060.q4e, {
      className: Chunk898746.selector,
      options: exports,
      value: module,
      onChange: e => {
        (0, s.fi)(e)
      }
    })]
  })
}