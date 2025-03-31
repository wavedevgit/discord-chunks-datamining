/** Chunk was on 83957 **/
n.d(t, {
  Z: () => I
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  a = n.n(l),
  o = n(481060),
  s = n(393238),
  u = n(605236),
  c = n(279745),
  d = n(921944),
  _ = n(388032),
  E = n(64803);
let I = i.forwardRef(function(e, t) {
  let {
    body: n,
    header: l,
    artClassName: I,
    headerClassName: p,
    contentClassName: f,
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
    position: D = "top",
    align: C = "center",
    art: L,
    isPremiumEarlyAccess: R = !1,
    maxWidth: v = 280,
    hideDismissButton: U = !1,
    pointerClassName: j,
    dismissIconClassName: P,
    dismissIcon: Z,
    onDismissIconClick: w,
    tryItButtonColor: x
  } = e, M = m ? o.zxk.Sizes.LARGE : o.zxk.Sizes.MAX, [G, W] = i.useState(!1), {
    ref: k,
    width: F
  } = (0, s.Z)();

  function J(e) {
    (0, u.EW)(b, {
      dismissAction: e
    })
  }
  return i.useEffect(() => {
    var e, t;
    let n = (null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
    !G && n > v && W(!0)
  }, [G, F, k, v]), i.useEffect(() => {
    (0, u.kk)(b)
  }, [b]), (0, r.jsx)("div", {
    className: O,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: a()(E.content, f, {
        [E.contentNoArt]: null == I || N,
        [E.contentPremium]: T || R
      }),
      children: [null != Z && (0, r.jsx)(o.P3F, {
        onClick: w,
        className: P,
        children: Z
      }), (0, r.jsxs)("div", {
        className: a()(I, N ? E.artInline : E.artAbsolute),
        children: [A && (0, r.jsx)(c.Z, {
          className: E.gifTag
        }), L]
      }), (0, r.jsxs)("div", {
        className: E.body,
        children: [(0, r.jsxs)(o.X6q, {
          className: a()(T ? E.headerWithPremiumIcon : E.header, p),
          variant: "heading-md/bold",
          color: "always-white",
          children: [T && !R ? (0, r.jsx)(o.SrA, {
            size: "md",
            color: "currentColor",
            className: E.premiumIcon
          }) : null, R ? (0, r.jsxs)(o.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: E.earlyAccessBadgeContainer,
            children: [(0, r.jsx)(o.SrA, {
              size: "md",
              color: "currentColor",
              className: E.earlyAccessIcon
            }), (0, r.jsx)("span", {
              className: E.earlyAccessText,
              children: _.NW.string(_.t.phHyIS)
            })]
          }) : null, l]
        }), null == n ? null : "string" == typeof n ? (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, r.jsx)("div", {
        ref: k,
        className: G || !m ? E.buttonContainerVertical : E.buttonContainerHorizontal,
        children: null != S ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.zxk, {
            className: E.button,
            size: M,
            onClick: e => {
              null == y || y(e), S(e), J(d.L.PRIMARY)
            },
            color: null != x ? x : T || R ? o.zxk.Colors.BRAND_INVERTED : o.zxk.Colors.WHITE,
            children: null != g ? g : _.NW.string(_.t.IHf1RE)
          }), !U && (0, r.jsx)(o.zxk, {
            className: E.button,
            size: M,
            onClick: e => {
              null == y || y(e), J(d.L.DISMISS)
            },
            color: T || R ? o.zxk.Colors.WHITE : o.zxk.Colors.BRAND,
            look: T || R ? o.zxk.Looks.LINK : o.zxk.Looks.FILLED,
            children: null != h ? h : _.NW.string(_.t.om7Ovr)
          })]
        }) : (0, r.jsx)(o.zxk, {
          className: E.button,
          size: o.zxk.Sizes.MAX,
          onClick: e => {
            null == y || y(e), J(d.L.PRIMARY)
          },
          color: o.zxk.Colors.WHITE,
          children: _.NW.string(_.t.HU2IR0)
        })
      }), (0, r.jsx)("div", {
        className: a()(E.pointer, j, {
          [E.bottomPointer]: "top" === D,
          [E.centerLeftPointer]: "right" === D && "center" === C,
          [E.topLeftPointer]: "right" === D && "top" === C
        })
      })]
    })
  })
})