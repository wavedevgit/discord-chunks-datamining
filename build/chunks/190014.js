/** Chunk was on 51724 **/
n.d(t, {
  Z: () => N
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(626135),
  a = n(63063),
  l = n(88658),
  o = n(695346),
  c = n(639814),
  d = n(838436),
  u = n(51331),
  m = n(703115),
  p = n(526761),
  g = n(726985),
  h = n(736530),
  f = n(981631),
  x = n(388032);

function b(e) {
  let {
    ingress: t,
    guildId: n
  } = e, c = o.iH.useSetting().includes(n), p = i.useCallback(e => {
    let r = (0, l.rr)();
    e ? r.delete(n) : r.add(n), o.iH.updateSetting([...r]), s.default.track(f.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: m.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);
  return n === h.T ? null : (0, r.jsx)(d.U, {
    setting: g.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
    children: (0, r.jsx)(u.Z, {
      title: x.NW.string(x.t["T+nevL"]),
      value: !c,
      onChange: p,
      note: x.NW.format(x.t.jXKQCg, {
        helpdeskArticle: a.Z.getArticleURL(f.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    })
  })
}

function N(e) {
  let {
    ingress: t = p.f4.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, c.is)();
  return (0, r.jsx)(b, {
    ingress: t,
    guildId: null != n ? n : i
  })
}