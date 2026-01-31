/** Chunk was on 61222 **/
/** chunk id: 585510, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Li: () => I,
  _g: () => N,
  dj: () => O
}), require("./896048.js");
var Chunk136722 = require("./136722.js"),
  Chunk417597 = require("./417597.js"),
  Chunk617617 = require("./617617.js"),
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

function I(e) {
  let t = (0, i.bG)([o.A, a.A], () => {
      let t = o.A.getGuild(e);
      if (null == t) returnfalse;
      let n = a.A.getGuildPermissions(t);
      return null != n && r.X8(n, T.Sz)
    }),
    n = (0, i.bG)([A.A], () => null != e ? A.A.getGuildIncident(e) : null),
    l = null != n && (0, _._J)(n);
  return {
    shouldShowIncidentActions: t,
    incidentData: n,
    isUnderLockdown: l
  }
}

function O() {
  var e;
  let t = function(e) {
      let t = c.default.getCurrentUser(),
        n = A.A.getIncidentsByGuild();
      for (let i of E.default.keys(n).map(e => o.A.getGuild(e))) {
        if (null == i) continue;
        let l = n[i.id];
        if (!(null == l || !(0, _.k$)(l) && !(0, _._J)(l) || (0, _._J)(l) && i.id !== e) && r.X8(u.cc({
            user: t,
            context: i,
            checkElevated: false
          }), T.Sz)) return i.id
      }
      return null
    }(s.A.getGuildId()),
    n = null != (e = l.A.getGuildsProto()) ? e : {},
    i = null != t ? n[t] : null,
    a = null != i && i.disableRaidAlertNag;
  return {
    show: null != t && !a,
    guildId: t
  }
}

function N(e) {
  return (0, i.bG)([a.A, o.A], () => {
    let t = o.A.getGuild(e);
    return (0, d.nc)(t, a.A)
  })
}
require("./652215.js")