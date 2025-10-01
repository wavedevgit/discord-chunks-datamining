/** Chunk was on 204 **/
/** chunk id: 143941, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  a: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk277511 = require("./277511.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk884697 = require("./884697.js"),
  Chunk724994 = require("./724994.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820657 = require("./820657.js");

function j(e) {
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

function _(e, t) {
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
let E = e => {
  let {
    product: t,
    iconSize: i = 20,
    className: E,
    enableHoverEffect: x = false,
    isCardHovered: C = true,
    selectedVariantIndex: S
  } = e, [A, I] = (0, p.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), w = A === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    analyticsLocations: R
  } = (0, d.ZP)(), T = g.default.getCurrentUser(), N = null != T ? f.Z.getFirstWishlistId(T.id) : null, L = l.useMemo(() => {
    var e;
    return t.type === o.Z.VARIANTS_GROUP && null != S && (null == (e = t.variants) ? true : e[S]) != null ? t.variants[S] : t
  }, [t, S]), k = L.skuId, D = (0, h.n)(N, k), M = l.useRef(null), [Z, U] = l.useState(null);
  l.useEffect(() => {
    U(null)
  }, [k]);
  let B = null !== Z ? Z : D,
    F = (0, u.Z)(M),
    V = B ? c.h_8 : c.Pzh,
    W = B || F ? P.wishlistedOrHoveredIconColor : P.normalIconColor,
    {
      isPurchased: H
    } = (0, v.L)(L),
    G = (0, y.fp)(L) || (0, y.x6)(L) || (0, y.G1)(L),
    Y = l.useCallback(async e => {
      if (e.stopPropagation(), e.currentTarget.blur(), B && null != N) {
        U(false);
        try {
          await b.Z.removeSkuFromWishlist(N, k, R), U(null)
        } catch (e) {
          U(null), (0, c.showToast)((0, c.createToast)(O.intl.string(O.t.F8FvU1), c.ToastType.FAILURE))
        }
      } else {
        U(true);
        try {
          await b.Z.addSkuToWishlist(k, R), U(null), w && ((0, c.ZDy)(async () => {
            let {
              default: e
            } = await r.e("36340").then(r.bind(r, 874533));
            return r => (0, n.jsx)(e, _(j({}, r), {
              product: t
            }))
          }), I(m.L.USER_DISMISS))
        } catch (e) {
          U(null), (0, c.showToast)((0, c.createToast)(O.intl.string(O.t.F8FvU1), c.ToastType.FAILURE))
        }
      }
    }, [R, B, k, t, w, I, N, U]);
  if (!C && !B || null == T) return null;
  if (G || H) return (0, n.jsx)(c.ua7, {
    text: O.intl.string(O.t["02QYZG"]),
    children: e => (0, n.jsx)(c.P3F, _(j({}, e), {
      className: a()(P.wishlistButton, P.disabledButton, E),
      innerRef: M,
      onClick: e => e.stopPropagation(),
      children: (0, n.jsx)(V, {
        colorClass: P.disabledIconColor,
        size: "custom",
        height: i,
        width: i
      })
    }))
  });
  let z = B ? O.intl.string(O.t.yr9TTU) : O.intl.string(O.t["8DkMER"]),
    K = w ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: O.intl.string(O.t["47Rhc3"])
      }), (0, n.jsx)(c.Text, {
        variant: "text-sm/medium",
        children: O.intl.string(O.t.PXjA0d)
      })]
    }) : z;
  return (0, n.jsx)(c.ua7, {
    text: K,
    "aria-label": z,
    children: e => (0, n.jsx)(c.P3F, _(j({}, e), {
      className: a()(P.wishlistButton, x && P.withHover, E),
      innerRef: M,
      onClick: Y,
      "aria-label": z,
      children: (0, n.jsx)(V, {
        colorClass: W,
        size: "custom",
        height: i,
        width: i
      })
    }))
  })
}