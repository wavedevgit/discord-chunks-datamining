/** Chunk was on 70820 **/
/** chunk id: 143941, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  a: () => x
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

function P(e) {
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

function E(e, t) {
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
let x = e => {
  let {
    product: t,
    iconSize: i = 20,
    className: x,
    enableHoverEffect: _ = false,
    isCardHovered: C = true,
    selectedVariantIndex: w
  } = e, [S, A] = (0, p.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), T = S === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    analyticsLocations: N
  } = (0, d.ZP)(), I = O.default.getCurrentUser(), D = null != I ? f.Z.getFirstWishlistId(I.id) : null, L = l.useMemo(() => {
    var e;
    return t.type === o.Z.VARIANTS_GROUP && null != w && (null == (e = t.variants) ? true : e[w]) != null ? t.variants[w] : t
  }, [t, w]), k = L.skuId, R = (0, y.n)(D, k), M = l.useRef(null), [F, U] = l.useState(null);
  l.useEffect(() => {
    U(null)
  }, [k]);
  let Z = null !== F ? F : R,
    B = (0, u.Z)(M),
    Y = Z ? c.h_8 : c.Pzh,
    W = Z || B ? h.wishlistedOrHoveredIconColor : h.normalIconColor,
    {
      isPurchased: V
    } = (0, j.L)(L),
    z = (0, m.fp)(L),
    G = (0, m.x6)(L),
    H = (0, m.G1)(L),
    K = l.useCallback(async e => {
      if (e.stopPropagation(), e.currentTarget.blur(), Z && null != D) {
        U(false);
        try {
          await b.Z.removeSkuFromWishlist(D, k, N), U(null)
        } catch (e) {
          U(null), (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.F8FvU1), c.ToastType.FAILURE)), c.uvj.announce(v.intl.string(v.t.F8FvU1))
        }
      } else {
        U(true);
        try {
          await b.Z.addSkuToWishlist(k, N), U(null), T && ((0, c.ZDy)(async () => {
            let {
              default: e
            } = await r.e("36340").then(r.bind(r, 874533));
            return r => (0, n.jsx)(e, E(P({}, r), {
              product: t
            }))
          }), A(g.L.USER_DISMISS))
        } catch (e) {
          U(null), (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.F8FvU1), c.ToastType.FAILURE)), c.uvj.announce(v.intl.string(v.t.F8FvU1))
        }
      }
    }, [N, Z, k, t, T, A, D, U]);
  if (!C && !Z || null == I) return null;
  if (z || G || H || V) {
    let e = v.intl.string(v.t["50TX9v"]);
    return G ? e = v.intl.string(v.t.UfDp3N) : z && (e = v.intl.string(v.t.KsFBMj)), (0, n.jsx)(c.ua7, {
      text: e,
      children: e => (0, n.jsx)(c.P3F, E(P({}, e), {
        className: a()(h.wishlistButton, h.disabledButton, x),
        innerRef: M,
        "aria-disabled": true,
        onClick: e => e.stopPropagation(),
        children: (0, n.jsx)(Y, {
          colorClass: h.disabledIconColor,
          size: "custom",
          height: i,
          width: i
        })
      }))
    })
  }
  let X = Z ? v.intl.string(v.t.yr9TTU) : v.intl.string(v.t["8DkMER"]),
    q = T ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: v.intl.string(v.t["47Rhc3"])
      }), (0, n.jsx)(c.Text, {
        variant: "text-sm/medium",
        children: v.intl.string(v.t.PXjA0d)
      })]
    }) : X;
  return (0, n.jsx)(c.ua7, {
    text: q,
    "aria-label": X,
    children: e => (0, n.jsx)(c.P3F, E(P({}, e), {
      className: a()(h.wishlistButton, _ && h.withHover, x),
      innerRef: M,
      onClick: K,
      "aria-label": X,
      children: (0, n.jsx)(Y, {
        colorClass: W,
        size: "custom",
        height: i,
        width: i
      })
    }))
  })
}