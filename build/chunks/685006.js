/** Chunk was on 71611 (6f02c158d7813e32.js) **/
n.d(t, {
  ZP: () => P,
  xL: () => E
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(15729),
  s = n(731965),
  c = n(481060),
  u = n(911969),
  d = n(100527),
  p = n(367907),
  h = n(450936),
  f = n(368478),
  m = n(499254),
  g = n(827498),
  b = n(213459),
  _ = n(541716),
  C = n(540059),
  v = n(61356),
  y = n(981631),
  x = n(314734),
  j = n(52975);
let O = (0, a.U)(() => ({
    visible: !1
  })),
  N = e => {
    (0, s.j)(() => {
      O.setState({
        visible: e
      })
    })
  },
  E = O;

function P(e) {
  let {
    context: t,
    entryPointCommandButtonRef: n,
    type: l
  } = e, {
    isInitialLoading: o,
    application: a,
    primaryEntryPointCommand: s
  } = (0, h.Z)({
    context: t
  }), c = null == a ? void 0 : a.id, f = (0, v.Z)({
    type: l
  }), {
    sectionCommands: C
  } = (0, b.If)(t, null != c ? c : ""), x = i.useCallback(() => {
    f ? m.yT(g.ti.DISMISSED) : (m.__(g._b.TEXT, _.Ie.NORMAL, {
      applicationId: c
    }), (0, p.yw)(y.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
      application_id: c,
      location: d.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
      source: g._b.TEXT
    }))
  }, [c, f]), j = null != C && C.filter(e => e.type === u.yU.CHAT || e.type === u.yU.PRIMARY_ENTRY_POINT).length > 0, O = !o && null != a && !0 === j;
  return (i.useEffect(() => (N(O), () => {
    N(!1)
  }), [O]), O) ? (0, r.jsx)(I, {
    context: t,
    application: a,
    primaryEntryPointCommand: s,
    onOpenButtonPress: x,
    entryPointCommandButtonRef: n,
    type: l
  }) : null
}

function I(e) {
  let {
    context: t,
    application: n,
    primaryEntryPointCommand: i,
    onOpenButtonPress: l,
    entryPointCommandButtonRef: a,
    type: s
  } = e, u = (0, v.Z)({
    type: s
  }), {
    isExecutingLaunchInteraction: d,
    buttonText: p,
    hasActiveMatchingEmbeddedActivity: h,
    isEmbeddedApp: m,
    currentEmbeddedActivity: g,
    channelRecipientUserId: b,
    setIsExecutingLaunchInteraction: _,
    analyticsLocations: y
  } = (0, f.Z)({
    context: t,
    primaryEntryPointCommand: i,
    application: n,
    showAppLauncherPopup: u
  }), O = (0, f.J)({
    context: t,
    application: n,
    isEmbeddedApp: m,
    hasActiveMatchingEmbeddedActivity: h,
    currentEmbeddedActivity: g,
    onOpenButtonPress: l,
    channelRecipientUserId: b,
    setIsExecutingLaunchInteraction: _,
    analyticsLocations: y
  }), N = h ? c.zxk.Colors.RED : c.zxk.Colors.BRAND, E = (0, C.Q3)("LoadedEntryPointCommandButton");
  return (0, r.jsx)(c.zxk, {
    className: o()(j.entryPointAppCommandButton, x.Id),
    size: E ? c.zxk.Sizes.SMALL : c.zxk.Sizes.LARGE,
    color: N,
    submitting: d,
    onClick: O,
    buttonRef: a,
    children: p
  })
}