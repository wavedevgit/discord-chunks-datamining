/** Chunk was on 39048 **/
/** chunk id: 72533, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s,
  o: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  return (0, r.bG)([i.A], () => {
    let t = i.A.getGuild(e);
    return null != t && t.features.has(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)
  })
}

function a(e) {
  let t = i.A.getGuild(e);
  return null != t && t.features.has(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)
}