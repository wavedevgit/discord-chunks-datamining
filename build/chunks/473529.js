/** Chunk was on web.js **/
/** chunk id: 473529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => m,
  d: () => h
});
var Chunk417597 = require("./417597.js"),
  Chunk961973 = require("./961973.js"),
  Chunk164956 = require("./164956.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk701785 = require("./701785.js"),
  Chunk707167 = require("./707167.js"),
  Chunk978165 = require("./978165.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");

function p(e) {
  var t;
  let n = e.id,
    r = (null != (t = l.h.getNewMemberActions(n)) ? t : []).length > 0,
    i = l.h.getEnabled(n);
  return r && e.features.has(d.GuildFeatures.COMMUNITY) && !(e.features.has(d.GuildFeatures.GUILD_ONBOARDING) && !i)
}

function _(e, t) {
  let n = t.getMutableGuildChannelsForGuild(e);
  for (let e in n)
    if (n[e].hasFlag(f.lx.IS_GUILD_RESOURCE_CHANNEL)) returntrue;
  returnfalse
}

function h(e) {
  let t = (0, u.A)(e);
  return (0, r.bG)([o.A, s.A, a.A], () => {
    if (__OVERLAY__ || e === d.ME || e === d.YYv) returnfalse;
    let n = s.A.getGuild(e);
    return !!(null == n ? true : n.features.has(d.GuildFeatures.COMMUNITY)) && (a.A.isFullServerPreview(e) ? p(n) : (0, i.rs)(e) ? t || _(e, o.A) : !!(0, c.A)(n) && (t || _(e, o.A)))
  }, [e, t])
}

function m(e) {
  let t = s.A.getGuild(e),
    n = a.A.isFullServerPreview(e);
  if (null == t || __OVERLAY__ || e === d.ME || e === d.YYv) returnfalse;
  if (n) return p(t);
  let r = (0, i.rs)(e) && t.features.has(d.GuildFeatures.GUILD_ONBOARDING) && t.features.has(d.GuildFeatures.GUILD_SERVER_GUIDE);
  return (t.features.has(d.GuildFeatures.GUILD_ONBOARDING) && t.features.has(d.GuildFeatures.GUILD_SERVER_GUIDE) || r) && t.features.has(d.GuildFeatures.COMMUNITY)
}