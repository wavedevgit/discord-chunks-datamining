/** Chunk was on 87791 **/
n.d(t, {
  Z: () => h
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
  p = n(388032),
  f = n(500935);
let h = i.forwardRef(function(e, t) {
  let {
    body: n,
    header: o,
    artClassName: h,
    headerClassName: m,
    contentClassName: _,
    tryItText: b,
    dismissText: g,
    onTryFeature: E,
    onClose: v,
    className: O,
    inlineArt: y = !1,
    isPremiumFeature: C = !1,
    shouldUseHorizontalButtons: x = !1,
    showGIFTag: S = !1,
    dismissibleContent: N,
    position: I = "top",
    align: P = "center",
    art: j,
    isPremiumEarlyAccess: T = !1,
    maxWidth: L = 280,
    hideDismissButton: w = !1,
    pointerClassName: A,
    dismissIconClassName: R,
    dismissIcon: k,
    onDismissIconClick: M,
    tryItButtonColor: D
  } = e, Z = x ? a.zxk.Sizes.LARGE : a.zxk.Sizes.MAX, [U, V] = i.useState(!1), {
    ref: H,
    width: B
  } = (0, s.Z)();

  function W(e) {
    (0, c.EW)(N, {
      dismissAction: e
    })
  }
  return i.useEffect(() => {
    var e, t;
    let n = (null !== (t = null === (e = H.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
    !U && n > L && V(!0)
  }, [U, B, H, L]), i.useEffect(() => {
    (0, c.kk)(N)
  }, [N]), (0, r.jsx)("div", {
    className: O,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: l()(f.content, _, {
        [f.contentNoArt]: null == h || y,
        [f.contentPremium]: C || T
      }),
      children: [null != k && (0, r.jsx)(a.P3F, {
        onClick: M,
        className: R,
        children: k
      }), (0, r.jsxs)("div", {
        className: l()(h, y ? f.artInline : f.artAbsolute),
        children: [S && (0, r.jsx)(u.Z, {
          className: f.gifTag
        }), j]
      }), (0, r.jsxs)("div", {
        className: f.body,
        children: [(0, r.jsxs)(a.X6q, {
          className: l()(C ? f.headerWithPremiumIcon : f.header, m),
          variant: "heading-md/bold",
          color: "always-white",
          children: [C && !T ? (0, r.jsx)(a.SrA, {
            size: "md",
            color: "currentColor",
            className: f.premiumIcon
          }) : null, T ? (0, r.jsxs)(a.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: f.earlyAccessBadgeContainer,
            children: [(0, r.jsx)(a.SrA, {
              size: "md",
              color: "currentColor",
              className: f.earlyAccessIcon
            }), (0, r.jsx)("span", {
              className: f.earlyAccessText,
              children: p.NW.string(p.t.phHyIS)
            })]
          }) : null, o]
        }), null == n ? null : "string" == typeof n ? (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, r.jsx)("div", {
        ref: H,
        className: U || !x ? f.buttonContainerVertical : f.buttonContainerHorizontal,
        children: null != E ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.zxk, {
            className: f.button,
            size: Z,
            onClick: e => {
              null == v || v(e), E(e), W(d.L.PRIMARY)
            },
            color: null != D ? D : C || T ? a.zxk.Colors.BRAND_INVERTED : a.zxk.Colors.WHITE,
            children: null != b ? b : p.NW.string(p.t.IHf1RE)
          }), !w && (0, r.jsx)(a.zxk, {
            className: f.button,
            size: Z,
            onClick: e => {
              null == v || v(e), W(d.L.DISMISS)
            },
            color: C || T ? a.zxk.Colors.WHITE : a.zxk.Colors.BRAND,
            look: C || T ? a.zxk.Looks.LINK : a.zxk.Looks.FILLED,
            children: null != g ? g : p.NW.string(p.t.om7Ovr)
          })]
        }) : (0, r.jsx)(a.zxk, {
          className: f.button,
          size: a.zxk.Sizes.MAX,
          onClick: e => {
            null == v || v(e), W(d.L.PRIMARY)
          },
          color: a.zxk.Colors.WHITE,
          children: p.NW.string(p.t.HU2IR0)
        })
      }), (0, r.jsx)("div", {
        className: l()(f.pointer, A, {
          [f.bottomPointer]: "top" === I,
          [f.centerLeftPointer]: "right" === I && "center" === P,
          [f.topLeftPointer]: "right" === I && "top" === P
        })
      })]
    })
  })
})