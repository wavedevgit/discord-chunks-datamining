/** Chunk was on 51424 **/
n.d(t, {
  Ux: () => g,
  gS: () => O,
  ww: () => N
}), n(789020);
var r = n(192379),
  i = n(399606),
  l = n(230711),
  o = n(906732),
  a = n(18438),
  s = n(314897),
  c = n(271383),
  u = n(430824),
  d = n(496675),
  _ = n(914010),
  E = n(715903),
  p = n(981631),
  m = n(372897),
  f = n(526761),
  h = n(388032);

function g(e) {
  return (0, i.e7)([s.default, c.ZP], () => {
    if (null == e) return !1;
    let t = s.default.getId();
    return (0, E.EY)(c.ZP.getMember(e, t))
  }, [e])
}

function O(e) {
  return (0, i.cj)([s.default, c.ZP, _.Z, u.Z], () => {
    let t = {
        nick: void 0,
        bio: void 0
      },
      n = _.Z.getGuildId(),
      r = null != e ? e : n,
      i = u.Z.getGuild(r);
    if (null == i || null == r) return t;
    let l = s.default.getId(),
      o = c.ZP.getMember(r, l),
      a = (0, E.Ow)(null == o ? void 0 : o.flags);
    if (0 === a.size) return t;
    if (a.has(m.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
      if (null == e) {
        var d;
        t.nick = [h.NW.formatToPlainString(h.t.WBUh3N, {
          guildName: null !== (d = i.name) && void 0 !== d ? d : ""
        })]
      } else t.nick = [h.NW.string(h.t.EPZCrK)]
    }
    return a.has(m.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [h.NW.string(h.t.dZh1v7)]), t
  }, [e])
}

function N(e) {
  let {
    guildId: t,
    scrollPosition: n,
    analyticsLocation: s,
    analyticsLocations: c,
    openWithoutBackstack: _
  } = e, {
    analyticsLocations: E
  } = (0, o.ZP)(), m = (0, i.e7)([u.Z], () => u.Z.getGuild(t), [t]), h = (0, i.e7)([d.Z], () => null != m && d.Z.can(p.Plq.CHANGE_NICKNAME, m), [m]);
  return [r.useCallback(() => {
    if (null == m) return;
    let e = p.oAB.PROFILE_CUSTOMIZATION,
      t = f.NB.GUILD;
    h ? (0, a.Fq)(m, null != c ? c : E) : t = f.NB.USER_PROFILE, l.Z.open(e, t, {
      scrollPosition: n,
      analyticsLocation: s,
      analyticsLocations: c,
      openWithoutBackstack: _
    })
  }, [h, n, s, c, _, m, E]), h]
}