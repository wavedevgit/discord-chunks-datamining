/** Chunk was on 82477 **/
/** chunk id: 765585, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk428967 = require("./428967.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk279745 = require("./279745.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk675065 = require("./675065.js");
let m = Chunk473749.forwardRef(function(e, t) {
  let {
    body: n,
    header: l,
    artClassName: m,
    headerClassName: y,
    contentClassName: O,
    tryItText: v,
    dismissText: j,
    onTryFeature: C,
    onClose: x,
    className: E,
    inlineArt: S = false,
    isPremiumFeature: I = false,
    shouldUseHorizontalButtons: _ = false,
    showGIFTag: P = false,
    dismissibleContent: N,
    position: Z = "top",
    align: w = "center",
    art: T,
    maxWidth: A = 280,
    hideDismissButton: R = false,
    pointerClassName: D,
    dismissIconClassName: M,
    dismissIcon: L,
    onDismissIconClick: k,
    tryItButtonColor: G
  } = e, U = _ ? o.zx.Sizes.LARGE : o.zx.Sizes.MAX, [B, F] = i.useState(false), {
    ref: V,
    width: H
  } = (0, c.ZP)();

  function z(e) {
    if ((0, u.lg)(N)) return void(0, f.bj)(N, {
      dismissAction: e
    });
    (0, d.Q3)(N, {
      dismissAction: e
    })
  }
  return i.useEffect(() => {
    var e, t;
    let n = (null != (t = null == (e = V.current) ? true : e.scrollWidth) ? t : 0) + 64;
    !B && n > A && F(true)
  }, [B, H, V, A]), i.useEffect(() => {
    (0, f.kk)(N)
  }, [N]), (0, r.jsx)("div", {
    className: E,
    ref: t,
    children: (0, r.jsxs)("div", {
      className: a()(b.content, O, {
        [b.contentNoArt]: null == m || S,
        [b.contentPremium]: I
      }),
      children: [null != L && (0, r.jsx)(s.P3F, {
        onClick: k,
        className: M,
        children: L
      }), (0, r.jsxs)("div", {
        className: a()(m, S ? b.artInline : b.artAbsolute),
        children: [P && (0, r.jsx)(h.Z, {
          className: b.gifTag
        }), T]
      }), (0, r.jsxs)("div", {
        className: b.body,
        children: [(0, r.jsxs)(s.Heading, {
          className: a()(I ? b.headerWithPremiumIcon : b.header, y),
          variant: "heading-md/bold",
          color: "always-white",
          children: [I ? (0, r.jsx)(s.SrA, {
            size: "md",
            color: "currentColor",
            className: b.premiumIcon
          }) : null, l]
        }), null == n ? null : "string" == typeof n ? (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, r.jsx)("div", {
        ref: V,
        className: B || !_ ? b.buttonContainerVertical : b.buttonContainerHorizontal,
        children: null != C ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.zx, {
            className: b.button,
            size: U,
            onClick: e => {
              null == x || x(e), C(e), z(p.L.PRIMARY)
            },
            color: null != G ? G : I ? o.zx.Colors.BRAND_INVERTED : o.zx.Colors.WHITE,
            children: null != v ? v : g.intl.string(g.t.IHf1RN)
          }), !R && (0, r.jsx)(o.zx, {
            className: b.button,
            size: U,
            onClick: e => {
              null == x || x(e), z(p.L.DISMISS)
            },
            color: I ? o.zx.Colors.WHITE : o.zx.Colors.BRAND,
            look: I ? o.zx.Looks.LINK : o.zx.Looks.FILLED,
            children: null != j ? j : g.intl.string(g.t.om7Ovn)
          })]
        }) : (0, r.jsx)(o.zx, {
          className: b.button,
          size: o.zx.Sizes.MAX,
          onClick: e => {
            null == x || x(e), z(p.L.PRIMARY)
          },
          color: o.zx.Colors.WHITE,
          children: g.intl.string(g.t.HU2IR5)
        })
      }), (0, r.jsx)("div", {
        className: a()(b.pointer, D, {
          [b.bottomPointer]: "top" === Z,
          [b.centerLeftPointer]: "right" === Z && "center" === w,
          [b.topLeftPointer]: "right" === Z && "top" === w,
          [b.bottomLeftPointer]: "right" === Z && "bottom" === w
        })
      })]
    })
  })
})