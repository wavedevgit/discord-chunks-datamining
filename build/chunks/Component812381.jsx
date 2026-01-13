/** Chunk was on 22979 **/
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
  Chunk815778 = require("./815778.js");
let u = () => {
  let e = (0, i.e7)([c.Z], () => c.Z.getShopHomeConfigOverride()),
    t = [{
      label: "DISABLED (no override)",
      value: true
    }, ...Object.values(r.H).filter(e => e !== r.H.SUMMER_SALE_TAKEOVER).map(e => ({
      label: e,
      value: e
    }))];
  return (0, a.jsxs)("div", {
    className: d.container,
    children: [(0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      children: "Shop Home Override"
    }), (0, a.jsx)(l.y6, {
      className: d.selector,
      options: t,
      value: e,
      onChange: e => {
        (0, o.fi)(e)
      }
    })]
  })
}