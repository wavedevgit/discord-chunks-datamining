/** Chunk was on 40390 **/
e.d(n, {
  Ux: () => I,
  gS: () => x,
  ww: () => A
}), e(997841);
var i = e(73800),
  r = e(399606),
  l = e(230711),
  a = e(18438),
  s = e(314897),
  d = e(271383),
  o = e(430824),
  u = e(496675),
  c = e(914010),
  _ = e(715903),
  h = e(981631),
  g = e(372897),
  f = e(526761),
  N = e(388032);

function I(t) {
  return (0, r.e7)([s.default, d.ZP], () => {
    if (null == t) return !1;
    let n = s.default.getId();
    return (0, _.EY)(d.ZP.getMember(t, n))
  }, [t])
}

function x(t) {
  return (0, r.cj)([s.default, d.ZP, c.Z, o.Z], () => {
    let n = {
        nick: void 0,
        bio: void 0
      },
      e = c.Z.getGuildId(),
      i = null != t ? t : e,
      r = o.Z.getGuild(i);
    if (null == r || null == i) return n;
    let l = s.default.getId(),
      a = d.ZP.getMember(i, l),
      u = (0, _.Ow)(null == a ? void 0 : a.flags);
    if (0 === u.size) return n;
    if (u.has(g.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
      if (null == t) {
        var h;
        n.nick = [N.intl.formatToPlainString(N.t.WBUh3N, {
          guildName: null != (h = r.name) ? h : ""
        })]
      } else n.nick = [N.intl.string(N.t.EPZCrK)];
    return u.has(g.q.AUTOMOD_QUARANTINED_BIO) && (n.bio = [N.intl.string(N.t.dZh1v7)]), n
  }, [t])
}

function A(t) {
  let {
    guildId: n,
    scrollPosition: e,
    analyticsLocation: s,
    analyticsLocations: d,
    openWithoutBackstack: c
  } = t, _ = (0, r.e7)([o.Z], () => o.Z.getGuild(n), [n]), g = (0, r.e7)([u.Z], () => null != _ && u.Z.can(h.Plq.CHANGE_NICKNAME, _), [_]);
  return [i.useCallback(() => {
    if (null == _) return;
    let t = h.oAB.PROFILE_CUSTOMIZATION,
      n = f.NB.GUILD;
    g ? (0, a.Fq)(_) : n = f.NB.USER_PROFILE, l.Z.open(t, n, {
      scrollPosition: e,
      analyticsLocation: s,
      analyticsLocations: d,
      openWithoutBackstack: c
    })
  }, [g, e, s, d, c, _]), g]
}