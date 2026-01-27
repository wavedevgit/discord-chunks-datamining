/** Chunk was on 93140 **/
/** chunk id: 585510, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Li: () => O,
  _g: () => p,
  dj: () => N
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

function O(e) {
  let t = (0, i.bG)([a.A, s.A], () => {
      let t = a.A.getGuild(e);
      if (null == t) returnfalse;
      let n = s.A.getGuildPermissions(t);
      return null != n && r.X8(n, I.Sz)
    }),
    n = (0, i.bG)([T.A], () => null != e ? T.A.getGuildIncident(e) : null),
    l = null != n && (0, A._J)(n);
  return {
    shouldShowIncidentActions: t,
    incidentData: n,
    isUnderLockdown: l
  }
}

function N() {
  var e;
  let t = function(e) {
      let t = u.default.getCurrentUser(),
        n = T.A.getIncidentsByGuild();
      for (let i of d.default.keys(n).map(e => a.A.getGuild(e))) {
        if (null == i) continue;
        let l = n[i.id];
        if (!(null == l || !(0, A.k$)(l) && !(0, A._J)(l) || (0, A._J)(l) && i.id !== e) && r.X8(E.cc({
            user: t,
            context: i,
            checkElevated: false
          }), I.Sz)) return i.id
      }
      return null
    }(c.A.getGuildId()),
    n = null != (e = l.A.getGuildsProto()) ? e : {},
    i = null != t ? n[t] : null,
    o = null != i && i.disableRaidAlertNag;
  return {
    show: null != t && !o,
    guildId: t
  }
}

function p(e) {
  let t = (0, o.t0)("useShowAntiRaidInGuildNotifSettings"),
    n = (0, i.bG)([s.A, a.A], () => {
      let t = a.A.getGuild(e);
      return (0, _.nc)(t, s.A)
    });
  return t && n
}
require("./652215.js")