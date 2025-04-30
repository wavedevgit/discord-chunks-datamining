/** Chunk was on 40390 **/
e.d(t, {
  Ux: () => f,
  gS: () => k,
  ww: () => x
}), e(997841);
var i = e(192379),
  l = e(399606),
  r = e(230711),
  s = e(18438),
  o = e(314897),
  a = e(271383),
  d = e(430824),
  u = e(496675),
  c = e(914010),
  _ = e(715903),
  g = e(981631),
  h = e(372897),
  N = e(526761),
  I = e(388032);

function f(n) {
  return (0, l.e7)([o.default, a.ZP], () => {
    if (null == n) return !1;
    let t = o.default.getId();
    return (0, _.EY)(a.ZP.getMember(n, t))
  }, [n])
}

function k(n) {
  return (0, l.cj)([o.default, a.ZP, c.Z, d.Z], () => {
    let t = {
        nick: void 0,
        bio: void 0
      },
      e = c.Z.getGuildId(),
      i = null != n ? n : e,
      l = d.Z.getGuild(i);
    if (null == l || null == i) return t;
    let r = o.default.getId(),
      s = a.ZP.getMember(i, r),
      u = (0, _.Ow)(null == s ? void 0 : s.flags);
    if (0 === u.size) return t;
    if (u.has(h.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
      if (null == n) {
        var g;
        t.nick = [I.intl.formatToPlainString(I.t.WBUh3N, {
          guildName: null != (g = l.name) ? g : ""
        })]
      } else t.nick = [I.intl.string(I.t.EPZCrK)];
    return u.has(h.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [I.intl.string(I.t.dZh1v7)]), t
  }, [n])
}

function x(n) {
  let {
    guildId: t,
    scrollPosition: e,
    analyticsLocation: o,
    analyticsLocations: a,
    openWithoutBackstack: c
  } = n, _ = (0, l.e7)([d.Z], () => d.Z.getGuild(t), [t]), h = (0, l.e7)([u.Z], () => null != _ && u.Z.can(g.Plq.CHANGE_NICKNAME, _), [_]);
  return [i.useCallback(() => {
    if (null == _) return;
    let n = g.oAB.PROFILE_CUSTOMIZATION,
      t = N.NB.GUILD;
    h ? (0, s.Fq)(_) : t = N.NB.USER_PROFILE, r.Z.open(n, t, {
      scrollPosition: e,
      analyticsLocation: o,
      analyticsLocations: a,
      openWithoutBackstack: c
    })
  }, [h, e, o, a, c, _]), h]
}