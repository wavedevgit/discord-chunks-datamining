/** Chunk was on 204 **/
/** chunk id: 143941, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  a: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk277511 = require("./277511.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk884697 = require("./884697.js"),
  Chunk724994 = require("./724994.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk890088 = require("./890088.js");

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let P = e => {
  let {
    product: t,
    iconSize: i = 20,
    className: P,
    enableHoverEffect: _ = false,
    isCardHovered: E = true
  } = e, [x, C] = (0, u.US)([o.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), S = x === o.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, I = b.default.getCurrentUser(), A = null != I ? d.Z.getFirstWishlistId(I.id) : null, w = (0, f.n)(A, t.skuId), R = l.useRef(null), [T, N] = l.useState(null), L = null !== T ? T : w, k = (0, c.Z)(R), D = L ? s.h_8 : s.Pzh, M = L || k ? v.wishlistedOrHoveredIconColor : v.normalIconColor, {
    isPurchased: Z
  } = (0, g.L)(t), U = (0, h.fp)(t) || (0, h.x6)(t) || (0, h.G1)(t), B = l.useCallback(async e => {
    if (e.stopPropagation(), e.currentTarget.blur(), L && null != A) {
      N(false);
      try {
        await p.Z.removeSkuFromWishlist(A, t.skuId), N(null)
      } catch (e) {
        N(null), (0, s.showToast)((0, s.createToast)(m.intl.string(m.t.F8FvU1), s.ToastType.FAILURE))
      }
    } else {
      N(true);
      try {
        await p.Z.addSkuToWishlist(t.skuId), N(null), S && ((0, s.ZDy)(async () => {
          let {
            default: e
          } = await r.e("36340").then(r.bind(r, 874533));
          return r => (0, n.jsx)(e, j(O({}, r), {
            product: t
          }))
        }), C(y.L.USER_DISMISS))
      } catch (e) {
        N(null), (0, s.showToast)((0, s.createToast)(m.intl.string(m.t.F8FvU1), s.ToastType.FAILURE))
      }
    }
  }, [L, t, S, C, A, N]);
  if (!E && !L || null == I) return null;
  if (U || Z) return (0, n.jsx)(s.ua7, {
    text: m.intl.string(m.t["02QYZG"]),
    children: e => (0, n.jsx)(s.P3F, j(O({}, e), {
      className: a()(v.wishlistButton, v.disabledButton, P),
      innerRef: R,
      onClick: e => e.stopPropagation(),
      children: (0, n.jsx)(D, {
        colorClass: v.disabledIconColor,
        size: "custom",
        height: i,
        width: i
      })
    }))
  });
  let F = L ? m.intl.string(m.t.yr9TTU) : m.intl.string(m.t["8DkMER"]),
    V = S ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(s.Text, {
        variant: "text-sm/semibold",
        children: m.intl.string(m.t["47Rhc3"])
      }), (0, n.jsx)(s.Text, {
        variant: "text-sm/medium",
        children: m.intl.string(m.t.PXjA0d)
      })]
    }) : F;
  return (0, n.jsx)(s.ua7, {
    text: V,
    "aria-label": F,
    children: e => (0, n.jsx)(s.P3F, j(O({}, e), {
      className: a()(v.wishlistButton, _ && v.withHover, P),
      innerRef: R,
      onClick: B,
      "aria-label": F,
      children: (0, n.jsx)(D, {
        colorClass: M,
        size: "custom",
        height: i,
        width: i
      })
    }))
  })
}