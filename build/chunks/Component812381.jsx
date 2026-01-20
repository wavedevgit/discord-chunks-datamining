/** Chunk was on 22979 **/
/** chunk id: 812381, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk920981 = require("./920981.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk335131 = require("./335131.js"),
  Chunk52030 = require("./52030.js"),
  Chunk815778 = require("./815778.js");
let d = () => {
  let e = (0, i.e7)([o.Z], () => o.Z.getShopHomeConfigOverride()),
    t = [{
      id: "none",
      label: "DISABLED (no override)",
      value: true
    }, ...Object.values(r.H).filter(e => e !== r.H.SUMMER_SALE_TAKEOVER).map(e => ({
      id: e,
      label: e,
      value: e
    }))];
  return (0, a.jsx)("div", {
    className: c.container,
    children: (0, a.jsx)(l.PhF, {
      label: "Shop Home Override",
      options: t,
      value: e,
      onSelectionChange: e => {
        (0, s.fi)(e)
      },
      selectionMode: "single",
      fullWidth: true
    })
  })
}