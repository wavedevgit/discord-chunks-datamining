/** Chunk was on 35755 **/
n.d(t, {
  Z: () => C
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
  h = n(783097),
  f = n(753972),
  v = n(387658),
  N = n(536650),
  x = n(675993),
  y = n(689079),
  b = n(388032),
  E = n(165003),
  j = n(413097);

function C(e) {
  var t;
  let {
    context: n,
    application: s,
    sectionName: c
  } = e, C = "channel" === n.type ? n.channel : void 0, P = (0, r.e7)([p.Z], () => p.Z.entrypoint()), A = null !== (t = (0, d.q)(s.id === y.bi.BUILT_IN ? null : s.id)) && void 0 !== t ? t : s, I = (0, h.ye)(A) ? g : x.Z, _ = l.useRef(null), [O, S] = l.useState(!1), {
    iconURL: T,
    name: L
  } = l.useMemo(() => (0, h.sl)(A, {
    fakeAppIconURL: j,
    size: 84
  }), [A]), R = (0, u.PL)(!0, !0), Z = (0, u.LD)(null == C ? void 0 : C.guild_id, !0), k = l.useMemo(() => (0, u.If)(n, A.id), [R, Z, n, A.id]), M = !k.isGuildInstalled && !k.isUserInstalled;
  return l.useEffect(() => {
    M && u.ZP.queryInstallOnDemandApp(A.id, null == C ? void 0 : C.id)
  }, [A.id, null == C ? void 0 : C.id, M]), (0, i.jsxs)(a.u2D, {
    className: E.container,
    fade: !0,
    ref: _,
    role: "region",
    "aria-label": b.NW.formatToPlainString(b.t["4OP4Ul"], {
      applicationName: L
    }),
    children: [(0, i.jsx)(N.Z, {
      application: A,
      context: n,
      name: L,
      iconURL: T,
      scrollerRef: _,
      sectionName: c
    }), null != T && (0, i.jsx)(f.Z, {
      src: T,
      className: E.appIcon
    }), (0, i.jsx)(o.Z, {
      size: 54
    }), (0, i.jsx)(I, {
      context: n,
      application: A,
      sectionName: c,
      hasCommands: O
    }), P === m._b.TEXT ? (0, i.jsx)(v.Z, {
      context: n,
      application: A,
      sectionName: c,
      installOnDemand: M,
      setHasCommands: S
    }) : null]
  })
}

function g(e) {
  let {
    context: t,
    application: n,
    sectionName: l,
    hasCommands: r
  } = e, o = (0, c.Z)({
    applicationId: n.id,
    size: 2048,
    names: ["embedded_cover"]
  }), a = (0, h.yJ)(n), u = null != a && null != a.activity_preview_video_asset_id ? (0, s.Z)(n.id, a.activity_preview_video_asset_id) : null;
  return (0, i.jsx)(x.Z, {
    context: t,
    application: n,
    imageCoverUrl: o.url,
    videoUrl: u,
    sectionName: l,
    hasCommands: r
  })
}