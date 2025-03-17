/** Chunk was on 61697 **/
n.d(e, {
  g: () => y,
  mI: () => g
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
  p = n(487419),
  E = n(676770);

function g(t) {
  let e = (0, i.e7)([o.Z, a.Z], () => {
      let e = o.Z.getGuild(t);
      if (null == e) return !1;
      let n = a.Z.getGuildPermissions(e);
      return null != n && r.Db(n, E.cv)
    }),
    n = (0, i.e7)([p.Z], () => null != t ? p.Z.getGuildIncident(t) : null),
    l = null != n && (0, _.ur)(n);
  return {
    shouldShowIncidentActions: e,
    incidentData: n,
    isUnderLockdown: l
  }
}

function y() {
  var t;
  let e = function(t) {
      let e = c.default.getCurrentUser(),
        n = p.Z.getIncidentsByGuild();
      for (let i of d.default.keys(n).map(t => o.Z.getGuild(t))) {
        if (null == i) continue;
        let l = n[i.id];
        if (!(null == l || !(0, _.i9)(l) && !(0, _.ur)(l) || (0, _.ur)(l) && i.id !== t) && r.Db(u.uB({
            user: e,
            context: i,
            checkElevated: !1
          }), E.cv)) return i.id
      }
      return null
    }(s.Z.getGuildId()),
    n = null !== (t = l.Z.getGuildsProto()) && void 0 !== t ? t : {},
    i = null != e ? n[e] : null,
    a = null != i && i.disableRaidAlertNag;
  return {
    show: null != e && !a,
    guildId: e
  }
}
n(981631)