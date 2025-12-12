/** Chunk was on web.js **/
/** chunk id: 931261, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => m,
  s: () => h
});
var Chunk399606 = require("./399606.js"),
  Chunk637853 = require("./637853.js"),
  Chunk160404 = require("./160404.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk563534 = require("./563534.js"),
  Chunk199689 = require("./199689.js"),
  Chunk460347 = require("./460347.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function p(e) {
  var t;
  let n = e.id,
    r = (null != (t = l.Z.getNewMemberActions(n)) ? t : []).length > 0,
    i = l.Z.getEnabled(n);
  return r && e.features.has(d.GuildFeatures.COMMUNITY) && !(e.features.has(d.GuildFeatures.GUILD_ONBOARDING) && !i)
}

function _(e, t) {
  let n = t.getMutableGuildChannelsForGuild(e);
  for (let e in n)
    if (n[e].hasFlag(f.zZ.IS_GUILD_RESOURCE_CHANNEL)) returntrue;
  returnfalse
}

function m(e) {
  let t = (0, u.Z)(e);
  return (0, r.e7)([a.Z, s.Z, o.Z], () => {
    if (__OVERLAY__ || e === d.ME || e === d.I_8) returnfalse;
    let n = s.Z.getGuild(e);
    return !!(null == n ? true : n.features.has(d.GuildFeatures.COMMUNITY)) && (o.Z.isFullServerPreview(e) ? p(n) : (0, i.wC)(e) ? t || _(e, a.Z) : !!(0, c.Z)(n) && (t || _(e, a.Z)))
  }, [e, t])
}

function h(e) {
  let t = s.Z.getGuild(e),
    n = o.Z.isFullServerPreview(e);
  if (null == t || __OVERLAY__ || e === d.ME || e === d.I_8) returnfalse;
  if (n) return p(t);
  let r = (0, i.wC)(e) && t.features.has(d.GuildFeatures.GUILD_ONBOARDING) && t.features.has(d.GuildFeatures.GUILD_SERVER_GUIDE);
  return (t.features.has(d.GuildFeatures.GUILD_ONBOARDING) && t.features.has(d.GuildFeatures.GUILD_SERVER_GUIDE) || r) && t.features.has(d.GuildFeatures.COMMUNITY)
}