/** Chunk was on 35755 **/
n.d(t, {
  Z: () => E
}), n(47120);
var i = n(200651),
  l = n(192379),
  r = n(442837),
  o = n(218061),
  a = n(481060),
  s = n(361213),
  c = n(778569),
  u = n(213459),
  d = n(835473),
  p = n(541099),
  m = n(827498),
  f = n(783097),
  h = n(753972),
  v = n(387658),
  y = n(536650),
  b = n(675993),
  N = n(689079),
  g = n(388032),
  x = n(165003),
  j = n(413097);

function E(e) {
  var t;
  let {
    context: n,
    application: s,
    sectionName: c
  } = e, E = "channel" === n.type ? n.channel : void 0, C = (0, r.e7)([p.Z], () => p.Z.entrypoint()), O = null !== (t = (0, d.q)(s.id === N.bi.BUILT_IN ? null : s.id)) && void 0 !== t ? t : s, A = (0, f.ye)(O) ? P : b.Z, I = l.useRef(null), [_, S] = l.useState(!1), {
    iconURL: T,
    name: L
  } = l.useMemo(() => (0, f.sl)(O, {
    fakeAppIconURL: j,
    size: 84
  }), [O]), Z = (0, u.PL)(!0, !0), R = (0, u.LD)(null == E ? void 0 : E.guild_id, !0), w = l.useMemo(() => (0, u.If)(n, O.id), [Z, R, n, O.id]), M = !w.isGuildInstalled && !w.isUserInstalled;
  return l.useEffect(() => {
    M && u.ZP.queryInstallOnDemandApp(O.id, null == E ? void 0 : E.id)
  }, [O.id, null == E ? void 0 : E.id, M]), (0, i.jsxs)(a.u2D, {
    className: x.container,
    fade: !0,
    ref: I,
    role: "region",
    "aria-label": g.NW.formatToPlainString(g.t["4OP4Ul"], {
      applicationName: L
    }),
    children: [(0, i.jsx)(y.Z, {
      application: O,
      context: n,
      name: L,
      iconURL: T,
      scrollerRef: I,
      sectionName: c
    }), null != T && (0, i.jsx)(h.Z, {
      src: T,
      className: x.appIcon
    }), (0, i.jsx)(o.Z, {
      size: 54
    }), (0, i.jsx)(A, {
      context: n,
      application: O,
      sectionName: c,
      hasCommands: _
    }), C === m._b.TEXT ? (0, i.jsx)(v.Z, {
      context: n,
      application: O,
      sectionName: c,
      installOnDemand: M,
      setHasCommands: S
    }) : null]
  })
}

function P(e) {
  let {
    context: t,
    application: n,
    sectionName: l,
    hasCommands: r
  } = e, o = (0, c.Z)({
    applicationId: n.id,
    size: 2048,
    names: ["embedded_cover"]
  }), a = (0, f.yJ)(n), u = null != a && null != a.activity_preview_video_asset_id ? (0, s.Z)(n.id, a.activity_preview_video_asset_id) : null;
  return (0, i.jsx)(b.Z, {
    context: t,
    application: n,
    imageCoverUrl: o.url,
    videoUrl: u,
    sectionName: l,
    hasCommands: r
  })
}