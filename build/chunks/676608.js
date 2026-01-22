/** Chunk was on web.js **/
/** chunk id: 676608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => s,
  aF: () => l,
  jV: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");

function s(e, t) {
  return (0, r.bG)([i.A], () => {
    let t = i.A.getGuild(e);
    return null != t && t.features.has(a.GuildFeatures.ENHANCED_ROLE_COLORS)
  })
}

function o(e, t) {
  return (0, r.bG)([i.A], () => {
    let t = i.A.getGuild(e);
    return null != t && t.features.has(a.GuildFeatures.ENHANCED_ROLE_COLORS)
  })
}

function l(e, t) {
  let n = i.A.getGuild(e);
  return null != n && n.features.has(a.GuildFeatures.ENHANCED_ROLE_COLORS)
}