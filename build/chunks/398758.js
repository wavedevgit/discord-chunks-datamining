/** Chunk was on web.js **/
/** chunk id: 398758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DM: () => c,
  r1: () => u,
  te: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  return (0, r.e7)([a.ZP, i.Z, s.default], () => {
    var t, n, r, o;
    let c = a.ZP.isOptInEnabled(e),
      u = null != (r = null == (t = i.Z.getGuild(e)) ? true : t.features.has(l.GuildFeatures.COMMUNITY)) && r,
      d = null != (o = null == (n = s.default.getCurrentUser()) ? true : n.isStaff()) && o;
    return c && (u || d)
  })
}

function u(e) {
  let t = i.Z.getGuild(e),
    n = s.default.getCurrentUser();
  return null != e && null != t && null != n && (t.features.has(l.GuildFeatures.COMMUNITY) || n.isStaff()) && a.ZP.isOptInEnabled(e)
}

function d(e) {
  return (0, r.e7)([i.Z, o.Z], () => {
    var t;
    let n = i.Z.getGuild(e),
      r = o.Z.can(l.Plq.MANAGE_GUILD, n),
      a = o.Z.can(l.Plq.MANAGE_ROLES, n),
      s = null != (t = null == n ? true : n.features.has(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) && t;
    return null != n && r && a && !s
  })
}