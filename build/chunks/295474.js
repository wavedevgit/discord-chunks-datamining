/** Chunk was on 40390 **/
t.d(n, {
  Ux: () => k,
  gS: () => x,
  ww: () => C
}), t(789020);
var i = t(192379),
  r = t(399606),
  l = t(230711),
  s = t(906732),
  o = t(18438),
  a = t(314897),
  d = t(271383),
  u = t(430824),
  c = t(496675),
  N = t(914010),
  _ = t(715903),
  g = t(981631),
  h = t(372897),
  I = t(526761),
  f = t(388032);

function k(e) {
  return (0, r.e7)([a.default, d.ZP], () => {
    if (null == e) return !1;
    let n = a.default.getId();
    return (0, _.EY)(d.ZP.getMember(e, n))
  }, [e])
}

function x(e) {
  return (0, r.cj)([a.default, d.ZP, N.Z, u.Z], () => {
    let n = {
        nick: void 0,
        bio: void 0
      },
      t = N.Z.getGuildId(),
      i = null != e ? e : t,
      r = u.Z.getGuild(i);
    if (null == r || null == i) return n;
    let l = a.default.getId(),
      s = d.ZP.getMember(i, l),
      o = (0, _.Ow)(null == s ? void 0 : s.flags);
    if (0 === o.size) return n;
    if (o.has(h.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
      if (null == e) {
        var c;
        n.nick = [f.NW.formatToPlainString(f.t.WBUh3N, {
          guildName: null !== (c = r.name) && void 0 !== c ? c : ""
        })]
      } else n.nick = [f.NW.string(f.t.EPZCrK)]
    }
    return o.has(h.q.AUTOMOD_QUARANTINED_BIO) && (n.bio = [f.NW.string(f.t.dZh1v7)]), n
  }, [e])
}

function C(e) {
  let {
    guildId: n,
    scrollPosition: t,
    analyticsLocation: a,
    analyticsLocations: d,
    openWithoutBackstack: N
  } = e, {
    analyticsLocations: _
  } = (0, s.ZP)(), h = (0, r.e7)([u.Z], () => u.Z.getGuild(n), [n]), f = (0, r.e7)([c.Z], () => null != h && c.Z.can(g.Plq.CHANGE_NICKNAME, h), [h]);
  return [i.useCallback(() => {
    if (null == h) return;
    let e = g.oAB.PROFILE_CUSTOMIZATION,
      n = I.NB.GUILD;
    f ? (0, o.Fq)(h, null != d ? d : _) : n = I.NB.USER_PROFILE, l.Z.open(e, n, {
      scrollPosition: t,
      analyticsLocation: a,
      analyticsLocations: d,
      openWithoutBackstack: N
    })
  }, [f, t, a, d, N, h, _]), f]
}