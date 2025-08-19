/** Chunk was on 11868 **/
/** chunk id: 528011, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => O,
  mI: () => T
}), require("./388685.js");
var Chunk149765 = require("./149765.js"),
  Chunk399606 = require("./399606.js"),
  Chunk581883 = require("./581883.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk709054 = require("./709054.js"),
  Chunk533244 = require("./533244.js"),
  Chunk487419 = require("./487419.js"),
  Chunk676770 = require("./676770.js");

function T(e) {
  let t = (0, i.e7)([a.Z, o.Z], () => {
      let t = a.Z.getGuild(e);
      if (null == t) returnfalse;
      let n = o.Z.getGuildPermissions(t);
      return null != n && r.Db(n, I.cv)
    }),
    n = (0, i.e7)([E.Z], () => null != e ? E.Z.getGuildIncident(e) : null),
    l = null != n && (0, _.ur)(n);
  return {
    shouldShowIncidentActions: t,
    incidentData: n,
    isUnderLockdown: l
  }
}

function O() {
  var e;
  let t = function(e) {
      let t = s.default.getCurrentUser(),
        n = E.Z.getIncidentsByGuild();
      for (let i of d.default.keys(n).map(e => a.Z.getGuild(e))) {
        if (null == i) continue;
        let l = n[i.id];
        if (!(null == l || !(0, _.i9)(l) && !(0, _.ur)(l) || (0, _.ur)(l) && i.id !== e) && r.Db(u.uB({
            user: t,
            context: i,
            checkElevated: false
          }), I.cv)) return i.id
      }
      return null
    }(Chunk914010.Z.getGuildId()),
    n = null != (e = Chunk581883.Z.getGuildsProto()) ? module : {},
    i = null != exports ? require[exports] : null,
    o = null != Chunk399606 && Chunk399606.disableRaidAlertNag;
  return {
    show: null != exports && !Chunk496675,
    guildId: exports
  }
}
require("./981631.js")