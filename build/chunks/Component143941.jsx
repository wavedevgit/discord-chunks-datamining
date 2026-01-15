/** Chunk was on web.js **/
/** chunk id: 143941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => A,
  s: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk320103 = require("./320103.js"),
  Chunk277511 = require("./277511.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk724994 = require("./724994.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk964517 = require("./964517.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = e => {
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
  }, [t, d]), p = f.skuId, {
    isPurchased: _
  } = (0, b.L)(f), h = i.useMemo(() => {
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
  return _ ? null : (0, m.p)(f) ? (0, r.jsx)(N, {
    skuId: p,
    className: o()(l && v.withHover, a),
    iconSize: n,
    isCardHovered: c,
    nuxGraphic: h
  }) : (0, r.jsx)(N, {
    skuId: p,
    className: o()(v.disabledButton, a),
    iconSize: n,
    isCardHovered: c,
    disabled: true,
    tooltipOverrideText: O.intl.string(O.t["50TX9k"]),
    nuxGraphic: h
  })
};

function N(e) {
  let {
    skuId: t,
    className: a,
    iconSize: s = 20,
    disabled: m,
    isCardHovered: b,
    tooltipOverrideText: S,
    nuxGraphic: T,
    onClick: A
  } = e, [N, P] = (0, p.US)([l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), R = N === l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    analyticsLocations: w
  } = (0, d.ZP)(), D = E.default.getCurrentUser(), x = null != D ? _.Z.getFirstWishlistId(D.id) : null, L = (0, g.ny)(x, t), j = i.useRef(null), [M, k] = i.useState(null);
  i.useEffect(() => {
    k(null)
  }, [t]);
  let U = null !== M ? M : L,
    G = (0, f.X)(j),
    Z = U ? u.h_8 : u.Pzh,
    F = U || G ? v.wishlistedOrHoveredIconColor : v.normalIconColor,
    B = i.useCallback(async e => {
      if (e.stopPropagation(), null == A || A(), U && null != x) {
        k(false);
        try {
          await h.Z.removeSkuFromWishlist(x, t, w), k(null)
        } catch (e) {
          k(null), (0, u.showToast)((0, u.createToast)(O.intl.string(O.t.F8FvUy), u.ToastType.FAILURE)), u.uvj.announce(O.intl.string(O.t.F8FvUy))
        }
      } else {
        k(true);
        try {
          await h.Z.addSkuToWishlist(t, w), k(null), R && null != T && ((0, u.ZDy)(async () => {
            let {
              default: e
            } = await n.e("36340").then(n.bind(n, 874533));
            return t => (0, r.jsx)(e, C(I({}, t), {
              graphic: T
            }))
          }), P(y.L.USER_DISMISS))
        } catch (e) {
          k(null), (0, u.showToast)((0, u.createToast)(O.intl.string(O.t.F8FvUy), u.ToastType.FAILURE)), u.uvj.announce(O.intl.string(O.t.F8FvUy))
        }
      }
    }, [U, x, t, w, R, T, P, A]),
    V = U ? O.intl.string(O.t.yr9TTf) : O.intl.string(O.t["8DkMEQ"]);
  return (b || U) && null != D ? m ? (0, r.jsx)(c.u, {
    text: null != S ? S : V,
    "aria-label": null != S ? S : V,
    children: (0, r.jsx)(u.P3F, {
      className: o()(v.wishlistButton, v.disabledButton, a),
      innerRef: j,
      onClick: e => e.stopPropagation(),
      "aria-disabled": true,
      children: (0, r.jsx)(Z, {
        colorClass: v.disabledIconColor,
        size: "custom",
        height: s,
        width: s
      })
    })
  }) : R ? (0, r.jsx)(c.i_, {
    title: O.intl.string(O.t["47Rhc3"]),
    body: O.intl.string(O.t.PXjA0b),
    "aria-label": V,
    children: (0, r.jsx)(u.P3F, {
      className: o()(v.wishlistButton, a),
      innerRef: j,
      onClick: B,
      "aria-label": V,
      children: (0, r.jsx)(Z, {
        colorClass: F,
        size: "custom",
        height: s,
        width: s
      })
    })
  }) : (0, r.jsx)(c.u, {
    text: null != S ? S : V,
    "aria-label": null != S ? S : V,
    children: (0, r.jsx)(u.P3F, {
      className: o()(v.wishlistButton, a),
      innerRef: j,
      onClick: B,
      "aria-label": V,
      children: (0, r.jsx)(Z, {
        colorClass: F,
        size: "custom",
        height: s,
        width: s
      })
    })
  }, "wishlist-button-hovering-".concat(b)) : null
}