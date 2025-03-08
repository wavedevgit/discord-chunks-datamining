/** Chunk was on 74329 **/
n.d(t, {
  g: () => m,
  mI: () => f
}), n(47120);
var r = n(149765),
  i = n(399606),
  o = n(581883),
  l = n(430824),
  a = n(496675),
  s = n(914010),
  c = n(594174),
  u = n(700785),
  d = n(709054),
  _ = n(533244),
  p = n(487419),
  E = n(676770);

function f(e) {
  let t = (0, i.e7)([l.Z, a.Z], () => {
      let t = l.Z.getGuild(e);
      if (null == t) return !1;
      let n = a.Z.getGuildPermissions(t);
      return null != n && r.Db(n, E.cv)
    }),
    n = (0, i.e7)([p.Z], () => null != e ? p.Z.getGuildIncident(e) : null),
    o = null != n && (0, _.ur)(n);
  return {
    shouldShowIncidentActions: t,
    incidentData: n,
    isUnderLockdown: o
  }
}

function m() {
  var e;
  let t = function(e) {
      let t = c.default.getCurrentUser(),
        n = p.Z.getIncidentsByGuild();
      for (let i of d.default.keys(n).map(e => l.Z.getGuild(e))) {
        if (null == i) continue;
        let o = n[i.id];
        if (!(null == o || !(0, _.i9)(o) && !(0, _.ur)(o) || (0, _.ur)(o) && i.id !== e) && r.Db(u.uB({
            user: t,
            context: i,
            checkElevated: !1
          }), E.cv)) return i.id
      }
      return null
    }(s.Z.getGuildId()),
    n = null !== (e = o.Z.getGuildsProto()) && void 0 !== e ? e : {},
    i = null != t ? n[t] : null,
    a = null != i && i.disableRaidAlertNag;
  return {
    show: null != t && !a,
    guildId: t
  }
}
n(981631)