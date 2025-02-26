/** Chunk was on 63061 **/
n.d(t, {
  Z: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  s = n(481060),
  a = n(393238),
  c = n(605236),
  u = n(279745),
  d = n(921944),
  _ = n(388032),
  E = n(788212);
let p = i.forwardRef(function(e, t) {
  let {
    body: n,
    header: o,
    artClassName: p,
    headerClassName: m,
    contentClassName: h,
    tryItText: f,
    dismissText: g,
    onTryFeature: O,
    onClose: N,
    className: I,
    inlineArt: b = !1,
    isPremiumFeature: T = !1,
    shouldUseHorizontalButtons: C = !1,
    showGIFTag: S = !1,
    dismissibleContent: y,
    position: R = "top",
    align: P = "center",
    art: A,
    isPremiumEarlyAccess: v = !1,
    maxWidth: D = 280,
    hideDismissButton: L = !1,
    pointerClassName: x,
    dismissIconClassName: k,
    dismissIcon: M,
    onDismissIconClick: j
  } = e, Z = C ? s.zxk.Sizes.LARGE : s.zxk.Sizes.MAX, [U, w] = i.useState(!1), {
    ref: V,
    width: G
  } = (0, a.Z)();

  function F(e) {
    (0, c.EW)(y, {
      dismissAction: e
    })
  }
  return i.useEffect(() => {
    var e, t;
    let n = (null !== (t = null === (e = V.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
    !U && n > D && w(!0)
  }, [U, G, V, D]), i.useEffect(() => {
    (0, c.kk)(y)
  }, [y]), (0, r.jsx)("div", {
    className: I,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: l()(E.content, h, {
        [E.contentNoArt]: null == p || b,
        [E.contentPremium]: T || v
      }),
      children: [null != M && (0, r.jsx)(s.P3F, {
        onClick: j,
        className: k,
        children: M
      }), (0, r.jsxs)("div", {
        className: l()(p, b ? E.artInline : E.artAbsolute),
        children: [S && (0, r.jsx)(u.Z, {
          className: E.gifTag
        }), A]
      }), (0, r.jsxs)("div", {
        className: E.body,
        children: [(0, r.jsxs)(s.X6q, {
          className: l()(T ? E.headerWithPremiumIcon : E.header, m),
          variant: "heading-md/bold",
          color: "always-white",
          children: [T && !v ? (0, r.jsx)(s.SrA, {
            size: "md",
            color: "currentColor",
            className: E.premiumIcon
          }) : null, v ? (0, r.jsxs)(s.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: E.earlyAccessBadgeContainer,
            children: [(0, r.jsx)(s.SrA, {
              size: "md",
              color: "currentColor",
              className: E.earlyAccessIcon
            }), (0, r.jsx)("span", {
              className: E.earlyAccessText,
              children: _.NW.string(_.t.phHyIS)
            })]
          }) : null, o]
        }), null == n ? null : "string" == typeof n ? (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, r.jsx)("div", {
        ref: V,
        className: U || !C ? E.buttonContainerVertical : E.buttonContainerHorizontal,
        children: null != O ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.zxk, {
            className: E.button,
            size: Z,
            onClick: e => {
              null == N || N(e), O(e), F(d.L.PRIMARY)
            },
            color: T || v ? s.zxk.Colors.BRAND_INVERTED : s.zxk.Colors.WHITE,
            children: null != f ? f : _.NW.string(_.t.IHf1RE)
          }), !L && (0, r.jsx)(s.zxk, {
            className: E.button,
            size: Z,
            onClick: e => {
              null == N || N(e), F(d.L.DISMISS)
            },
            color: T || v ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
            look: T || v ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED,
            children: null != g ? g : _.NW.string(_.t.om7Ovr)
          })]
        }) : (0, r.jsx)(s.zxk, {
          className: E.button,
          size: s.zxk.Sizes.MAX,
          onClick: e => {
            null == N || N(e), F(d.L.PRIMARY)
          },
          color: s.zxk.Colors.WHITE,
          children: _.NW.string(_.t.HU2IR0)
        })
      }), (0, r.jsx)("div", {
        className: l()(E.pointer, x, {
          [E.bottomPointer]: "top" === R,
          [E.centerLeftPointer]: "right" === R && "center" === P,
          [E.topLeftPointer]: "right" === R && "top" === P
        })
      })]
    })
  })
})