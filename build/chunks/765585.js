/** Chunk was on 76346 **/
r.d(t, {
  Z: () => g
}), r(388685);
var n = r(200651),
  s = r(192379),
  i = r(120356),
  l = r.n(i),
  o = r(481060),
  a = r(393238),
  c = r(605236),
  u = r(279745),
  d = r(921944),
  p = r(388032),
  f = r(418952);
let g = s.forwardRef(function(e, t) {
  let {
    body: r,
    header: i,
    artClassName: g,
    headerClassName: y,
    contentClassName: C,
    tryItText: x,
    dismissText: j,
    onTryFeature: h,
    onClose: O,
    className: _,
    inlineArt: m = !1,
    isPremiumFeature: b = !1,
    shouldUseHorizontalButtons: S = !1,
    showGIFTag: E = !1,
    dismissibleContent: v,
    position: w = "top",
    align: A = "center",
    art: L,
    isPremiumEarlyAccess: I = !1,
    maxWidth: N = 280,
    hideDismissButton: D = !1,
    pointerClassName: P,
    dismissIconClassName: T,
    dismissIcon: Z,
    onDismissIconClick: R,
    tryItButtonColor: M
  } = e, k = S ? o.zxk.Sizes.LARGE : o.zxk.Sizes.MAX, [G, U] = s.useState(!1), {
    ref: F,
    width: W
  } = (0, a.ZP)();

  function B(e) {
    (0, c.EW)(v, {
      dismissAction: e
    })
  }
  return s.useEffect(() => {
    var e, t;
    let r = (null != (t = null == (e = F.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
    !G && r > N && U(!0)
  }, [G, W, F, N]), s.useEffect(() => {
    (0, c.kk)(v)
  }, [v]), (0, n.jsx)("div", {
    className: _,
    ref: t,
    children: (0, n.jsxs)("div", {
      className: l()(f.content, C, {
        [f.contentNoArt]: null == g || m,
        [f.contentPremium]: b || I
      }),
      children: [null != Z && (0, n.jsx)(o.P3F, {
        onClick: R,
        className: T,
        children: Z
      }), (0, n.jsxs)("div", {
        className: l()(g, m ? f.artInline : f.artAbsolute),
        children: [E && (0, n.jsx)(u.Z, {
          className: f.gifTag
        }), L]
      }), (0, n.jsxs)("div", {
        className: f.body,
        children: [(0, n.jsxs)(o.X6q, {
          className: l()(b ? f.headerWithPremiumIcon : f.header, y),
          variant: "heading-md/bold",
          color: "always-white",
          children: [b && !I ? (0, n.jsx)(o.SrA, {
            size: "md",
            color: "currentColor",
            className: f.premiumIcon
          }) : null, I ? (0, n.jsxs)(o.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: f.earlyAccessBadgeContainer,
            children: [(0, n.jsx)(o.SrA, {
              size: "md",
              color: "currentColor",
              className: f.earlyAccessIcon
            }), (0, n.jsx)("span", {
              className: f.earlyAccessText,
              children: p.NW.string(p.t.phHyIS)
            })]
          }) : null, i]
        }), null == r ? null : "string" == typeof r ? (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: r
        }) : r]
      }), (0, n.jsx)("div", {
        ref: F,
        className: G || !S ? f.buttonContainerVertical : f.buttonContainerHorizontal,
        children: null != h ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(o.zxk, {
            className: f.button,
            size: k,
            onClick: e => {
              null == O || O(e), h(e), B(d.L.PRIMARY)
            },
            color: null != M ? M : b || I ? o.zxk.Colors.BRAND_INVERTED : o.zxk.Colors.WHITE,
            children: null != x ? x : p.NW.string(p.t.IHf1RE)
          }), !D && (0, n.jsx)(o.zxk, {
            className: f.button,
            size: k,
            onClick: e => {
              null == O || O(e), B(d.L.DISMISS)
            },
            color: b || I ? o.zxk.Colors.WHITE : o.zxk.Colors.BRAND,
            look: b || I ? o.zxk.Looks.LINK : o.zxk.Looks.FILLED,
            children: null != j ? j : p.NW.string(p.t.om7Ovr)
          })]
        }) : (0, n.jsx)(o.zxk, {
          className: f.button,
          size: o.zxk.Sizes.MAX,
          onClick: e => {
            null == O || O(e), B(d.L.PRIMARY)
          },
          color: o.zxk.Colors.WHITE,
          children: p.NW.string(p.t.HU2IR0)
        })
      }), (0, n.jsx)("div", {
        className: l()(f.pointer, P, {
          [f.bottomPointer]: "top" === w,
          [f.centerLeftPointer]: "right" === w && "center" === A,
          [f.topLeftPointer]: "right" === w && "top" === A
        })
      })]
    })
  })
})