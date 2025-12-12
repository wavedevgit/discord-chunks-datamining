/** Chunk was on web.js **/
/** chunk id: 17079, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => o,
  k: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk155414 = require("./155414.js");
async function o(e, t) {
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

function a(e) {
  r.Z.dispatch({
    type: "CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD",
    guildId: e
  })
}