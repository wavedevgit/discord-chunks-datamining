/** Chunk was on 56422 **/
n.d(t, {
  Z: () => f
}), n(388685);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  s = n.n(l),
  a = n(481060),
  o = n(393238),
  c = n(605236),
  u = n(279745),
  d = n(921944),
  g = n(388032),
  p = n(418952);
let f = i.forwardRef(function(e, t) {
  let {
    body: n,
    header: l,
    artClassName: f,
    headerClassName: m,
    contentClassName: b,
    tryItText: y,
    dismissText: h,
    onTryFeature: _,
    onClose: S,
    className: O,
    inlineArt: E = !1,
    isPremiumFeature: j = !1,
    shouldUseHorizontalButtons: I = !1,
    showGIFTag: N = !1,
    dismissibleContent: C,
    position: x = "top",
    align: A = "center",
    art: v,
    isPremiumEarlyAccess: D = !1,
    maxWidth: T = 280,
    hideDismissButton: L = !1,
    pointerClassName: w,
    dismissIconClassName: P,
    dismissIcon: Z,
    onDismissIconClick: R,
    tryItButtonColor: M
  } = e, k = I ? a.zxk.Sizes.LARGE : a.zxk.Sizes.MAX, [G, U] = i.useState(!1), {
    ref: W,
    width: z
  } = (0, o.ZP)();

  function F(e) {
    (0, c.EW)(C, {
      dismissAction: e
    })
  }
  return i.useEffect(() => {
    var e, t;
    let n = (null != (t = null == (e = W.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
    !G && n > T && U(!0)
  }, [G, z, W, T]), i.useEffect(() => {
    (0, c.kk)(C)
  }, [C]), (0, r.jsx)("div", {
    className: O,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: s()(p.content, b, {
        [p.contentNoArt]: null == f || E,
        [p.contentPremium]: j || D
      }),
      children: [null != Z && (0, r.jsx)(a.P3F, {
        onClick: R,
        className: P,
        children: Z
      }), (0, r.jsxs)("div", {
        className: s()(f, E ? p.artInline : p.artAbsolute),
        children: [N && (0, r.jsx)(u.Z, {
          className: p.gifTag
        }), v]
      }), (0, r.jsxs)("div", {
        className: p.body,
        children: [(0, r.jsxs)(a.X6q, {
          className: s()(j ? p.headerWithPremiumIcon : p.header, m),
          variant: "heading-md/bold",
          color: "always-white",
          children: [j && !D ? (0, r.jsx)(a.SrA, {
            size: "md",
            color: "currentColor",
            className: p.premiumIcon
          }) : null, D ? (0, r.jsxs)(a.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: p.earlyAccessBadgeContainer,
            children: [(0, r.jsx)(a.SrA, {
              size: "md",
              color: "currentColor",
              className: p.earlyAccessIcon
            }), (0, r.jsx)("span", {
              className: p.earlyAccessText,
              children: g.NW.string(g.t.phHyIS)
            })]
          }) : null, l]
        }), null == n ? null : "string" == typeof n ? (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, r.jsx)("div", {
        ref: W,
        className: G || !I ? p.buttonContainerVertical : p.buttonContainerHorizontal,
        children: null != _ ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.zxk, {
            className: p.button,
            size: k,
            onClick: e => {
              null == S || S(e), _(e), F(d.L.PRIMARY)
            },
            color: null != M ? M : j || D ? a.zxk.Colors.BRAND_INVERTED : a.zxk.Colors.WHITE,
            children: null != y ? y : g.NW.string(g.t.IHf1RE)
          }), !L && (0, r.jsx)(a.zxk, {
            className: p.button,
            size: k,
            onClick: e => {
              null == S || S(e), F(d.L.DISMISS)
            },
            color: j || D ? a.zxk.Colors.WHITE : a.zxk.Colors.BRAND,
            look: j || D ? a.zxk.Looks.LINK : a.zxk.Looks.FILLED,
            children: null != h ? h : g.NW.string(g.t.om7Ovr)
          })]
        }) : (0, r.jsx)(a.zxk, {
          className: p.button,
          size: a.zxk.Sizes.MAX,
          onClick: e => {
            null == S || S(e), F(d.L.PRIMARY)
          },
          color: a.zxk.Colors.WHITE,
          children: g.NW.string(g.t.HU2IR0)
        })
      }), (0, r.jsx)("div", {
        className: s()(p.pointer, w, {
          [p.bottomPointer]: "top" === x,
          [p.centerLeftPointer]: "right" === x && "center" === A,
          [p.topLeftPointer]: "right" === x && "top" === A
        })
      })]
    })
  })
})