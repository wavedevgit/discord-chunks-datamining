/** Chunk was on web.js **/
/** chunk id: 143941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => N,
  s: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = e => {
  let {
    product: t,
    iconSize: n = 20,
    className: a,
    enableHoverEffect: l = false,
    isCardHovered: c = true,
    selectedVariantIndex: d
  } = e, f = i.useMemo(() => {
    var e;
    return t.type === s.Z.VARIANTS_GROUP && null != d && (null == (e = t.variants) ? true : e[d]) != null ? t.variants[d] : t
  }, [t, d]), _ = f.skuId, {
    isPurchased: p
  } = (0, b.L)(f), h = (0, y.r1)(f), m = (0, E.x6)(f), g = (0, E.G1)(f), O = h || m || g, T = i.useMemo(() => {
    let e = "6/4";
    switch (t.type) {
      case s.Z.NAMEPLATE:
      case s.Z.AVATAR_DECORATION:
        e = "16/9";
        break;
      case s.Z.BUNDLE:
      case s.Z.PROFILE_EFFECT:
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
  if (p) return null;
  if (O) {
    let e = v.intl.string(v.t["50TX9k"]);
    return m ? e = v.intl.string(v.t.UfDp3L) : h && (e = v.intl.string(v.t.KsFBMs)), (0, r.jsx)(R, {
      skuId: _,
      className: o()(I.disabledButton, a),
      iconSize: n,
      isCardHovered: c,
      disabled: true,
      tooltipOverrideText: e,
      nuxGraphic: T
    })
  }
  return (0, r.jsx)(R, {
    skuId: _,
    className: o()(l && I.withHover, a),
    iconSize: n,
    isCardHovered: c,
    nuxGraphic: T
  })
};

function R(e) {
  let {
    skuId: t,
    className: a,
    iconSize: s = 20,
    disabled: E,
    isCardHovered: b,
    tooltipOverrideText: y,
    nuxGraphic: T
  } = e, [A, N] = (0, _.US)([l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), R = A === l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    analyticsLocations: P
  } = (0, d.ZP)(), D = g.default.getCurrentUser(), w = null != D ? p.Z.getFirstWishlistId(D.id) : null, x = (0, m.ny)(w, t), L = i.useRef(null), [M, k] = i.useState(null);
  i.useEffect(() => {
    k(null)
  }, [t]);
  let j = null !== M ? M : x,
    U = (0, f.X)(L),
    G = j ? u.h_8 : u.Pzh,
    B = j || U ? I.wishlistedOrHoveredIconColor : I.normalIconColor,
    Z = i.useCallback(async e => {
      if (e.stopPropagation(), j && null != w) {
        k(false);
        try {
          await h.Z.removeSkuFromWishlist(w, t, P), k(null)
        } catch (e) {
          k(null), (0, u.showToast)((0, u.createToast)(v.intl.string(v.t.F8FvUy), u.ToastType.FAILURE)), u.uvj.announce(v.intl.string(v.t.F8FvUy))
        }
      } else {
        k(true);
        try {
          await h.Z.addSkuToWishlist(t, P), k(null), R && null != T && ((0, u.ZDy)(async () => {
            let {
              default: e
            } = await n.e("36340").then(n.bind(n, 874533));
            return t => (0, r.jsx)(e, C(S({}, t), {
              graphic: T
            }))
          }), N(O.L.USER_DISMISS))
        } catch (e) {
          k(null), (0, u.showToast)((0, u.createToast)(v.intl.string(v.t.F8FvUy), u.ToastType.FAILURE)), u.uvj.announce(v.intl.string(v.t.F8FvUy))
        }
      }
    }, [j, w, t, P, R, T, N]),
    F = j ? v.intl.string(v.t.yr9TTf) : v.intl.string(v.t["8DkMEQ"]);
  return (b || j) && null != D ? E ? (0, r.jsx)(c.u, {
    text: null != y ? y : F,
    "aria-label": null != y ? y : F,
    children: (0, r.jsx)(u.P3F, {
      className: o()(I.wishlistButton, I.disabledButton, a),
      innerRef: L,
      onClick: e => e.stopPropagation(),
      "aria-disabled": true,
      children: (0, r.jsx)(G, {
        colorClass: I.disabledIconColor,
        size: "custom",
        height: s,
        width: s
      })
    })
  }) : R ? (0, r.jsx)(c.i_, {
    title: v.intl.string(v.t["47Rhc3"]),
    body: v.intl.string(v.t.PXjA0b),
    "aria-label": F,
    children: (0, r.jsx)(u.P3F, {
      className: o()(I.wishlistButton, a),
      innerRef: L,
      onClick: Z,
      "aria-label": F,
      children: (0, r.jsx)(G, {
        colorClass: B,
        size: "custom",
        height: s,
        width: s
      })
    })
  }) : (0, r.jsx)(c.u, {
    text: null != y ? y : F,
    "aria-label": null != y ? y : F,
    children: (0, r.jsx)(u.P3F, {
      className: o()(I.wishlistButton, a),
      innerRef: L,
      onClick: Z,
      "aria-label": F,
      children: (0, r.jsx)(G, {
        colorClass: B,
        size: "custom",
        height: s,
        width: s
      })
    })
  }) : null
}