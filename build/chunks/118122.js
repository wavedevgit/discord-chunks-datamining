/** Chunk was on 94898 **/
n.d(t, {
  Z: () => x
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(481060),
  a = n(239091),
  s = n(906732),
  c = n(560067),
  u = n(540059),
  d = n(451603),
  p = n(885714),
  h = n(155409),
  f = n(430824),
  g = n(594174),
  m = n(40153),
  b = n(603592),
  v = n(981631),
  y = n(675999),
  _ = n(388032),
  O = n(384185);
let j = {
  origin: {
    x: -16,
    y: 0
  },
  targetWidth: 48,
  targetHeight: 48,
  offset: {
    x: 0,
    y: 0
  }
};

function C(e) {
  (0, a.jW)(e, async () => {
    let {
      default: e
    } = await n.e("9606").then(n.bind(n, 987578));
    return t => (0, r.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({}, t))
  })
}

function x(e) {
  let {
    disableTooltip: t,
    lastTargetNode: n
  } = e, a = (0, l.e7)([f.Z], () => f.Z.getGuilds()), x = i.useMemo(() => Object.values(a), [a]), P = (0, l.e7)([g.default], () => g.default.getCurrentUser()), S = i.useMemo(() => x.some(e => e.isOwner(P)), [x, P]), I = (0, o.s9z)(e => (0, o.DEQ)(e, y.PU)), {
    analyticsLocations: N
  } = (0, s.ZP)(), Z = (0, u.Q3)("CreateJoinGuildButton"), w = (0, r.jsx)(b.Z, {
    showPill: !1,
    id: "create-join-button",
    onClick: () => {
      (0, d.yU)() ? (0, p.Z)({
        analyticsSource: {
          page: v.Sbl.CREATE_JOIN_GUILD_MODAL
        },
        analyticsLocation: {
          page: v.Sbl.CREATE_JOIN_GUILD_MODAL,
          section: v.jXE.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: N
      }) : c.Z.openCreateGuildModal({
        location: "Guild List"
      })
    },
    selected: I,
    onContextMenu: C,
    tooltip: _.NW.string(_.t.l5WIbW),
    icon: Z ? o.oFk : o.BRu
  });
  return t ? w : (0, r.jsx)("div", {
    className: O.tutorialContainer,
    children: (0, r.jsxs)(h.Z, {
      tutorialId: S ? "create-more-servers" : "create-first-server",
      inlineSpecs: j,
      position: "right",
      children: [w, null != n && (0, r.jsx)(m.ZP, {
        name: _.NW.string(_.t["45xjMz"]),
        targetNode: n,
        below: !0,
        noCombine: !0
      })]
    })
  })
}