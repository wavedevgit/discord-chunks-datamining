/** Chunk was on 72740 **/
/** chunk id: 143941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => E
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
  Chunk27123 = require("./27123.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820657 = require("./820657.js");
let E = e => {
  let {
    product: t,
    iconSize: a = 20,
    className: E,
    enableHoverEffect: _ = false,
    isCardHovered: C = true,
    selectedVariantIndex: S
  } = e, [A, N] = (0, f.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), w = A === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    analyticsLocations: I
  } = (0, d.ZP)(), L = v.default.getCurrentUser(), k = null != L ? b.Z.getFirstWishlistId(L.id) : null, R = l.useMemo(() => {
    var e;
    return t.type === o.Z.VARIANTS_GROUP && null != S && (null == (e = t.variants) ? true : e[S]) != null ? t.variants[S] : t
  }, [t, S]), T = R.skuId, D = (0, O.ny)(k, T), M = l.useRef(null), [F, U] = l.useState(null);
  l.useEffect(() => {
    U(null)
  }, [T]);
  let Z = null !== F ? F : D,
    V = (0, p.X)(M),
    Y = Z ? u.h_8 : u.Pzh,
    B = Z || V ? P.wishlistedOrHoveredIconColor : P.normalIconColor,
    {
      isPurchased: W
    } = (0, m.L)(R),
    G = (0, h.r1)(R),
    z = (0, g.x6)(R),
    H = (0, g.G1)(R),
    K = l.useCallback(async e => {
      if (e.stopPropagation(), Z && null != k) {
        U(false);
        try {
          await y.Z.removeSkuFromWishlist(k, T, I), U(null)
        } catch (e) {
          U(null), (0, u.showToast)((0, u.createToast)(x.intl.string(x.t.F8FvUy), u.ToastType.FAILURE)), u.uvj.announce(x.intl.string(x.t.F8FvUy))
        }
      } else {
        U(true);
        try {
          await y.Z.addSkuToWishlist(T, I), U(null), w && ((0, u.ZDy)(async () => {
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
          }), N(j.L.USER_DISMISS))
        } catch (e) {
          U(null), (0, u.showToast)((0, u.createToast)(x.intl.string(x.t.F8FvUy), u.ToastType.FAILURE)), u.uvj.announce(x.intl.string(x.t.F8FvUy))
        }
      }
    }, [I, Z, T, R, w, N, k, U]);
  if (!C && !Z || null == L || W) return null;
  if (G || z || H) {
    let e = x.intl.string(x.t["50TX9k"]);
    return z ? e = x.intl.string(x.t.UfDp3L) : G && (e = x.intl.string(x.t.KsFBMs)), (0, r.jsx)(c.u, {
      text: e,
      children: (0, r.jsx)(u.P3F, {
        className: i()(P.wishlistButton, P.disabledButton, E),
        innerRef: M,
        onClick: e => e.stopPropagation(),
        "aria-disabled": true,
        children: (0, r.jsx)(Y, {
          colorClass: P.disabledIconColor,
          size: "custom",
          height: a,
          width: a
        })
      })
    })
  }
  let J = Z ? x.intl.string(x.t.yr9TTf) : x.intl.string(x.t["8DkMEQ"]);
  return w ? (0, r.jsx)(c.i_, {
    title: x.intl.string(x.t["47Rhc3"]),
    body: x.intl.string(x.t.PXjA0b),
    "aria-label": J,
    children: (0, r.jsx)(u.P3F, {
      className: i()(P.wishlistButton, _ && P.withHover, E),
      innerRef: M,
      onClick: K,
      "aria-label": J,
      children: (0, r.jsx)(Y, {
        colorClass: B,
        size: "custom",
        height: a,
        width: a
      })
    })
  }) : (0, r.jsx)(c.u, {
    text: J,
    "aria-label": J,
    children: (0, r.jsx)(u.P3F, {
      className: i()(P.wishlistButton, _ && P.withHover, E),
      innerRef: M,
      onClick: K,
      "aria-label": J,
      children: (0, r.jsx)(Y, {
        colorClass: B,
        size: "custom",
        height: a,
        width: a
      })
    })
  })
}