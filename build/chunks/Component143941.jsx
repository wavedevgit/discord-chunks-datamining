/** Chunk was on 48502 **/
/** chunk id: 143941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => x,
  s: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk890088 = require("./890088.js");
let x = e => {
  let {
    product: t,
    iconSize: n = 20,
    className: i,
    enableHoverEffect: s = false,
    isCardHovered: c = true,
    selectedVariantIndex: d
  } = e, p = l.useMemo(() => {
    var e;
    return t.type === o.Z.VARIANTS_GROUP && null != d && (null == (e = t.variants) ? true : e[d]) != null ? t.variants[d] : t
  }, [t, d]), f = p.skuId, {
    isPurchased: b
  } = (0, h.L)(p), y = (0, v.r1)(p), O = (0, g.x6)(p), m = (0, g.G1)(p), j = l.useMemo(() => {
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
  if (b) return null;
  if (y || O || m) {
    let e = P.intl.string(P.t["50TX9k"]);
    return O ? e = P.intl.string(P.t.UfDp3L) : y && (e = P.intl.string(P.t.KsFBMs)), (0, r.jsx)(_, {
      skuId: f,
      className: a()(E.disabledButton, i),
      iconSize: n,
      isCardHovered: c,
      disabled: true,
      tooltipOverrideText: e,
      nuxGraphic: j
    })
  }
  return (0, r.jsx)(_, {
    skuId: f,
    className: a()(s && E.withHover, i),
    iconSize: n,
    isCardHovered: c,
    nuxGraphic: j
  })
};

function _(e) {
  let {
    skuId: t,
    className: i,
    iconSize: o = 20,
    disabled: g,
    isCardHovered: h,
    tooltipOverrideText: v,
    nuxGraphic: x
  } = e, [_, C] = (0, f.US)([s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), A = _ === s.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    analyticsLocations: S
  } = (0, d.ZP)(), N = m.default.getCurrentUser(), I = null != N ? b.Z.getFirstWishlistId(N.id) : null, R = (0, O.ny)(I, t), L = l.useRef(null), [k, w] = l.useState(null);
  l.useEffect(() => {
    w(null)
  }, [t]);
  let T = null !== k ? k : R,
    D = (0, p.X)(L),
    M = T ? u.h_8 : u.Pzh,
    F = T || D ? E.wishlistedOrHoveredIconColor : E.normalIconColor,
    U = l.useCallback(async e => {
      if (e.stopPropagation(), T && null != I) {
        w(false);
        try {
          await y.Z.removeSkuFromWishlist(I, t, S), w(null)
        } catch (e) {
          w(null), (0, u.showToast)((0, u.createToast)(P.intl.string(P.t.F8FvUy), u.ToastType.FAILURE)), u.uvj.announce(P.intl.string(P.t.F8FvUy))
        }
      } else {
        w(true);
        try {
          await y.Z.addSkuToWishlist(t, S), w(null), A && null != x && ((0, u.ZDy)(async () => {
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
                graphic: x
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
          w(null), (0, u.showToast)((0, u.createToast)(P.intl.string(P.t.F8FvUy), u.ToastType.FAILURE)), u.uvj.announce(P.intl.string(P.t.F8FvUy))
        }
      }
    }, [T, I, t, S, A, x, C]),
    Z = T ? P.intl.string(P.t.yr9TTf) : P.intl.string(P.t["8DkMEQ"]);
  return (h || T) && null != N ? g ? (0, r.jsx)(c.u, {
    text: null != v ? v : Z,
    "aria-label": null != v ? v : Z,
    children: (0, r.jsx)(u.P3F, {
      className: a()(E.wishlistButton, E.disabledButton, i),
      innerRef: L,
      onClick: e => e.stopPropagation(),
      "aria-disabled": true,
      children: (0, r.jsx)(M, {
        colorClass: E.disabledIconColor,
        size: "custom",
        height: o,
        width: o
      })
    })
  }) : A ? (0, r.jsx)(c.i_, {
    title: P.intl.string(P.t["47Rhc3"]),
    body: P.intl.string(P.t.PXjA0b),
    "aria-label": Z,
    children: (0, r.jsx)(u.P3F, {
      className: a()(E.wishlistButton, i),
      innerRef: L,
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
    text: null != v ? v : Z,
    "aria-label": null != v ? v : Z,
    children: (0, r.jsx)(u.P3F, {
      className: a()(E.wishlistButton, i),
      innerRef: L,
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