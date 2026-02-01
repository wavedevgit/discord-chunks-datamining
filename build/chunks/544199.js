/** Chunk was on 9753 **/
/** chunk id: 544199, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => l,
  G: () => a
});
var Chunk73153 = require("./73153.js"),
  Chunk881268 = require("./881268.js");
async function l(e, t) {
  r.h.dispatch({
    type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
    guildId: e,
    priceTierType: t
  });
  try {
    let n = await i.X(e, t);
    r.h.dispatch({
      type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
      guildId: e,
      priceTierType: t,
      priceTiers: n
    })
  } catch (n) {
    r.h.dispatch({
      type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
      guildId: e,
      priceTierType: t
    })
  }
}

function a(e) {
  r.h.dispatch({
    type: "CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD",
    guildId: e
  })
}