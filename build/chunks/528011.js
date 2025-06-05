/** Chunk was on 56714 **/
n.d(t, {
  g: () => _,
  mI: () => E
}), n(388685);
var r = n(149765),
  i = n(399606),
  l = n(581883),
  a = n(430824),
  u = n(496675),
  o = n(914010),
  s = n(594174),
  c = n(700785),
  d = n(709054),
  f = n(533244),
  p = n(487419),
  g = n(676770);

function E(e) {
  let t = (0, i.e7)([a.Z, u.Z], () => {
      let t = a.Z.getGuild(e);
      if (null == t) return !1;
      let n = u.Z.getGuildPermissions(t);
      return null != n && r.Db(n, g.cv)
    }),
    n = (0, i.e7)([p.Z], () => null != e ? p.Z.getGuildIncident(e) : null),
    l = null != n && (0, f.ur)(n);
  return {
    shouldShowIncidentActions: t,
    incidentData: n,
    isUnderLockdown: l
  }
}

function _() {
  var e;
  let t = function(e) {
      let t = s.default.getCurrentUser(),
        n = p.Z.getIncidentsByGuild();
      for (let i of d.default.keys(n).map(e => a.Z.getGuild(e))) {
        if (null == i) continue;
        let l = n[i.id];
        if (!(null == l || !(0, f.i9)(l) && !(0, f.ur)(l) || (0, f.ur)(l) && i.id !== e) && r.Db(c.uB({
            user: t,
            context: i,
            checkElevated: !1
          }), g.cv)) return i.id
      }
      return null
    }(o.Z.getGuildId()),
    n = null != (e = l.Z.getGuildsProto()) ? e : {},
    i = null != t ? n[t] : null,
    u = null != i && i.disableRaidAlertNag;
  return {
    show: null != t && !u,
    guildId: t
  }
}
n(981631)