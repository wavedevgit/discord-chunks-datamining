/** Chunk was on 5606 **/
/** chunk id: 637706, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => o
}), require("./747238.js"), require("./812715.js");
var Chunk311907 = require("./311907.js"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk788868 = require("./788868.js");

function o(e) {
  let t = "...",
    n = (0, r.bG)([i.A], () => i.A.isLoadedForSKU(a.pe.TIER_2));
  if (false !== e.indexOf("{price}") && n) try {
    let e = l.Ay.getDefaultPrice(a.gD.PREMIUM_MONTH_TIER_2);
    t = (0, s.$g)(e.amount, e.currency)
  } catch (e) {}
  return e.replace(/\{price\}/g, t)
}