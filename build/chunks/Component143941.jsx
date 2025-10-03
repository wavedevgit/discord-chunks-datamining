/** Chunk was on 70820 **/
/** chunk id: 143941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => P
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
  Chunk890088 = require("./890088.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = e => {
  let {
    product: t,
    iconSize: i = 20,
    className: P,
    enableHoverEffect: _ = false,
    isCardHovered: C = true,
    selectedVariantIndex: A
  } = e, [S, T] = (0, p.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), N = S === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    analyticsLocations: I
  } = (0, d.ZP)(), w = m.default.getCurrentUser(), L = null != w ? f.Z.getFirstWishlistId(w.id) : null, R = l.useMemo(() => {
    var e;
    return t.type === o.Z.VARIANTS_GROUP && null != A && (null == (e = t.variants) ? true : e[A]) != null ? t.variants[A] : t
  }, [t, A]), k = R.skuId, D = (0, y.n)(L, k), M = l.useRef(null), [F, U] = l.useState(null);
  l.useEffect(() => {
    U(null)
  }, [k]);
  let Z = null !== F ? F : D,
    B = (0, u.Z)(M),
    Y = Z ? c.h_8 : c.Pzh,
    W = Z || B ? h.wishlistedOrHoveredIconColor : h.normalIconColor,
    {
      isPurchased: V
    } = (0, g.L)(R),
    z = (0, O.fp)(R),
    G = (0, O.x6)(R),
    H = (0, O.G1)(R),
    K = l.useCallback(async e => {
      if (e.stopPropagation(), e.currentTarget.blur(), Z && null != L) {
        U(false);
        try {
          await b.Z.removeSkuFromWishlist(L, k, I), U(null)
        } catch (e) {
          U(null), (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.F8FvU1), c.ToastType.FAILURE)), c.uvj.announce(v.intl.string(v.t.F8FvU1))
        }
      } else {
        U(true);
        try {
          await b.Z.addSkuToWishlist(k, I), U(null), N && ((0, c.ZDy)(async () => {
            let {
              default: e
            } = await n.e("36340").then(n.bind(n, 874533));
            return t => (0, r.jsx)(e, E(x({}, t), {
              product: R
            }))
          }), T(j.L.USER_DISMISS))
        } catch (e) {
          U(null), (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.F8FvU1), c.ToastType.FAILURE)), c.uvj.announce(v.intl.string(v.t.F8FvU1))
        }
      }
    }, [I, Z, k, R, N, T, L, U]);
  if (!C && !Z || null == w || V) return null;
  if (z || G || H) {
    let e = v.intl.string(v.t["50TX9v"]);
    return G ? e = v.intl.string(v.t.UfDp3N) : z && (e = v.intl.string(v.t.KsFBMj)), (0, r.jsx)(c.ua7, {
      text: e,
      children: e => (0, r.jsx)(c.P3F, E(x({}, e), {
        className: a()(h.wishlistButton, h.disabledButton, P),
        innerRef: M,
        "aria-disabled": true,
        onClick: e => e.stopPropagation(),
        children: (0, r.jsx)(Y, {
          colorClass: h.disabledIconColor,
          size: "custom",
          height: i,
          width: i
        })
      }))
    })
  }
  let X = Z ? v.intl.string(v.t.yr9TTU) : v.intl.string(v.t["8DkMER"]),
    q = N ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: v.intl.string(v.t["47Rhc3"])
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        children: v.intl.string(v.t.PXjA0d)
      })]
    }) : X;
  return (0, r.jsx)(c.ua7, {
    text: q,
    "aria-label": X,
    children: e => (0, r.jsx)(c.P3F, E(x({}, e), {
      className: a()(h.wishlistButton, _ && h.withHover, P),
      innerRef: M,
      onClick: K,
      "aria-label": X,
      children: (0, r.jsx)(Y, {
        colorClass: W,
        size: "custom",
        height: i,
        width: i
      })
    }))
  })
}