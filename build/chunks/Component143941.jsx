/** Chunk was on 204 **/
/** chunk id: 143941, original params: e,t,r (module,exports,require) **/
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
let _ = e => {
  let {
    product: t,
    iconSize: i = 20,
    className: _,
    enableHoverEffect: E = false,
    isCardHovered: x = true,
    selectedVariantIndex: C
  } = e, [S, A] = (0, d.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), I = S === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, w = h.default.getCurrentUser(), R = null != w ? p.Z.getFirstWishlistId(w.id) : null, T = l.useMemo(() => {
    var e;
    return t.type === o.Z.VARIANTS_GROUP && null != C && (null == (e = t.variants) ? true : e[C]) != null ? t.variants[C] : t
  }, [t, C]), N = T.skuId, L = (0, b.n)(R, N), k = l.useRef(null), [D, M] = l.useState(null);
  l.useEffect(() => {
    M(null)
  }, [N]);
  let Z = null !== D ? D : L,
    U = (0, u.Z)(k),
    B = Z ? c.h_8 : c.Pzh,
    F = Z || U ? O.wishlistedOrHoveredIconColor : O.normalIconColor,
    {
      isPurchased: V
    } = (0, y.L)(T),
    W = (0, g.fp)(T) || (0, g.x6)(T) || (0, g.G1)(T),
    H = l.useCallback(async e => {
      if (e.stopPropagation(), e.currentTarget.blur(), Z && null != R) {
        M(false);
        try {
          await f.Z.removeSkuFromWishlist(R, N), M(null)
        } catch (e) {
          M(null), (0, c.showToast)((0, c.createToast)(m.intl.string(m.t.F8FvU1), c.ToastType.FAILURE))
        }
      } else {
        M(true);
        try {
          await f.Z.addSkuToWishlist(N), M(null), I && ((0, c.ZDy)(async () => {
            let {
              default: e
            } = await r.e("36340").then(r.bind(r, 874533));
            return r => (0, n.jsx)(e, j(P({}, r), {
              product: t
            }))
          }), A(v.L.USER_DISMISS))
        } catch (e) {
          M(null), (0, c.showToast)((0, c.createToast)(m.intl.string(m.t.F8FvU1), c.ToastType.FAILURE))
        }
      }
    }, [Z, N, t, I, A, R, M]);
  if (!x && !Z || null == w) return null;
  if (W || V) return (0, n.jsx)(c.ua7, {
    text: m.intl.string(m.t["02QYZG"]),
    children: e => (0, n.jsx)(c.P3F, j(P({}, e), {
      className: a()(O.wishlistButton, O.disabledButton, _),
      innerRef: k,
      onClick: e => e.stopPropagation(),
      children: (0, n.jsx)(B, {
        colorClass: O.disabledIconColor,
        size: "custom",
        height: i,
        width: i
      })
    }))
  });
  let G = Z ? m.intl.string(m.t.yr9TTU) : m.intl.string(m.t["8DkMER"]),
    Y = I ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: m.intl.string(m.t["47Rhc3"])
      }), (0, n.jsx)(c.Text, {
        variant: "text-sm/medium",
        children: m.intl.string(m.t.PXjA0d)
      })]
    }) : G;
  return (0, n.jsx)(c.ua7, {
    text: Y,
    "aria-label": G,
    children: e => (0, n.jsx)(c.P3F, j(P({}, e), {
      className: a()(O.wishlistButton, E && O.withHover, _),
      innerRef: k,
      onClick: H,
      "aria-label": G,
      children: (0, n.jsx)(B, {
        colorClass: F,
        size: "custom",
        height: i,
        width: i
      })
    }))
  })
}