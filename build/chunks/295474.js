/** Chunk was on 49750 **/
n.d(t, {
  Ux: () => g,
  gS: () => N,
  ww: () => O
}), n(789020);
var r = n(192379),
  i = n(399606),
  l = n(230711),
  o = n(906732),
  s = n(18438),
  a = n(314897),
  c = n(271383),
  u = n(430824),
  d = n(496675),
  _ = n(914010),
  E = n(715903),
  p = n(981631),
  m = n(372897),
  h = n(526761),
  f = n(388032);

function g(e) {
  return (0, i.e7)([a.default, c.ZP], () => {
    if (null == e) return !1;
    let t = a.default.getId();
    return (0, E.EY)(c.ZP.getMember(e, t))
  }, [e])
}

function N(e) {
  return (0, i.cj)([a.default, c.ZP, _.Z, u.Z], () => {
    let t = {
        nick: void 0,
        bio: void 0
      },
      n = _.Z.getGuildId(),
      r = null != e ? e : n,
      i = u.Z.getGuild(r);
    if (null == i || null == r) return t;
    let l = a.default.getId(),
      o = c.ZP.getMember(r, l),
      s = (0, E.Ow)(null == o ? void 0 : o.flags);
    if (0 === s.size) return t;
    if (s.has(m.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
      if (null == e) {
        var d;
        t.nick = [f.NW.formatToPlainString(f.t.WBUh3N, {
          guildName: null !== (d = i.name) && void 0 !== d ? d : ""
        })]
      } else t.nick = [f.NW.string(f.t.EPZCrK)]
    }
    return s.has(m.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [f.NW.string(f.t.dZh1v7)]), t
  }, [e])
}

function O(e) {
  let {
    guildId: t,
    scrollPosition: n,
    analyticsLocation: a,
    analyticsLocations: c,
    openWithoutBackstack: _
  } = e, {
    analyticsLocations: E
  } = (0, o.ZP)(), m = (0, i.e7)([u.Z], () => u.Z.getGuild(t), [t]), f = (0, i.e7)([d.Z], () => null != m && d.Z.can(p.Plq.CHANGE_NICKNAME, m), [m]);
  return [r.useCallback(() => {
    if (null == m) return;
    let e = p.oAB.PROFILE_CUSTOMIZATION,
      t = h.NB.GUILD;
    f ? (0, s.Fq)(m, null != c ? c : E) : t = h.NB.USER_PROFILE, l.Z.open(e, t, {
      scrollPosition: n,
      analyticsLocation: a,
      analyticsLocations: c,
      openWithoutBackstack: _
    })
  }, [f, n, a, c, _, m, E]), f]
}