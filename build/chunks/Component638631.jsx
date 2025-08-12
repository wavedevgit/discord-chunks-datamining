/** Chunk was on 20501 **/
/** chunk id: 638631, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk717975 = require("./717975.js"),
  Chunk984849 = require("./984849.js");
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