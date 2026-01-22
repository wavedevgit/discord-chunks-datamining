/** Chunk was on web.js **/
/** chunk id: 936555, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o,
  w: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  return !e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE) || e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
}

function o(e) {
  return (0, r.bG)([i.A], () => {
    let t = i.A.getGuild(e);
    return null != t && s(t)
  })
}