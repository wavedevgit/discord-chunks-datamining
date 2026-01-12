/** Chunk was on web.js **/
/** chunk id: 115324, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => o
}), require("./704826.js"), require("./35282.js");
var Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk474936 = require("./474936.js");

function o(e) {
  let t = "...";
  try {
    let e = r.ZP.getDefaultPrice(a.Xh.PREMIUM_MONTH_TIER_2);
    t = (0, i.T4)(e.amount, e.currency)
  } catch (e) {}
  return e.replace(/\{price\}/g, t)
}