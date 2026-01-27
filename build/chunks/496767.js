/** Chunk was on web.js **/
/** chunk id: 496767, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => c,
  h: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk709977 = require("./709977.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let t = i.A.getGuild(e);
  return null != t && t.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && a.A.can(s.xBc.KICK_MEMBERS, t)
}

function c(e) {
  let t = (0, r.bG)([i.A], () => i.A.getGuild(e)),
    n = a.A.can(s.xBc.KICK_MEMBERS, t) || a.A.can(s.xBc.MANAGE_GUILD, t);
  return null != t && t.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && n && (0, o.Qd)(t)
}