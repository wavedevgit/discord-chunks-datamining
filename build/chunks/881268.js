/** Chunk was on web.js **/
/** chunk id: 881268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk198982 = require("./198982.js"),
  Chunk652215 = require("./652215.js");
let s = async (e, t) => {
  try {
    return (await r.Bo.get({
      url: a.Rsh.PRICE_TIERS,
      query: {
        price_tier_type: t,
        guild_id: e
      },
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.LG(e)
  }
}