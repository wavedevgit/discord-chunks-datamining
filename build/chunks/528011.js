/** Chunk was on web.js **/
/** chunk id: 528011, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => g,
  mI: () => m
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

function h(e) {
  let t = c.default.getCurrentUser(),
    n = _.Z.getIncidentsByGuild();
  for (let i of d.default.keys(n).map(e => o.Z.getGuild(e))) {
    if (null == i) continue;
    let a = n[i.id];
    if (!(null == a || !(0, f.i9)(a) && !(0, f.ur)(a) || (0, f.ur)(a) && i.id !== e) && r.Db(u.uB({
        user: t,
        context: i,
        checkElevated: false
      }), p.cv)) return i.id
  }
  return null
}

function m(e) {
  let t = (0, i.e7)([o.Z, s.Z], () => {
      let t = o.Z.getGuild(e);
      if (null == t) returnfalse;
      let n = s.Z.getGuildPermissions(t);
      return null != n && r.Db(n, p.cv)
    }),
    n = (0, i.e7)([_.Z], () => null != e ? _.Z.getGuildIncident(e) : null),
    a = null != n && (0, f.ur)(n);
  return {
    shouldShowIncidentActions: t,
    incidentData: n,
    isUnderLockdown: a
  }
}

function g() {
  var e;
  let t = h(Chunk914010.Z.getGuildId()),
    n = null != (e = Chunk581883.Z.getGuildsProto()) ? module : {},
    r = null != exports ? require[exports] : null,
    i = null != Chunk149765 && Chunk149765.disableRaidAlertNag;
  return {
    show: null != exports && !Chunk399606,
    guildId: exports
  }
}
require("./981631.js")