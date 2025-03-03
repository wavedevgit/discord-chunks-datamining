/** Chunk was on 51424 **/
n.d(t, {
  Z: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(481060),
  s = n(393238),
  c = n(605236),
  u = n(279745),
  d = n(921944),
  _ = n(388032),
  E = n(500935);
let p = i.forwardRef(function(e, t) {
  let {
    body: n,
    header: l,
    artClassName: p,
    headerClassName: m,
    contentClassName: f,
    tryItText: h,
    dismissText: g,
    onTryFeature: O,
    onClose: N,
    className: I,
    inlineArt: b = !1,
    isPremiumFeature: T = !1,
    shouldUseHorizontalButtons: C = !1,
    showGIFTag: S = !1,
    dismissibleContent: y,
    position: P = "top",
    align: R = "center",
    art: A,
    isPremiumEarlyAccess: v = !1,
    maxWidth: x = 280,
    hideDismissButton: D = !1,
    pointerClassName: L,
    dismissIconClassName: j,
    dismissIcon: k,
    onDismissIconClick: M
  } = e, Z = C ? a.zxk.Sizes.LARGE : a.zxk.Sizes.MAX, [U, w] = i.useState(!1), {
    ref: V,
    width: F
  } = (0, s.Z)();

  function G(e) {
    (0, c.EW)(y, {
      dismissAction: e
    })
  }
  return i.useEffect(() => {
    var e, t;
    let n = (null !== (t = null === (e = V.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
    !U && n > x && w(!0)
  }, [U, F, V, x]), i.useEffect(() => {
    (0, c.kk)(y)
  }, [y]), (0, r.jsx)("div", {
    className: I,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: o()(E.content, f, {
        [E.contentNoArt]: null == p || b,
        [E.contentPremium]: T || v
      }),
      children: [null != k && (0, r.jsx)(a.P3F, {
        onClick: M,
        className: j,
        children: k
      }), (0, r.jsxs)("div", {
        className: o()(p, b ? E.artInline : E.artAbsolute),
        children: [S && (0, r.jsx)(u.Z, {
          className: E.gifTag
        }), A]
      }), (0, r.jsxs)("div", {
        className: E.body,
        children: [(0, r.jsxs)(a.X6q, {
          className: o()(T ? E.headerWithPremiumIcon : E.header, m),
          variant: "heading-md/bold",
          color: "always-white",
          children: [T && !v ? (0, r.jsx)(a.SrA, {
            size: "md",
            color: "currentColor",
            className: E.premiumIcon
          }) : null, v ? (0, r.jsxs)(a.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: E.earlyAccessBadgeContainer,
            children: [(0, r.jsx)(a.SrA, {
              size: "md",
              color: "currentColor",
              className: E.earlyAccessIcon
            }), (0, r.jsx)("span", {
              className: E.earlyAccessText,
              children: _.NW.string(_.t.phHyIS)
            })]
          }) : null, l]
        }), null == n ? null : "string" == typeof n ? (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, r.jsx)("div", {
        ref: V,
        className: U || !C ? E.buttonContainerVertical : E.buttonContainerHorizontal,
        children: null != O ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.zxk, {
            className: E.button,
            size: Z,
            onClick: e => {
              null == N || N(e), O(e), G(d.L.PRIMARY)
            },
            color: T || v ? a.zxk.Colors.BRAND_INVERTED : a.zxk.Colors.WHITE,
            children: null != h ? h : _.NW.string(_.t.IHf1RE)
          }), !D && (0, r.jsx)(a.zxk, {
            className: E.button,
            size: Z,
            onClick: e => {
              null == N || N(e), G(d.L.DISMISS)
            },
            color: T || v ? a.zxk.Colors.WHITE : a.zxk.Colors.BRAND,
            look: T || v ? a.zxk.Looks.LINK : a.zxk.Looks.FILLED,
            children: null != g ? g : _.NW.string(_.t.om7Ovr)
          })]
        }) : (0, r.jsx)(a.zxk, {
          className: E.button,
          size: a.zxk.Sizes.MAX,
          onClick: e => {
            null == N || N(e), G(d.L.PRIMARY)
          },
          color: a.zxk.Colors.WHITE,
          children: _.NW.string(_.t.HU2IR0)
        })
      }), (0, r.jsx)("div", {
        className: o()(E.pointer, L, {
          [E.bottomPointer]: "top" === P,
          [E.centerLeftPointer]: "right" === P && "center" === R,
          [E.topLeftPointer]: "right" === P && "top" === R
        })
      })]
    })
  })
})