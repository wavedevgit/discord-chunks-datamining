/** Chunk was on 14209 **/
/** chunk id: 143941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk104505 = require("./104505.js"),
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
let _ = e => {
  let {
    product: t,
    iconSize: i = 20,
    className: _,
    enableHoverEffect: P = false,
    isCardHovered: C = true,
    selectedVariantIndex: A
  } = e, [S, N] = (0, p.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), I = S === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    analyticsLocations: L
  } = (0, u.ZP)(), T = m.default.getCurrentUser(), R = null != T ? f.Z.getFirstWishlistId(T.id) : null, k = l.useMemo(() => {
    var e;
    return t.type === o.Z.VARIANTS_GROUP && null != A && (null == (e = t.variants) ? true : e[A]) != null ? t.variants[A] : t
  }, [t, A]), w = k.skuId, D = (0, y.n)(R, w), M = l.useRef(null), [F, U] = l.useState(null);
  l.useEffect(() => {
    U(null)
  }, [w]);
  let Z = null !== F ? F : D,
    Y = (0, d.X)(M),
    W = Z ? c.h_8 : c.Pzh,
    B = Z || Y ? v.wishlistedOrHoveredIconColor : v.normalIconColor,
    {
      isPurchased: V
    } = (0, g.L)(k),
    z = (0, O.fp)(k),
    G = (0, O.x6)(k),
    H = (0, O.G1)(k),
    K = l.useCallback(async e => {
      if (e.stopPropagation(), Z && null != R) {
        U(false);
        try {
          await b.Z.removeSkuFromWishlist(R, w, L), U(null)
        } catch (e) {
          U(null), (0, c.showToast)((0, c.createToast)(h.intl.string(h.t.F8FvU1), c.ToastType.FAILURE)), c.uvj.announce(h.intl.string(h.t.F8FvU1))
        }
      } else {
        U(true);
        try {
          await b.Z.addSkuToWishlist(w, L), U(null), I && ((0, c.ZDy)(async () => {
            let {
              default: e
            } = await n.e("36340").then(n.bind(n, 874533));
            return t => (0, r.jsx)(e, E(x({}, t), {
              product: k
            }))
          }), N(j.L.USER_DISMISS))
        } catch (e) {
          U(null), (0, c.showToast)((0, c.createToast)(h.intl.string(h.t.F8FvU1), c.ToastType.FAILURE)), c.uvj.announce(h.intl.string(h.t.F8FvU1))
        }
      }
    }, [L, Z, w, k, I, N, R, U]);
  if (!C && !Z || null == T || V) return null;
  if (z || G || H) {
    let e = h.intl.string(h.t["50TX9v"]);
    return G ? e = h.intl.string(h.t.UfDp3N) : z && (e = h.intl.string(h.t.KsFBMj)), (0, r.jsx)(c.ua7, {
      "data-migration-pending": true,
      text: e,
      children: e => (0, r.jsx)(c.P3F, E(x({}, e), {
        className: a()(v.wishlistButton, v.disabledButton, _),
        innerRef: M,
        onClick: e => e.stopPropagation(),
        "aria-disabled": true,
        children: (0, r.jsx)(W, {
          colorClass: v.disabledIconColor,
          size: "custom",
          height: i,
          width: i
        })
      }))
    })
  }
  let X = Z ? h.intl.string(h.t.yr9TTU) : h.intl.string(h.t["8DkMER"]),
    q = I ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: h.intl.string(h.t["47Rhc3"])
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        children: h.intl.string(h.t.PXjA0d)
      })]
    }) : X;
  return (0, r.jsx)(c.ua7, {
    "data-migration-pending": true,
    text: q,
    "aria-label": X,
    children: e => (0, r.jsx)(c.P3F, E(x({}, e), {
      className: a()(v.wishlistButton, P && v.withHover, _),
      innerRef: M,
      onClick: K,
      "aria-label": X,
      children: (0, r.jsx)(W, {
        colorClass: B,
        size: "custom",
        height: i,
        width: i
      })
    }))
  })
}