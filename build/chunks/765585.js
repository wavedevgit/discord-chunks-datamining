/** Chunk was on 98650 **/
n.d(t, {
  Z: () => E
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(481060),
  s = n(393238),
  c = n(605236),
  u = n(279745),
  d = n(921944),
  _ = n(388032),
  p = n(500935);
let E = i.forwardRef(function(e, t) {
  let {
    body: n,
    header: o,
    artClassName: E,
    headerClassName: f,
    contentClassName: h,
    tryItText: m,
    dismissText: b,
    onTryFeature: O,
    onClose: g,
    className: N,
    inlineArt: I = !1,
    isPremiumFeature: T = !1,
    shouldUseHorizontalButtons: C = !1,
    showGIFTag: S = !1,
    dismissibleContent: y,
    position: v = "top",
    align: P = "center",
    art: R,
    isPremiumEarlyAccess: A = !1,
    maxWidth: x = 280,
    hideDismissButton: j = !1,
    pointerClassName: D,
    dismissIconClassName: L,
    dismissIcon: k,
    onDismissIconClick: M,
    tryItButtonColor: Z
  } = e, U = C ? a.zxk.Sizes.LARGE : a.zxk.Sizes.MAX, [w, V] = i.useState(!1), {
    ref: F,
    width: G
  } = (0, s.Z)();

  function W(e) {
    (0, c.EW)(y, {
      dismissAction: e
    })
  }
  return i.useEffect(() => {
    var e, t;
    let n = (null !== (t = null === (e = F.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
    !w && n > x && V(!0)
  }, [w, G, F, x]), i.useEffect(() => {
    (0, c.kk)(y)
  }, [y]), (0, r.jsx)("div", {
    className: N,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: l()(p.content, h, {
        [p.contentNoArt]: null == E || I,
        [p.contentPremium]: T || A
      }),
      children: [null != k && (0, r.jsx)(a.P3F, {
        onClick: M,
        className: L,
        children: k
      }), (0, r.jsxs)("div", {
        className: l()(E, I ? p.artInline : p.artAbsolute),
        children: [S && (0, r.jsx)(u.Z, {
          className: p.gifTag
        }), R]
      }), (0, r.jsxs)("div", {
        className: p.body,
        children: [(0, r.jsxs)(a.X6q, {
          className: l()(T ? p.headerWithPremiumIcon : p.header, f),
          variant: "heading-md/bold",
          color: "always-white",
          children: [T && !A ? (0, r.jsx)(a.SrA, {
            size: "md",
            color: "currentColor",
            className: p.premiumIcon
          }) : null, A ? (0, r.jsxs)(a.Text, {
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
          }) : null, o]
        }), null == n ? null : "string" == typeof n ? (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, r.jsx)("div", {
        ref: F,
        className: w || !C ? p.buttonContainerVertical : p.buttonContainerHorizontal,
        children: null != O ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.zxk, {
            className: p.button,
            size: U,
            onClick: e => {
              null == g || g(e), O(e), W(d.L.PRIMARY)
            },
            color: null != Z ? Z : T || A ? a.zxk.Colors.BRAND_INVERTED : a.zxk.Colors.WHITE,
            children: null != m ? m : _.NW.string(_.t.IHf1RE)
          }), !j && (0, r.jsx)(a.zxk, {
            className: p.button,
            size: U,
            onClick: e => {
              null == g || g(e), W(d.L.DISMISS)
            },
            color: T || A ? a.zxk.Colors.WHITE : a.zxk.Colors.BRAND,
            look: T || A ? a.zxk.Looks.LINK : a.zxk.Looks.FILLED,
            children: null != b ? b : _.NW.string(_.t.om7Ovr)
          })]
        }) : (0, r.jsx)(a.zxk, {
          className: p.button,
          size: a.zxk.Sizes.MAX,
          onClick: e => {
            null == g || g(e), W(d.L.PRIMARY)
          },
          color: a.zxk.Colors.WHITE,
          children: _.NW.string(_.t.HU2IR0)
        })
      }), (0, r.jsx)("div", {
        className: l()(p.pointer, D, {
          [p.bottomPointer]: "top" === v,
          [p.centerLeftPointer]: "right" === v && "center" === P,
          [p.topLeftPointer]: "right" === v && "top" === P
        })
      })]
    })
  })
})