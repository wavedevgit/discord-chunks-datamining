/** Chunk was on 76282 **/
n.d(t, {
  Ux: () => g,
  gS: () => b,
  ww: () => O
}), n(789020);
var r = n(192379),
  i = n(399606),
  o = n(230711),
  l = n(906732),
  a = n(18438),
  s = n(314897),
  c = n(271383),
  u = n(430824),
  d = n(496675),
  _ = n(914010),
  p = n(715903),
  E = n(981631),
  f = n(372897),
  m = n(526761),
  h = n(388032);

function g(e) {
  return (0, i.e7)([s.default, c.ZP], () => {
    if (null == e) return !1;
    let t = s.default.getId();
    return (0, p.EY)(c.ZP.getMember(e, t))
  }, [e])
}

function b(e) {
  return (0, i.cj)([s.default, c.ZP, _.Z, u.Z], () => {
    let t = {
        nick: void 0,
        bio: void 0
      },
      n = _.Z.getGuildId(),
      r = null != e ? e : n,
      i = u.Z.getGuild(r);
    if (null == i || null == r) return t;
    let o = s.default.getId(),
      l = c.ZP.getMember(r, o),
      a = (0, p.Ow)(null == l ? void 0 : l.flags);
    if (0 === a.size) return t;
    if (a.has(f.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
      if (null == e) {
        var d;
        t.nick = [h.NW.formatToPlainString(h.t.WBUh3N, {
          guildName: null !== (d = i.name) && void 0 !== d ? d : ""
        })]
      } else t.nick = [h.NW.string(h.t.EPZCrK)]
    }
    return a.has(f.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [h.NW.string(h.t.dZh1v7)]), t
  }, [e])
}

function O(e) {
  let {
    guildId: t,
    scrollPosition: n,
    analyticsLocation: s,
    analyticsLocations: c,
    openWithoutBackstack: _
  } = e, {
    analyticsLocations: p
  } = (0, l.ZP)(), f = (0, i.e7)([u.Z], () => u.Z.getGuild(t), [t]), h = (0, i.e7)([d.Z], () => null != f && d.Z.can(E.Plq.CHANGE_NICKNAME, f), [f]);
  return [r.useCallback(() => {
    if (null == f) return;
    let e = E.oAB.PROFILE_CUSTOMIZATION,
      t = m.NB.GUILD;
    h ? (0, a.Fq)(f, null != c ? c : p) : t = m.NB.USER_PROFILE, o.Z.open(e, t, {
      scrollPosition: n,
      analyticsLocation: s,
      analyticsLocations: c,
      openWithoutBackstack: _
    })
  }, [h, n, s, c, _, f, p]), h]
}