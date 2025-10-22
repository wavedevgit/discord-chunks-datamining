/** Chunk was on web.js **/
/** chunk id: 543581, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk641777 = require("./641777.js");
let o = e => {
  let {
    enablePremiumBrandRefresh: t = false,
    text: n
  } = e;
  return (0, r.jsx)("div", {
    className: t ? a.premiumBrandRefreshOfferPill : a.offerPill,
    children: (0, r.jsx)(i.Text, {
      variant: t ? "text-sm/bold" : "text-xs/bold",
      color: "always-white",
      children: n
    })
  })
}