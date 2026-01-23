/** Chunk was on 36054 **/
/** chunk id: 904080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk716970 = require("./716970.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk979286 = require("./979286.js"),
  Chunk295811 = require("./295811.js"),
  Chunk194878 = require("./194878.js");
let d = () => {
  let e = (0, r.bG)([o.A], () => o.A.getShopHomeConfigOverride()),
    t = [{
      id: "none",
      label: "DISABLED (no override)",
      value: true
    }, ...Object.values(l.C).filter(e => e !== l.C.SUMMER_SALE_TAKEOVER).map(e => ({
      id: e,
      label: e,
      value: e
    }))];
  return (0, a.jsx)("div", {
    className: c.k,
    children: (0, a.jsx)(i.l6P, {
      label: "Shop Home Override",
      options: t,
      value: e,
      onSelectionChange: e => {
        (0, s.Or)(e)
      },
      selectionMode: "single",
      fullWidth: true
    })
  })
}