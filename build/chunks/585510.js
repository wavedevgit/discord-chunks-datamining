/** Chunk was on web.js **/
/** chunk id: 585510, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Li: () => E,
  _g: () => y,
  dj: () => b
}), require("./896048.js");
var Chunk136722 = require("./136722.js"),
  Chunk417597 = require("./417597.js"),
  Chunk617617 = require("./617617.js"),
  Chunk358776 = require("./358776.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk488926 = require("./488926.js"),
  Chunk661191 = require("./661191.js"),
  Chunk974103 = require("./974103.js"),
  Chunk903093 = require("./903093.js"),
  Chunk610136 = require("./610136.js"),
  Chunk218113 = require("./218113.js");

function g(e) {
  let t = u.default.getCurrentUser(),
    n = h.A.getIncidentsByGuild();
  for (let i of f.default.keys(n).map(e => o.A.getGuild(e))) {
    if (null == i) continue;
    let a = n[i.id];
    if (!(null == a || !(0, _.k$)(a) && !(0, _._J)(a) || (0, _._J)(a) && i.id !== e) && r.X8(d.cc({
        user: t,
        context: i,
        checkElevated: false
      }), m.Sz)) return i.id
  }
  return null
}

function E(e) {
  let t = (0, i.bG)([o.A, l.A], () => {
      let t = o.A.getGuild(e);
      if (null == t) returnfalse;
      let n = l.A.getGuildPermissions(t);
      return null != n && r.X8(n, m.Sz)
    }),
    n = (0, i.bG)([h.A], () => null != e ? h.A.getGuildIncident(e) : null),
    a = null != n && (0, _._J)(n);
  return {
    shouldShowIncidentActions: t,
    incidentData: n,
    isUnderLockdown: a
  }
}

function b() {
  var e;
  let t = g(c.A.getGuildId()),
    n = null != (e = a.A.getGuildsProto()) ? e : {},
    r = null != t ? n[t] : null,
    i = null != r && r.disableRaidAlertNag;
  return {
    show: null != t && !i,
    guildId: t
  }
}

function y(e) {
  let t = (0, s.t0)("useShowAntiRaidInGuildNotifSettings"),
    n = (0, i.bG)([l.A, o.A], () => {
      let t = o.A.getGuild(e);
      return (0, p.nc)(t, l.A)
    });
  return t && n
}
require("./652215.js")