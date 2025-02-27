/** Chunk was on 26593 **/
n.d(t, {
  Z: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(481060),
  s = n(393238),
  u = n(605236),
  c = n(279745),
  d = n(921944),
  f = n(388032),
  g = n(788212);
let p = i.forwardRef(function(e, t) {
  let {
    body: n,
    header: l,
    artClassName: p,
    headerClassName: m,
    contentClassName: y,
    tryItText: h,
    dismissText: b,
    onTryFeature: _,
    onClose: S,
    className: E,
    inlineArt: I = !1,
    isPremiumFeature: O = !1,
    shouldUseHorizontalButtons: j = !1,
    showGIFTag: v = !1,
    dismissibleContent: N,
    position: x = "top",
    align: C = "center",
    art: A,
    isPremiumEarlyAccess: D = !1,
    maxWidth: T = 280,
    hideDismissButton: L = !1,
    pointerClassName: w,
    dismissIconClassName: P,
    dismissIcon: Z,
    onDismissIconClick: R
  } = e, k = j ? a.zxk.Sizes.LARGE : a.zxk.Sizes.MAX, [M, W] = i.useState(!1), {
    ref: U,
    width: G
  } = (0, s.Z)();

  function z(e) {
    (0, u.EW)(N, {
      dismissAction: e
    })
  }
  return i.useEffect(() => {
    var e, t;
    let n = (null !== (t = null === (e = U.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
    !M && n > T && W(!0)
  }, [M, G, U, T]), i.useEffect(() => {
    (0, u.kk)(N)
  }, [N]), (0, r.jsx)("div", {
    className: E,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: o()(g.content, y, {
        [g.contentNoArt]: null == p || I,
        [g.contentPremium]: O || D
      }),
      children: [null != Z && (0, r.jsx)(a.P3F, {
        onClick: R,
        className: P,
        children: Z
      }), (0, r.jsxs)("div", {
        className: o()(p, I ? g.artInline : g.artAbsolute),
        children: [v && (0, r.jsx)(c.Z, {
          className: g.gifTag
        }), A]
      }), (0, r.jsxs)("div", {
        className: g.body,
        children: [(0, r.jsxs)(a.X6q, {
          className: o()(O ? g.headerWithPremiumIcon : g.header, m),
          variant: "heading-md/bold",
          color: "always-white",
          children: [O && !D ? (0, r.jsx)(a.SrA, {
            size: "md",
            color: "currentColor",
            className: g.premiumIcon
          }) : null, D ? (0, r.jsxs)(a.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: g.earlyAccessBadgeContainer,
            children: [(0, r.jsx)(a.SrA, {
              size: "md",
              color: "currentColor",
              className: g.earlyAccessIcon
            }), (0, r.jsx)("span", {
              className: g.earlyAccessText,
              children: f.NW.string(f.t.phHyIS)
            })]
          }) : null, l]
        }), null == n ? null : "string" == typeof n ? (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, r.jsx)("div", {
        ref: U,
        className: M || !j ? g.buttonContainerVertical : g.buttonContainerHorizontal,
        children: null != _ ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.zxk, {
            className: g.button,
            size: k,
            onClick: e => {
              null == S || S(e), _(e), z(d.L.PRIMARY)
            },
            color: O || D ? a.zxk.Colors.BRAND_INVERTED : a.zxk.Colors.WHITE,
            children: null != h ? h : f.NW.string(f.t.IHf1RE)
          }), !L && (0, r.jsx)(a.zxk, {
            className: g.button,
            size: k,
            onClick: e => {
              null == S || S(e), z(d.L.DISMISS)
            },
            color: O || D ? a.zxk.Colors.WHITE : a.zxk.Colors.BRAND,
            look: O || D ? a.zxk.Looks.LINK : a.zxk.Looks.FILLED,
            children: null != b ? b : f.NW.string(f.t.om7Ovr)
          })]
        }) : (0, r.jsx)(a.zxk, {
          className: g.button,
          size: a.zxk.Sizes.MAX,
          onClick: e => {
            null == S || S(e), z(d.L.PRIMARY)
          },
          color: a.zxk.Colors.WHITE,
          children: f.NW.string(f.t.HU2IR0)
        })
      }), (0, r.jsx)("div", {
        className: o()(g.pointer, w, {
          [g.bottomPointer]: "top" === x,
          [g.centerLeftPointer]: "right" === x && "center" === C,
          [g.topLeftPointer]: "right" === x && "top" === C
        })
      })]
    })
  })
})