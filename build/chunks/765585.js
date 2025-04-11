/** Chunk was on 94400 **/
n.d(t, {
  Z: () => p
}), n(388685);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  a = n.n(l),
  s = n(481060),
  o = n(393238),
  u = n(605236),
  c = n(279745),
  d = n(921944),
  _ = n(388032),
  E = n(418952);
let p = i.forwardRef(function(e, t) {
  let {
    body: n,
    header: l,
    artClassName: p,
    headerClassName: I,
    contentClassName: f,
    tryItText: S,
    dismissText: g,
    onTryFeature: y,
    onClose: h,
    className: O,
    inlineArt: N = !1,
    isPremiumFeature: T = !1,
    shouldUseHorizontalButtons: A = !1,
    showGIFTag: m = !1,
    dismissibleContent: b,
    position: C = "top",
    align: L = "center",
    art: D,
    isPremiumEarlyAccess: R = !1,
    maxWidth: U = 280,
    hideDismissButton: j = !1,
    pointerClassName: P,
    dismissIconClassName: v,
    dismissIcon: M,
    onDismissIconClick: w,
    tryItButtonColor: Z
  } = e, G = A ? s.zxk.Sizes.LARGE : s.zxk.Sizes.MAX, [x, W] = i.useState(!1), {
    ref: k,
    width: F
  } = (0, o.Z)();

  function J(e) {
    (0, u.EW)(b, {
      dismissAction: e
    })
  }
  return i.useEffect(() => {
    var e, t;
    let n = (null != (t = null == (e = k.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
    !x && n > U && W(!0)
  }, [x, F, k, U]), i.useEffect(() => {
    (0, u.kk)(b)
  }, [b]), (0, r.jsx)("div", {
    className: O,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: a()(E.content, f, {
        [E.contentNoArt]: null == p || N,
        [E.contentPremium]: T || R
      }),
      children: [null != M && (0, r.jsx)(s.P3F, {
        onClick: w,
        className: v,
        children: M
      }), (0, r.jsxs)("div", {
        className: a()(p, N ? E.artInline : E.artAbsolute),
        children: [m && (0, r.jsx)(c.Z, {
          className: E.gifTag
        }), D]
      }), (0, r.jsxs)("div", {
        className: E.body,
        children: [(0, r.jsxs)(s.X6q, {
          className: a()(T ? E.headerWithPremiumIcon : E.header, I),
          variant: "heading-md/bold",
          color: "always-white",
          children: [T && !R ? (0, r.jsx)(s.SrA, {
            size: "md",
            color: "currentColor",
            className: E.premiumIcon
          }) : null, R ? (0, r.jsxs)(s.Text, {
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
        ref: k,
        className: x || !A ? E.buttonContainerVertical : E.buttonContainerHorizontal,
        children: null != y ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.zxk, {
            className: E.button,
            size: G,
            onClick: e => {
              null == h || h(e), y(e), J(d.L.PRIMARY)
            },
            color: null != Z ? Z : T || R ? s.zxk.Colors.BRAND_INVERTED : s.zxk.Colors.WHITE,
            children: null != S ? S : _.NW.string(_.t.IHf1RE)
          }), !j && (0, r.jsx)(s.zxk, {
            className: E.button,
            size: G,
            onClick: e => {
              null == h || h(e), J(d.L.DISMISS)
            },
            color: T || R ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
            look: T || R ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED,
            children: null != g ? g : _.NW.string(_.t.om7Ovr)
          })]
        }) : (0, r.jsx)(s.zxk, {
          className: E.button,
          size: s.zxk.Sizes.MAX,
          onClick: e => {
            null == h || h(e), J(d.L.PRIMARY)
          },
          color: s.zxk.Colors.WHITE,
          children: _.NW.string(_.t.HU2IR0)
        })
      }), (0, r.jsx)("div", {
        className: a()(E.pointer, P, {
          [E.bottomPointer]: "top" === C,
          [E.centerLeftPointer]: "right" === C && "center" === L,
          [E.topLeftPointer]: "right" === C && "top" === L
        })
      })]
    })
  })
})