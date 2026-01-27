/** Chunk was on web.js **/
/** chunk id: 395504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WW: () => u,
  Xn: () => d,
  jN: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  return (0, r.bG)([o.Ay, i.A, s.default], () => {
    var t, n, r, a;
    let c = o.Ay.isOptInEnabled(e),
      u = null != (t = null == (r = i.A.getGuild(e)) ? true : r.features.has(l.GuildFeatures.COMMUNITY)) && t,
      d = null != (n = null == (a = s.default.getCurrentUser()) ? true : a.isStaff()) && n;
    return c && (u || d)
  })
}

function u(e) {
  let t = i.A.getGuild(e),
    n = s.default.getCurrentUser();
  return null != e && null != t && null != n && (t.features.has(l.GuildFeatures.COMMUNITY) || n.isStaff()) && o.Ay.isOptInEnabled(e)
}

function d(e) {
  return (0, r.bG)([i.A, a.A], () => {
    var t;
    let n = i.A.getGuild(e),
      r = a.A.can(l.xBc.MANAGE_GUILD, n),
      o = a.A.can(l.xBc.MANAGE_ROLES, n),
      s = null != (t = null == n ? true : n.features.has(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) && t;
    return null != n && r && o && !s
  })
}