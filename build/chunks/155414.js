/** Chunk was on 66866 **/
/** chunk id: 155414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk881052 = require("./881052.js"),
  Chunk981631 = require("./981631.js");
let a = async (e, t) => {
  try {
    return (await r.tn.get({
      url: l.ANM.PRICE_TIERS,
      query: {
        price_tier_type: t,
        guild_id: e
      },
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}