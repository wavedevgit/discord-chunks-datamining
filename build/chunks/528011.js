/** Chunk was on 51424 **/
n.d(t, {
  g: () => f,
  mI: () => m
}), n(47120);
var r = n(149765),
  i = n(399606),
  l = n(581883),
  o = n(430824),
  a = n(496675),
  s = n(914010),
  c = n(594174),
  u = n(700785),
  d = n(709054),
  _ = n(533244),
  E = n(487419),
  p = n(676770);

function m(e) {
  let t = (0, i.e7)([o.Z, a.Z], () => {
      let t = o.Z.getGuild(e);
      if (null == t) return !1;
      let n = a.Z.getGuildPermissions(t);
      return null != n && r.Db(n, p.cv)
    }),
    n = (0, i.e7)([E.Z], () => null != e ? E.Z.getGuildIncident(e) : null),
    l = null != n && (0, _.ur)(n);
  return {
    shouldShowIncidentActions: t,
    incidentData: n,
    isUnderLockdown: l
  }
}

function f() {
  var e;
  let t = function(e) {
      let t = c.default.getCurrentUser(),
        n = E.Z.getIncidentsByGuild();
      for (let i of d.default.keys(n).map(e => o.Z.getGuild(e))) {
        if (null == i) continue;
        let l = n[i.id];
        if (!(null == l || !(0, _.i9)(l) && !(0, _.ur)(l) || (0, _.ur)(l) && i.id !== e) && r.Db(u.uB({
            user: t,
            context: i,
            checkElevated: !1
          }), p.cv)) return i.id
      }
      return null
    }(s.Z.getGuildId()),
    n = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
    i = null != t ? n[t] : null,
    a = null != i && i.disableRaidAlertNag;
  return {
    show: null != t && !a,
    guildId: t
  }
}
n(981631)