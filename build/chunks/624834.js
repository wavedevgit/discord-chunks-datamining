/** Chunk was on 12416 **/
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  l = n(192379),
  i = n(120356),
  o = n.n(i),
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
  S = n(388032),
  x = n(984270);

function j(e) {
  let {
    participant: t,
    width: n,
    channelId: i
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
  }), d = l.useMemo(() => ({
    userId: t.user.id,
    activity: t.activity
  }), [t]);
  return (0, r.jsx)(h.Gt, {
    value: o,
    children: (0, r.jsxs)("div", {
      className: x.container,
      children: [null != c && null != s && null != u && "" !== u ? (0, r.jsx)("img", {
        className: x.splashImage,
        alt: c.name,
        src: u
      }) : null, null != c && null != s ? (0, r.jsx)(Z, {
        width: n,
        channelId: i,
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
    participant: i,
    applicationId: m
  } = e, p = (0, E.V_)(t), [j] = (0, E.Ym)(t), Z = (0, a.e7)([g.Z], () => g.Z.getChannel(n)), C = (0, a.e7)([y.default, b.default], () => (0, d.J)(i, b.default) ? null : y.default.getUser(i.userId)), w = l.useMemo(() => null != C ? [C] : [], [C]), P = (0, v.q)(m), {
    analyticsLocations: N
  } = (0, h.ZP)(), I = (0, c.O)(), _ = i.activity.session_id, R = (0, f.Z)(i.activity, O.xjy.EMBEDDED) && (0, f.Z)(i.activity, O.xjy.CONTEXTLESS), [T, A] = l.useState(!1), D = null == C ? void 0 : C.id, k = l.useCallback(async e => {
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
  return null == Z || null == C || null == P ? null : (0, r.jsxs)("div", {
    className: x.splash,
    children: [(0, r.jsx)(E.OV, {
      avatarSize: j,
      guildId: Z.guild_id,
      channelId: Z.id,
      users: w
    }), (0, r.jsx)(s.Text, {
      className: o()(x.subheader, {
        [x.small]: p === E.nR.SMALL,
        [x.medium]: p === E.nR.MEDIUM
      }),
      variant: "text-sm/normal",
      children: S.NW.formatToPlainString(S.t["7Uuia2"], {
        username: C.username
      })
    }), (0, r.jsx)(s.Text, {
      className: o()(x.header, {
        [x.small]: p === E.nR.SMALL,
        [x.medium]: p === E.nR.MEDIUM
      }),
      variant: "text-sm/normal",
      children: P.name
    }), (0, r.jsx)("div", {
      className: x.buttons,
      children: (0, r.jsx)(s.zxk, {
        onClick: k,
        submitting: T,
        size: (0, E.ac)(p),
        className: x.button,
        color: s.zxk.Colors.PRIMARY,
        children: S.NW.string(S.t["4i2vj4"])
      })
    })]
  })
}