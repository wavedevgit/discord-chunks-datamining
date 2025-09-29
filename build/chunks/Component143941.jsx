/** Chunk was on 84957 **/
/** chunk id: 143941, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  a: () => w,
  k: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk820657 = require("./820657.js"),
  Chunk74866 = require("./74866.js");

function m(e) {
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

function I(e, t) {
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
let j = e => {
    let {
      message: t
    } = e;
    return (0, n.jsxs)("div", {
      className: g.toast,
      children: [(0, n.jsx)(a.kSu, {
        size: "refresh_sm",
        className: v.toastIcon,
        color: a.TVs.colors.STATUS_POSITIVE
      }), (0, n.jsx)(a.Text, {
        color: "text-default",
        variant: "text-sm/semibold",
        children: t
      })]
    })
  },
  w = e => {
    let {
      product: t,
      iconSize: s = 20,
      className: g,
      enableHoverEffect: w = false,
      isCardHovered: P = true
    } = e, [_, T] = (0, c.US)([l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), E = _ === l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, k = h.default.getCurrentUser(), Z = null != k ? d.Z.getFirstWishlistId(k.id) : null, L = (0, p.n)(Z, t.skuId), x = i.useRef(null), [C, U] = i.useState(null), A = null !== C ? C : L, D = (0, u.Z)(x), H = A ? a.h_8 : a.Pzh, W = A || D ? v.wishlistedOrHoveredIconColor : v.normalIconColor, {
      isPurchased: F
    } = (0, S.L)(t), R = (0, O.fp)(t) || (0, O.x6)(t) || (0, O.G1)(t), N = i.useCallback(async e => {
      if (e.stopPropagation(), e.currentTarget.blur(), A && null != Z) {
        U(false);
        try {
          await f.Z.removeSkuFromWishlist(Z, t.skuId), U(null), (0, a.showToast)((0, a.createToast)("", a.ToastType.CUSTOM, {
            component: (0, n.jsx)(j, {
              message: y.intl.string(y.t.DSXOiI)
            })
          }))
        } catch (e) {
          U(null), (0, a.showToast)((0, a.createToast)(y.intl.string(y.t.F8FvU1), a.ToastType.FAILURE))
        }
      } else {
        U(true);
        try {
          await f.Z.addSkuToWishlist(t.skuId), U(null), E && ((0, a.ZDy)(async () => {
            let {
              default: e
            } = await r.e("36340").then(r.bind(r, 874533));
            return r => (0, n.jsx)(e, I(m({}, r), {
              product: t
            }))
          }), T(b.L.USER_DISMISS)), (0, a.showToast)((0, a.createToast)("", a.ToastType.CUSTOM, {
            component: (0, n.jsx)(j, {
              message: y.intl.string(y.t["3T2jbW"])
            })
          }))
        } catch (e) {
          U(null), (0, a.showToast)((0, a.createToast)(y.intl.string(y.t.F8FvU1), a.ToastType.FAILURE))
        }
      }
    }, [A, t, E, T, Z, U]);
    if (!P && !A || null == k) return null;
    if (R || F) return (0, n.jsx)(a.ua7, {
      text: y.intl.string(y.t["02QYZG"]),
      children: e => (0, n.jsx)(a.P3F, I(m({}, e), {
        className: o()(v.wishlistButton, v.disabledButton, g),
        innerRef: x,
        onClick: e => e.stopPropagation(),
        children: (0, n.jsx)(H, {
          colorClass: v.disabledIconColor,
          size: "custom",
          height: s,
          width: s
        })
      }))
    });
    let M = A ? y.intl.string(y.t.yr9TTU) : y.intl.string(y.t["8DkMER"]),
      V = E ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.Text, {
          variant: "text-sm/semibold",
          children: y.intl.string(y.t["47Rhc3"])
        }), (0, n.jsx)(a.Text, {
          variant: "text-sm/medium",
          children: y.intl.string(y.t.PXjA0d)
        })]
      }) : M;
    return (0, n.jsx)(a.ua7, {
      text: V,
      "aria-label": M,
      children: e => (0, n.jsx)(a.P3F, I(m({}, e), {
        className: o()(v.wishlistButton, w && v.withHover, g),
        innerRef: x,
        onClick: N,
        "aria-label": M,
        children: (0, n.jsx)(H, {
          colorClass: W,
          size: "custom",
          height: s,
          width: s
        })
      }))
    })
  }