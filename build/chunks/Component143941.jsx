/** Chunk was on 72740 **/
/** chunk id: 143941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => E,
  s: () => _
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
    iconSize: n = 20,
    className: a,
    enableHoverEffect: s = false,
    isCardHovered: c = true,
    selectedVariantIndex: d
  } = e, p = l.useMemo(() => {
    var e;
    return t.type === o.Z.VARIANTS_GROUP && null != d && (null == (e = t.variants) ? true : e[d]) != null ? t.variants[d] : t
  }, [t, d]), b = p.skuId, {
    isPurchased: f
  } = (0, g.L)(p), y = (0, h.r1)(p), O = (0, m.x6)(p), v = (0, m.G1)(p), j = l.useMemo(() => {
    let e = "6/4";
    switch (t.type) {
      case o.Z.NAMEPLATE:
      case o.Z.AVATAR_DECORATION:
        e = "16/9";
        break;
      case o.Z.BUNDLE:
      case o.Z.PROFILE_EFFECT:
      default:
        e = "6/4"
    }
    return {
      type: "dynamic",
      component: u.AX$.COLLECTIBLES_PREVIEW,
      aspectRatio: e,
      props: {
        product: t,
        forCollectedModal: true
      }
    }
  }, [t]);
  if (f) return null;
  if (y || O || v) {
    let e = x.intl.string(x.t["50TX9k"]);
    return O ? e = x.intl.string(x.t.UfDp3L) : y && (e = x.intl.string(x.t.KsFBMs)), (0, r.jsx)(_, {
      skuId: b,
      className: i()(P.disabledButton, a),
      iconSize: n,
      isCardHovered: c,
      disabled: true,
      tooltipOverrideText: e,
      nuxGraphic: j
    })
  }
  return (0, r.jsx)(_, {
    skuId: b,
    className: i()(s && P.withHover, a),
    iconSize: n,
    isCardHovered: c,
    nuxGraphic: j
  })
};

function _(e) {
  let {
    skuId: t,
    className: a,
    iconSize: o = 20,
    disabled: m,
    isCardHovered: g,
    tooltipOverrideText: h,
    nuxGraphic: E
  } = e, [_, C] = (0, b.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), S = _ === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    analyticsLocations: A
  } = (0, d.ZP)(), N = v.default.getCurrentUser(), I = null != N ? f.Z.getFirstWishlistId(N.id) : null, L = (0, O.ny)(I, t), w = l.useRef(null), [k, R] = l.useState(null);
  l.useEffect(() => {
    R(null)
  }, [t]);
  let T = null !== k ? k : L,
    D = (0, p.X)(w),
    M = T ? u.h_8 : u.Pzh,
    F = T || D ? P.wishlistedOrHoveredIconColor : P.normalIconColor,
    U = l.useCallback(async e => {
      if (e.stopPropagation(), T && null != I) {
        R(false);
        try {
          await y.Z.removeSkuFromWishlist(I, t, A), R(null)
        } catch (e) {
          R(null), (0, u.showToast)((0, u.createToast)(x.intl.string(x.t.F8FvUy), u.ToastType.FAILURE)), u.uvj.announce(x.intl.string(x.t.F8FvUy))
        }
      } else {
        R(true);
        try {
          await y.Z.addSkuToWishlist(t, A), R(null), S && null != E && ((0, u.ZDy)(async () => {
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
                graphic: E
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
          }), C(j.L.USER_DISMISS))
        } catch (e) {
          R(null), (0, u.showToast)((0, u.createToast)(x.intl.string(x.t.F8FvUy), u.ToastType.FAILURE)), u.uvj.announce(x.intl.string(x.t.F8FvUy))
        }
      }
    }, [T, I, t, A, S, E, C]),
    Z = T ? x.intl.string(x.t.yr9TTf) : x.intl.string(x.t["8DkMEQ"]);
  return (g || T) && null != N ? m ? (0, r.jsx)(c.u, {
    text: null != h ? h : Z,
    "aria-label": null != h ? h : Z,
    children: (0, r.jsx)(u.P3F, {
      className: i()(P.wishlistButton, P.disabledButton, a),
      innerRef: w,
      onClick: e => e.stopPropagation(),
      "aria-disabled": true,
      children: (0, r.jsx)(M, {
        colorClass: P.disabledIconColor,
        size: "custom",
        height: o,
        width: o
      })
    })
  }) : S ? (0, r.jsx)(c.i_, {
    title: x.intl.string(x.t["47Rhc3"]),
    body: x.intl.string(x.t.PXjA0b),
    "aria-label": Z,
    children: (0, r.jsx)(u.P3F, {
      className: i()(P.wishlistButton, a),
      innerRef: w,
      onClick: U,
      "aria-label": Z,
      children: (0, r.jsx)(M, {
        colorClass: F,
        size: "custom",
        height: o,
        width: o
      })
    })
  }) : (0, r.jsx)(c.u, {
    text: null != h ? h : Z,
    "aria-label": null != h ? h : Z,
    children: (0, r.jsx)(u.P3F, {
      className: i()(P.wishlistButton, a),
      innerRef: w,
      onClick: U,
      "aria-label": Z,
      children: (0, r.jsx)(M, {
        colorClass: F,
        size: "custom",
        height: o,
        width: o
      })
    })
  }) : null
}