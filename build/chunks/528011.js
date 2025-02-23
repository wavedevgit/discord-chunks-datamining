/** Chunk was on 26593 (afba581c59ecd2f2.js) **/
n.d(t, {
  g: () => y,
  mI: () => m
}), n(47120);
var r = n(149765),
  i = n(399606),
  l = n(581883),
  o = n(430824),
  a = n(496675),
  s = n(914010),
  u = n(594174),
  c = n(700785),
  d = n(709054),
  f = n(533244),
  g = n(487419),
  p = n(676770);

function m(e) {
  let t = (0, i.e7)([o.Z, a.Z], () => {
      let t = o.Z.getGuild(e);
      if (null == t) return !1;
      let n = a.Z.getGuildPermissions(t);
      return null != n && r.Db(n, p.cv)
    }),
    n = (0, i.e7)([g.Z], () => null != e ? g.Z.getGuildIncident(e) : null),
    l = null != n && (0, f.ur)(n);
  return {
    shouldShowIncidentActions: t,
    incidentData: n,
    isUnderLockdown: l
  }
}

function y() {
  var e;
  let t = function(e) {
      let t = u.default.getCurrentUser(),
        n = g.Z.getIncidentsByGuild();
      for (let i of d.default.keys(n).map(e => o.Z.getGuild(e))) {
        if (null == i) continue;
        let l = n[i.id];
        if (!(null == l || !(0, f.i9)(l) && !(0, f.ur)(l) || (0, f.ur)(l) && i.id !== e) && r.Db(c.uB({
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