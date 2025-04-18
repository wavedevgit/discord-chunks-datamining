/** Chunk was on 56422 **/
n.d(t, {
  g: () => b,
  mI: () => m
}), n(388685);
var r = n(149765),
  i = n(399606),
  l = n(581883),
  s = n(430824),
  a = n(496675),
  o = n(914010),
  c = n(594174),
  u = n(700785),
  d = n(709054),
  g = n(533244),
  p = n(487419),
  f = n(676770);

function m(e) {
  let t = (0, i.e7)([s.Z, a.Z], () => {
      let t = s.Z.getGuild(e);
      if (null == t) return !1;
      let n = a.Z.getGuildPermissions(t);
      return null != n && r.Db(n, f.cv)
    }),
    n = (0, i.e7)([p.Z], () => null != e ? p.Z.getGuildIncident(e) : null),
    l = null != n && (0, g.ur)(n);
  return {
    shouldShowIncidentActions: t,
    incidentData: n,
    isUnderLockdown: l
  }
}

function b() {
  var e;
  let t = function(e) {
      let t = c.default.getCurrentUser(),
        n = p.Z.getIncidentsByGuild();
      for (let i of d.default.keys(n).map(e => s.Z.getGuild(e))) {
        if (null == i) continue;
        let l = n[i.id];
        if (!(null == l || !(0, g.i9)(l) && !(0, g.ur)(l) || (0, g.ur)(l) && i.id !== e) && r.Db(u.uB({
            user: t,
            context: i,
            checkElevated: !1
          }), f.cv)) return i.id
      }
      return null
    }(o.Z.getGuildId()),
    n = null != (e = l.Z.getGuildsProto()) ? e : {},
    i = null != t ? n[t] : null,
    a = null != i && i.disableRaidAlertNag;
  return {
    show: null != t && !a,
    guildId: t
  }
}
n(981631)