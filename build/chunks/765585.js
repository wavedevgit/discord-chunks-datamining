/** Chunk was on 49750 **/
n.d(t, {
  Z: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  s = n(481060),
  a = n(393238),
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
    contentClassName: h,
    tryItText: f,
    dismissText: g,
    onTryFeature: N,
    onClose: O,
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
    dismissIconClassName: k,
    dismissIcon: j,
    onDismissIconClick: M
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
    !U && n > x && w(!0)
  }, [U, G, V, x]), i.useEffect(() => {
    (0, c.kk)(y)
  }, [y]), (0, r.jsx)("div", {
    className: I,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: o()(E.content, h, {
        [E.contentNoArt]: null == p || b,
        [E.contentPremium]: T || v
      }),
      children: [null != j && (0, r.jsx)(s.P3F, {
        onClick: M,
        className: k,
        children: j
      }), (0, r.jsxs)("div", {
        className: o()(p, b ? E.artInline : E.artAbsolute),
        children: [S && (0, r.jsx)(u.Z, {
          className: E.gifTag
        }), A]
      }), (0, r.jsxs)("div", {
        className: E.body,
        children: [(0, r.jsxs)(s.X6q, {
          className: o()(T ? E.headerWithPremiumIcon : E.header, m),
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
          }) : null, l]
        }), null == n ? null : "string" == typeof n ? (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, r.jsx)("div", {
        ref: V,
        className: U || !C ? E.buttonContainerVertical : E.buttonContainerHorizontal,
        children: null != N ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.zxk, {
            className: E.button,
            size: Z,
            onClick: e => {
              null == O || O(e), N(e), F(d.L.PRIMARY)
            },
            color: T || v ? s.zxk.Colors.BRAND_INVERTED : s.zxk.Colors.WHITE,
            children: null != f ? f : _.NW.string(_.t.IHf1RE)
          }), !D && (0, r.jsx)(s.zxk, {
            className: E.button,
            size: Z,
            onClick: e => {
              null == O || O(e), F(d.L.DISMISS)
            },
            color: T || v ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
            look: T || v ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED,
            children: null != g ? g : _.NW.string(_.t.om7Ovr)
          })]
        }) : (0, r.jsx)(s.zxk, {
          className: E.button,
          size: s.zxk.Sizes.MAX,
          onClick: e => {
            null == O || O(e), F(d.L.PRIMARY)
          },
          color: s.zxk.Colors.WHITE,
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