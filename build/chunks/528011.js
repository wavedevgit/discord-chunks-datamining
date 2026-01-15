/** Chunk was on web.js **/
/** chunk id: 528011, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tz: () => y,
  g: () => b,
  mI: () => E
}), require("./388685.js");
var Chunk149765 = require("./149765.js"),
  Chunk399606 = require("./399606.js"),
  Chunk581883 = require("./581883.js"),
  Chunk526665 = require("./526665.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk709054 = require("./709054.js"),
  Chunk162157 = require("./162157.js"),
  Chunk533244 = require("./533244.js"),
  Chunk487419 = require("./487419.js"),
  Chunk676770 = require("./676770.js");

function g(e) {
  let t = u.default.getCurrentUser(),
    n = h.Z.getIncidentsByGuild();
  for (let i of f.default.keys(n).map(e => s.Z.getGuild(e))) {
    if (null == i) continue;
    let a = n[i.id];
    if (!(null == a || !(0, _.i9)(a) && !(0, _.ur)(a) || (0, _.ur)(a) && i.id !== e) && r.Db(d.uB({
        user: t,
        context: i,
        checkElevated: false
      }), m.cv)) return i.id
  }
  return null
}

function E(e) {
  let t = (0, i.e7)([s.Z, l.Z], () => {
      let t = s.Z.getGuild(e);
      if (null == t) returnfalse;
      let n = l.Z.getGuildPermissions(t);
      return null != n && r.Db(n, m.cv)
    }),
    n = (0, i.e7)([h.Z], () => null != e ? h.Z.getGuildIncident(e) : null),
    a = null != n && (0, _.ur)(n);
  return {
    shouldShowIncidentActions: t,
    incidentData: n,
    isUnderLockdown: a
  }
}

function b() {
  var e;
  let t = g(c.Z.getGuildId()),
    n = null != (e = a.Z.getGuildsProto()) ? e : {},
    r = null != t ? n[t] : null,
    i = null != r && r.disableRaidAlertNag;
  return {
    show: null != t && !i,
    guildId: t
  }
}

function y(e) {
  let t = (0, o.gj)("useShowAntiRaidInGuildNotifSettings"),
    n = (0, i.e7)([l.Z, s.Z], () => {
      let t = s.Z.getGuild(e);
      return (0, p.al)(t, l.Z)
    });
  return t && n
}
require("./981631.js")