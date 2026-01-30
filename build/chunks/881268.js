/** Chunk was on 64935 **/
/** chunk id: 881268, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk198982 = require("./198982.js"),
  Chunk652215 = require("./652215.js");
let a = async (e, t) => {
  try {
    return (await r.Bo.get({
      url: l.Rsh.PRICE_TIERS,
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