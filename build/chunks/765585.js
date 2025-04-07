/** Chunk was on 83957 **/
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
    headerClassName: f,
    contentClassName: I,
    tryItText: g,
    dismissText: h,
    onTryFeature: S,
    onClose: y,
    className: O,
    inlineArt: N = !1,
    isPremiumFeature: T = !1,
    shouldUseHorizontalButtons: m = !1,
    showGIFTag: A = !1,
    dismissibleContent: b,
    position: C = "top",
    align: D = "center",
    art: L,
    isPremiumEarlyAccess: R = !1,
    maxWidth: U = 280,
    hideDismissButton: j = !1,
    pointerClassName: v,
    dismissIconClassName: P,
    dismissIcon: Z,
    onDismissIconClick: w,
    tryItButtonColor: x
  } = e, M = m ? s.zxk.Sizes.LARGE : s.zxk.Sizes.MAX, [G, W] = i.useState(!1), {
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
    !G && n > U && W(!0)
  }, [G, F, k, U]), i.useEffect(() => {
    (0, u.kk)(b)
  }, [b]), (0, r.jsx)("div", {
    className: O,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: a()(E.content, I, {
        [E.contentNoArt]: null == p || N,
        [E.contentPremium]: T || R
      }),
      children: [null != Z && (0, r.jsx)(s.P3F, {
        onClick: w,
        className: P,
        children: Z
      }), (0, r.jsxs)("div", {
        className: a()(p, N ? E.artInline : E.artAbsolute),
        children: [A && (0, r.jsx)(c.Z, {
          className: E.gifTag
        }), L]
      }), (0, r.jsxs)("div", {
        className: E.body,
        children: [(0, r.jsxs)(s.X6q, {
          className: a()(T ? E.headerWithPremiumIcon : E.header, f),
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
        className: G || !m ? E.buttonContainerVertical : E.buttonContainerHorizontal,
        children: null != S ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.zxk, {
            className: E.button,
            size: M,
            onClick: e => {
              null == y || y(e), S(e), J(d.L.PRIMARY)
            },
            color: null != x ? x : T || R ? s.zxk.Colors.BRAND_INVERTED : s.zxk.Colors.WHITE,
            children: null != g ? g : _.NW.string(_.t.IHf1RE)
          }), !j && (0, r.jsx)(s.zxk, {
            className: E.button,
            size: M,
            onClick: e => {
              null == y || y(e), J(d.L.DISMISS)
            },
            color: T || R ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
            look: T || R ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED,
            children: null != h ? h : _.NW.string(_.t.om7Ovr)
          })]
        }) : (0, r.jsx)(s.zxk, {
          className: E.button,
          size: s.zxk.Sizes.MAX,
          onClick: e => {
            null == y || y(e), J(d.L.PRIMARY)
          },
          color: s.zxk.Colors.WHITE,
          children: _.NW.string(_.t.HU2IR0)
        })
      }), (0, r.jsx)("div", {
        className: a()(E.pointer, v, {
          [E.bottomPointer]: "top" === C,
          [E.centerLeftPointer]: "right" === C && "center" === D,
          [E.topLeftPointer]: "right" === C && "top" === D
        })
      })]
    })
  })
})