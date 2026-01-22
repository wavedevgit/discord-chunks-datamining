/** Chunk was on web.js **/
/** chunk id: 776781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $b: () => p,
  Ni: () => m,
  pC: () => g,
  pF: () => _,
  qd: () => h
});
var Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk857071 = require("./857071.js");
require("./260509.js"), require("./961350.js");
var Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk488926 = require("./488926.js"),
  Chunk233993 = require("./233993.js"),
  Chunk446600 = require("./446600.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  var i, a;
  let s = null == n ? true : n.permissionOverwrites[e];
  return {
    id: e,
    type: t,
    deny: null != (i = null == s ? true : s.deny) ? i : c.x3,
    allow: r.TF(null != (a = null == s ? true : s.allow) ? a : c.x3, u.QY)
  }
}

function _(e) {
  let {
    allow: t,
    deny: n
  } = e;
  return r.aI(t, c.x3) && r.aI(n, c.x3)
}

function h(e) {
  return (0, i.bG)([l.A, o.A, s.A], () => {
    let t = s.A.getChannel(e),
      n = o.A.getGuild(null == t ? true : t.getGuildId());
    return !!(l.A.can(f.xBc.ADMINISTRATOR, n) || l.A.can(f.xBc.MANAGE_ROLES, t, true, true, true) || l.A.can(u.Kn, t))
  }, [e])
}

function m(e) {
  return (0, i.bG)([s.A, l.A], () => null != e && l.A.can(f.xBc.MUTE_MEMBERS, s.A.getChannel(e)), [e])
}

function g(e) {
  return null != e && !!e.isGuildStageVoice() && !!a.A.isLurking(e.guild_id) && !!d.A.isPublic(e.id) && l.A.can(u.Gk, e)
}