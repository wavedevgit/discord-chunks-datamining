/** Chunk was on 91173 **/
/** chunk id: 17079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => l,
  k: () => o
});
var Chunk570140 = require("./570140.js"),
  Chunk155414 = require("./155414.js");
async function l(e, t) {
  r.Z.dispatch({
    type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
    guildId: e,
    priceTierType: t
  });
  try {
    let n = await i.X(e, t);
    r.Z.dispatch({
      type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
      guildId: e,
      priceTierType: t,
      priceTiers: n
    })
  } catch (n) {
    r.Z.dispatch({
      type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
      guildId: e,
      priceTierType: t
    })
  }
}

function o(e) {
  r.Z.dispatch({
    type: "CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD",
    guildId: e
  })
}