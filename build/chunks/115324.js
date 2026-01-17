/** Chunk was on web.js **/
/** chunk id: 115324, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => l
}), require("./704826.js"), require("./35282.js");
var Chunk442837 = require("./442837.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk474936 = require("./474936.js");

function l(e) {
  let t = "...",
    n = (0, r.e7)([i.Z], () => i.Z.isLoadedForSKU(s.Si.TIER_2));
  if (false !== e.indexOf("{price}") && n) try {
    let e = a.ZP.getDefaultPrice(s.Xh.PREMIUM_MONTH_TIER_2);
    t = (0, o.T4)(e.amount, e.currency)
  } catch (e) {}
  return e.replace(/\{price\}/g, t)
}