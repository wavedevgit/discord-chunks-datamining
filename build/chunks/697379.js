/** Chunk was on web.js **/
/** chunk id: 697379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => c,
  v: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk983736 = require("./983736.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let t = i.Z.getGuild(e);
  return null != t && t.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && o.Z.can(s.Plq.KICK_MEMBERS, t)
}

function c(e) {
  let t = (0, r.e7)([i.Z], () => i.Z.getGuild(e)),
    n = o.Z.can(s.Plq.KICK_MEMBERS, t) || o.Z.can(s.Plq.MANAGE_GUILD, t);
  return null != t && t.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && n && (0, a.Dc)(t)
}