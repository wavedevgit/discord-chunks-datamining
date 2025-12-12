/** Chunk was on web.js **/
/** chunk id: 200876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s,
  l: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  return !e.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.features.has(o.GuildFeatures.CREATOR_MONETIZABLE) || e.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
}

function s(e) {
  return (0, r.e7)([i.Z], () => {
    let t = i.Z.getGuild(e);
    return null != t && a(t)
  })
}