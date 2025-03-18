/** Chunk was on 12416 **/
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(481060),
  c = n(2052),
  u = n(638880),
  d = n(413458),
  f = n(620662),
  m = n(778569),
  p = n(100527),
  h = n(906732),
  v = n(835473),
  b = n(314897),
  g = n(592125),
  y = n(594174),
  E = n(849171),
  O = n(981631),
  x = n(388032),
  S = n(984270);

function j(e) {
  let {
    participant: t,
    width: n,
    channelId: l
  } = e, {
    analyticsLocations: o
  } = (0, h.ZP)(p.Z.PRESENCE_ACTIVITY_TILE), {
    activity: a
  } = t, s = a.application_id, [c] = (0, v.Z)([s]), {
    url: u
  } = (0, m.Z)({
    applicationId: s,
    names: E.Ix,
    size: E.bn
  }), d = i.useMemo(() => ({
    userId: t.user.id,
    activity: t.activity
  }), [t]);
  return (0, r.jsx)(h.Gt, {
    value: o,
    children: (0, r.jsxs)("div", {
      className: S.container,
      children: [null != c && null != s && null != u && "" !== u ? (0, r.jsx)("img", {
        className: S.splashImage,
        alt: c.name,
        src: u
      }) : null, null != c && null != s ? (0, r.jsx)(Z, {
        width: n,
        channelId: l,
        participant: d,
        applicationId: s
      }) : null]
    })
  })
}

function Z(e) {
  let {
    width: t,
    channelId: n,
    participant: l,
    applicationId: m
  } = e, p = (0, E.V_)(t), [j] = (0, E.Ym)(t), Z = (0, a.e7)([g.Z], () => g.Z.getChannel(n)), w = (0, a.e7)([y.default, b.default], () => (0, d.J)(l, b.default) ? null : y.default.getUser(l.userId)), C = i.useMemo(() => null != w ? [w] : [], [w]), P = (0, v.q)(m), {
    analyticsLocations: N
  } = (0, h.ZP)(), I = (0, c.O)(), _ = l.activity.session_id, R = (0, f.Z)(l.activity, O.xjy.EMBEDDED) && (0, f.Z)(l.activity, O.xjy.CONTEXTLESS), [T, A] = i.useState(!1), D = null == w ? void 0 : w.id, k = i.useCallback(async e => {
    e.stopPropagation(), null != m && null != D && (A(!0), await (0, u.Z)({
      applicationId: m,
      activityChannelId: n,
      locationObject: I.location,
      analyticsLocations: N,
      joinUserId: D,
      joinSessionId: _,
      instanceId: void 0,
      isContextlessActivity: R
    }), A(!1))
  }, [m, D, I.location, N, _, n, R]);
  return null == Z || null == w || null == P ? null : (0, r.jsxs)("div", {
    className: S.splash,
    children: [(0, r.jsx)(E.OV, {
      avatarSize: j,
      guildId: Z.guild_id,
      channelId: Z.id,
      users: C
    }), (0, r.jsx)(s.Text, {
      className: o()(S.subheader, {
        [S.small]: p === E.nR.SMALL,
        [S.medium]: p === E.nR.MEDIUM
      }),
      variant: "text-sm/normal",
      children: x.NW.formatToPlainString(x.t["7Uuia2"], {
        username: w.username
      })
    }), (0, r.jsx)(s.Text, {
      className: o()(S.header, {
        [S.small]: p === E.nR.SMALL,
        [S.medium]: p === E.nR.MEDIUM
      }),
      variant: "text-sm/normal",
      children: P.name
    }), (0, r.jsx)("div", {
      className: S.buttons,
      children: (0, r.jsx)(s.zxk, {
        onClick: k,
        submitting: T,
        size: (0, E.ac)(p),
        className: S.button,
        color: s.zxk.Colors.PRIMARY,
        children: x.NW.string(x.t["4i2vj4"])
      })
    })]
  })
}