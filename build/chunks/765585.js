/** Chunk was on 47347 **/
n.d(t, {
  Z: () => p
}), n(388685);
var r = n(200651),
  l = n(192379),
  i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(393238),
  u = n(605236),
  c = n(279745),
  d = n(921944),
  f = n(388032),
  g = n(418952);
let p = l.forwardRef(function(e, t) {
  let {
    body: n,
    header: i,
    artClassName: p,
    headerClassName: m,
    contentClassName: E,
    tryItText: y,
    dismissText: h,
    onTryFeature: _,
    onClose: b,
    className: O,
    inlineArt: S = !1,
    isPremiumFeature: I = !1,
    shouldUseHorizontalButtons: N = !1,
    showGIFTag: A = !1,
    dismissibleContent: C,
    position: j = "top",
    align: T = "center",
    art: L,
    isPremiumEarlyAccess: v = !1,
    maxWidth: D = 280,
    hideDismissButton: P = !1,
    pointerClassName: x,
    dismissIconClassName: w,
    dismissIcon: Z,
    onDismissIconClick: R,
    tryItButtonColor: M
  } = e, U = N ? s.zxk.Sizes.LARGE : s.zxk.Sizes.MAX, [k, G] = l.useState(!1), {
    ref: W,
    width: F
  } = (0, o.Z)();

  function z(e) {
    (0, u.EW)(C, {
      dismissAction: e
    })
  }
  return l.useEffect(() => {
    var e, t;
    let n = (null != (t = null == (e = W.current) ? void 0 : e.scrollWidth) ? t : 0) + 64;
    !k && n > D && G(!0)
  }, [k, F, W, D]), l.useEffect(() => {
    (0, u.kk)(C)
  }, [C]), (0, r.jsx)("div", {
    className: O,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: a()(g.content, E, {
        [g.contentNoArt]: null == p || S,
        [g.contentPremium]: I || v
      }),
      children: [null != Z && (0, r.jsx)(s.P3F, {
        onClick: R,
        className: w,
        children: Z
      }), (0, r.jsxs)("div", {
        className: a()(p, S ? g.artInline : g.artAbsolute),
        children: [A && (0, r.jsx)(c.Z, {
          className: g.gifTag
        }), L]
      }), (0, r.jsxs)("div", {
        className: g.body,
        children: [(0, r.jsxs)(s.X6q, {
          className: a()(I ? g.headerWithPremiumIcon : g.header, m),
          variant: "heading-md/bold",
          color: "always-white",
          children: [I && !v ? (0, r.jsx)(s.SrA, {
            size: "md",
            color: "currentColor",
            className: g.premiumIcon
          }) : null, v ? (0, r.jsxs)(s.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: g.earlyAccessBadgeContainer,
            children: [(0, r.jsx)(s.SrA, {
              size: "md",
              color: "currentColor",
              className: g.earlyAccessIcon
            }), (0, r.jsx)("span", {
              className: g.earlyAccessText,
              children: f.NW.string(f.t.phHyIS)
            })]
          }) : null, i]
        }), null == n ? null : "string" == typeof n ? (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, r.jsx)("div", {
        ref: W,
        className: k || !N ? g.buttonContainerVertical : g.buttonContainerHorizontal,
        children: null != _ ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.zxk, {
            className: g.button,
            size: U,
            onClick: e => {
              null == b || b(e), _(e), z(d.L.PRIMARY)
            },
            color: null != M ? M : I || v ? s.zxk.Colors.BRAND_INVERTED : s.zxk.Colors.WHITE,
            children: null != y ? y : f.NW.string(f.t.IHf1RE)
          }), !P && (0, r.jsx)(s.zxk, {
            className: g.button,
            size: U,
            onClick: e => {
              null == b || b(e), z(d.L.DISMISS)
            },
            color: I || v ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
            look: I || v ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED,
            children: null != h ? h : f.NW.string(f.t.om7Ovr)
          })]
        }) : (0, r.jsx)(s.zxk, {
          className: g.button,
          size: s.zxk.Sizes.MAX,
          onClick: e => {
            null == b || b(e), z(d.L.PRIMARY)
          },
          color: s.zxk.Colors.WHITE,
          children: f.NW.string(f.t.HU2IR0)
        })
      }), (0, r.jsx)("div", {
        className: a()(g.pointer, x, {
          [g.bottomPointer]: "top" === j,
          [g.centerLeftPointer]: "right" === j && "center" === T,
          [g.topLeftPointer]: "right" === j && "top" === T
        })
      })]
    })
  })
})