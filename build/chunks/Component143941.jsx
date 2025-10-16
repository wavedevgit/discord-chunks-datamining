/** Chunk was on 72740 **/
/** chunk id: 143941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk704215 = require("./704215.js"),
  Chunk681715 = require("./681715.js"),
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
let P = e => {
  let {
    product: t,
    iconSize: a = 20,
    className: P,
    enableHoverEffect: E = false,
    isCardHovered: _ = true,
    selectedVariantIndex: C
  } = e, [S, A] = (0, f.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), N = S === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    analyticsLocations: w
  } = (0, d.ZP)(), I = v.default.getCurrentUser(), L = null != I ? b.Z.getFirstWishlistId(I.id) : null, R = l.useMemo(() => {
    var e;
    return t.type === o.Z.VARIANTS_GROUP && null != C && (null == (e = t.variants) ? true : e[C]) != null ? t.variants[C] : t
  }, [t, C]), k = R.skuId, T = (0, O.ny)(L, k), D = l.useRef(null), [M, F] = l.useState(null);
  l.useEffect(() => {
    F(null)
  }, [k]);
  let U = null !== M ? M : T,
    Z = (0, p.X)(D),
    V = U ? u.h_8 : u.Pzh,
    Y = U || Z ? x.wishlistedOrHoveredIconColor : x.normalIconColor,
    {
      isPurchased: B
    } = (0, m.L)(R),
    W = (0, g.fp)(R),
    G = (0, g.x6)(R),
    z = (0, g.G1)(R),
    H = l.useCallback(async e => {
      if (e.stopPropagation(), U && null != L) {
        F(false);
        try {
          await y.Z.removeSkuFromWishlist(L, k, w), F(null)
        } catch (e) {
          F(null), (0, u.showToast)((0, u.createToast)(j.intl.string(j.t.F8FvU1), u.ToastType.FAILURE)), u.uvj.announce(j.intl.string(j.t.F8FvU1))
        }
      } else {
        F(true);
        try {
          await y.Z.addSkuToWishlist(k, w), F(null), N && ((0, u.ZDy)(async () => {
            let {
              default: e
            } = await n.e("36340").then(n.bind(n, 874533));
            return t => {
              var n, l;
              return (0, r.jsx)(e, (n = function(e) {
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
              }({}, t), l = {
                product: R
              }, l = null != l ? l : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(l)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
              }), n))
            }
          }), A(h.L.USER_DISMISS))
        } catch (e) {
          F(null), (0, u.showToast)((0, u.createToast)(j.intl.string(j.t.F8FvU1), u.ToastType.FAILURE)), u.uvj.announce(j.intl.string(j.t.F8FvU1))
        }
      }
    }, [w, U, k, R, N, A, L, F]);
  if (!_ && !U || null == I || B) return null;
  if (W || G || z) {
    let e = j.intl.string(j.t["50TX9v"]);
    return G ? e = j.intl.string(j.t.UfDp3N) : W && (e = j.intl.string(j.t.KsFBMj)), (0, r.jsx)(c.u, {
      text: e,
      children: (0, r.jsx)(u.P3F, {
        className: i()(x.wishlistButton, x.disabledButton, P),
        innerRef: D,
        onClick: e => e.stopPropagation(),
        "aria-disabled": true,
        children: (0, r.jsx)(V, {
          colorClass: x.disabledIconColor,
          size: "custom",
          height: a,
          width: a
        })
      })
    })
  }
  let K = U ? j.intl.string(j.t.yr9TTU) : j.intl.string(j.t["8DkMER"]);
  return N ? (0, r.jsx)(c.i_, {
    title: j.intl.string(j.t["47Rhc3"]),
    body: j.intl.string(j.t.PXjA0d),
    "aria-label": K,
    children: (0, r.jsx)(u.P3F, {
      className: i()(x.wishlistButton, E && x.withHover, P),
      innerRef: D,
      onClick: H,
      "aria-label": K,
      children: (0, r.jsx)(V, {
        colorClass: Y,
        size: "custom",
        height: a,
        width: a
      })
    })
  }) : (0, r.jsx)(c.u, {
    text: K,
    "aria-label": K,
    children: (0, r.jsx)(u.P3F, {
      className: i()(x.wishlistButton, E && x.withHover, P),
      innerRef: D,
      onClick: H,
      "aria-label": K,
      children: (0, r.jsx)(V, {
        colorClass: Y,
        size: "custom",
        height: a,
        width: a
      })
    })
  })
}