/** Chunk was on 76346 **/
r.d(t, {
  g: () => C,
  mI: () => y
}), r(388685);
var n = r(149765),
  i = r(399606),
  s = r(581883),
  l = r(430824),
  o = r(496675),
  a = r(914010),
  c = r(594174),
  u = r(700785),
  d = r(709054),
  p = r(533244),
  f = r(487419),
  g = r(676770);

function y(e) {
  let t = (0, i.e7)([l.Z, o.Z], () => {
      let t = l.Z.getGuild(e);
      if (null == t) return !1;
      let r = o.Z.getGuildPermissions(t);
      return null != r && n.Db(r, g.cv)
    }),
    r = (0, i.e7)([f.Z], () => null != e ? f.Z.getGuildIncident(e) : null),
    s = null != r && (0, p.ur)(r);
  return {
    shouldShowIncidentActions: t,
    incidentData: r,
    isUnderLockdown: s
  }
}

function C() {
  var e;
  let t = function(e) {
      let t = c.default.getCurrentUser(),
        r = f.Z.getIncidentsByGuild();
      for (let i of d.default.keys(r).map(e => l.Z.getGuild(e))) {
        if (null == i) continue;
        let s = r[i.id];
        if (!(null == s || !(0, p.i9)(s) && !(0, p.ur)(s) || (0, p.ur)(s) && i.id !== e) && n.Db(u.uB({
            user: t,
            context: i,
            checkElevated: !1
          }), g.cv)) return i.id
      }
      return null
    }(a.Z.getGuildId()),
    r = null != (e = s.Z.getGuildsProto()) ? e : {},
    i = null != t ? r[t] : null,
    o = null != i && i.disableRaidAlertNag;
  return {
    show: null != t && !o,
    guildId: t
  }
}
r(981631)