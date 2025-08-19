/** Chunk was on 66181 **/
/** chunk id: 543581, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk72572 = require("./72572.js");
let a = e => {
  let {
    enablePremiumBrandRefresh: t = false,
    text: n
  } = e;
  return (0, i.jsx)("div", {
    className: t ? s.premiumBrandRefreshOfferPill : s.offerPill,
    children: (0, i.jsx)(r.Text, {
      variant: t ? "text-sm/bold" : "text-xs/bold",
      color: "always-white",
      children: n
    })
  })
}