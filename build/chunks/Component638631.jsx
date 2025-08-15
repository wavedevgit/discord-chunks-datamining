/** Chunk was on 30202 **/
/** chunk id: 638631, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk717975 = require("./717975.js"),
  Chunk132415 = require("./132415.js");
let l = e => {
  let {
    enablePremiumBrandRefresh: t = false
  } = e, n = (0, s.Z)();
  return null == n ? null : (0, i.jsx)("div", {
    className: t ? a.premiumBrandRefreshOfferPill : a.offerPill,
    children: (0, i.jsx)(r.Text, {
      variant: t ? "text-sm/bold" : "text-xs/bold",
      color: "always-white",
      children: n
    })
  })
}