/** Chunk was on 61697 **/
n.d(e, {
  Z: () => E
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
  p = n(500935);
let E = i.forwardRef(function(t, e) {
  let {
    body: n,
    header: l,
    artClassName: E,
    headerClassName: g,
    contentClassName: y,
    tryItText: f,
    dismissText: h,
    onTryFeature: S,
    onClose: I,
    className: m,
    inlineArt: O = !1,
    isPremiumFeature: N = !1,
    shouldUseHorizontalButtons: b = !1,
    showGIFTag: T = !1,
    dismissibleContent: D,
    position: R = "top",
    align: j = "center",
    art: U,
    isPremiumEarlyAccess: L = !1,
    maxWidth: v = 280,
    hideDismissButton: A = !1,
    pointerClassName: C,
    dismissIconClassName: w,
    dismissIcon: x,
    onDismissIconClick: Z,
    tryItButtonColor: G
  } = t, P = b ? a.zxk.Sizes.LARGE : a.zxk.Sizes.MAX, [M, W] = i.useState(!1), {
    ref: k,
    width: J
  } = (0, s.Z)();

  function F(t) {
    (0, c.EW)(D, {
      dismissAction: t
    })
  }
  return i.useEffect(() => {
    var t, e;
    let n = (null !== (e = null === (t = k.current) || void 0 === t ? void 0 : t.scrollWidth) && void 0 !== e ? e : 0) + 64;
    !M && n > v && W(!0)
  }, [M, J, k, v]), i.useEffect(() => {
    (0, c.kk)(D)
  }, [D]), (0, r.jsx)("div", {
    className: m,
    ref: e,
    children: (0, r.jsxs)("div", {
      className: o()(p.content, y, {
        [p.contentNoArt]: null == E || O,
        [p.contentPremium]: N || L
      }),
      children: [null != x && (0, r.jsx)(a.P3F, {
        onClick: Z,
        className: w,
        children: x
      }), (0, r.jsxs)("div", {
        className: o()(E, O ? p.artInline : p.artAbsolute),
        children: [T && (0, r.jsx)(u.Z, {
          className: p.gifTag
        }), U]
      }), (0, r.jsxs)("div", {
        className: p.body,
        children: [(0, r.jsxs)(a.X6q, {
          className: o()(N ? p.headerWithPremiumIcon : p.header, g),
          variant: "heading-md/bold",
          color: "always-white",
          children: [N && !L ? (0, r.jsx)(a.SrA, {
            size: "md",
            color: "currentColor",
            className: p.premiumIcon
          }) : null, L ? (0, r.jsxs)(a.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: p.earlyAccessBadgeContainer,
            children: [(0, r.jsx)(a.SrA, {
              size: "md",
              color: "currentColor",
              className: p.earlyAccessIcon
            }), (0, r.jsx)("span", {
              className: p.earlyAccessText,
              children: _.NW.string(_.t.phHyIS)
            })]
          }) : null, l]
        }), null == n ? null : "string" == typeof n ? (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, r.jsx)("div", {
        ref: k,
        className: M || !b ? p.buttonContainerVertical : p.buttonContainerHorizontal,
        children: null != S ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.zxk, {
            className: p.button,
            size: P,
            onClick: t => {
              null == I || I(t), S(t), F(d.L.PRIMARY)
            },
            color: null != G ? G : N || L ? a.zxk.Colors.BRAND_INVERTED : a.zxk.Colors.WHITE,
            children: null != f ? f : _.NW.string(_.t.IHf1RE)
          }), !A && (0, r.jsx)(a.zxk, {
            className: p.button,
            size: P,
            onClick: t => {
              null == I || I(t), F(d.L.DISMISS)
            },
            color: N || L ? a.zxk.Colors.WHITE : a.zxk.Colors.BRAND,
            look: N || L ? a.zxk.Looks.LINK : a.zxk.Looks.FILLED,
            children: null != h ? h : _.NW.string(_.t.om7Ovr)
          })]
        }) : (0, r.jsx)(a.zxk, {
          className: p.button,
          size: a.zxk.Sizes.MAX,
          onClick: t => {
            null == I || I(t), F(d.L.PRIMARY)
          },
          color: a.zxk.Colors.WHITE,
          children: _.NW.string(_.t.HU2IR0)
        })
      }), (0, r.jsx)("div", {
        className: o()(p.pointer, C, {
          [p.bottomPointer]: "top" === R,
          [p.centerLeftPointer]: "right" === R && "center" === j,
          [p.topLeftPointer]: "right" === R && "top" === j
        })
      })]
    })
  })
})