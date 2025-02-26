/** Chunk was on 63061 **/
n.d(t, {
  g: () => h,
  mI: () => m
}), n(47120);
var r = n(149765),
  i = n(399606),
  o = n(581883),
  l = n(430824),
  s = n(496675),
  a = n(914010),
  c = n(594174),
  u = n(700785),
  d = n(709054),
  _ = n(533244),
  E = n(487419),
  p = n(676770);

function m(e) {
  let t = (0, i.e7)([l.Z, s.Z], () => {
      let t = l.Z.getGuild(e);
      if (null == t) return !1;
      let n = s.Z.getGuildPermissions(t);
      return null != n && r.Db(n, p.cv)
    }),
    n = (0, i.e7)([E.Z], () => null != e ? E.Z.getGuildIncident(e) : null),
    o = null != n && (0, _.ur)(n);
  return {
    shouldShowIncidentActions: t,
    incidentData: n,
    isUnderLockdown: o
  }
}

function h() {
  var e;
  let t = function(e) {
      let t = c.default.getCurrentUser(),
        n = E.Z.getIncidentsByGuild();
      for (let i of d.default.keys(n).map(e => l.Z.getGuild(e))) {
        if (null == i) continue;
        let o = n[i.id];
        if (!(null == o || !(0, _.i9)(o) && !(0, _.ur)(o) || (0, _.ur)(o) && i.id !== e) && r.Db(u.uB({
            user: t,
            context: i,
            checkElevated: !1
          }), p.cv)) return i.id
      }
      return null
    }(a.Z.getGuildId()),
    n = null !== (e = o.Z.getGuildsProto()) && void 0 !== e ? e : {},
    i = null != t ? n[t] : null,
    s = null != i && i.disableRaidAlertNag;
  return {
    show: null != t && !s,
    guildId: t
  }
}
n(981631)