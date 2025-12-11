/** Chunk was on web.js **/
/** chunk id: 143941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => R,
  s: () => w
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
  Chunk285980 = require("./285980.js"),
  Chunk320103 = require("./320103.js"),
  Chunk277511 = require("./277511.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk884697 = require("./884697.js"),
  Chunk724994 = require("./724994.js"),
  Chunk27123 = require("./27123.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk964517 = require("./964517.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = e => {
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
  } = (0, O.L)(f), g = (0, m.$)({
    location: "WishlistButton"
  }), E = i.useMemo(() => {
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
  if (_) return null;
  if (!(0, h.p)(f, g)) {
    let e = I.intl.string(I.t["50TX9k"]);
    return (0, y.x6)(f) ? e = I.intl.string(I.t.UfDp3L) : (0, v.r1)(f) && !g && (e = I.intl.string(I.t.KsFBMs)), (0, r.jsx)(w, {
      skuId: p,
      className: o()(T.disabledButton, a),
      iconSize: n,
      isCardHovered: c,
      disabled: true,
      tooltipOverrideText: e,
      nuxGraphic: E
    })
  }
  return (0, r.jsx)(w, {
    skuId: p,
    className: o()(l && T.withHover, a),
    iconSize: n,
    isCardHovered: c,
    nuxGraphic: E
  })
};

function w(e) {
  let {
    skuId: t,
    className: a,
    iconSize: s = 20,
    disabled: m,
    isCardHovered: h,
    tooltipOverrideText: y,
    nuxGraphic: O,
    onClick: v
  } = e, [C, N] = (0, p.US)([l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), R = C === l.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    analyticsLocations: w
  } = (0, d.ZP)(), D = b.default.getCurrentUser(), x = null != D ? _.Z.getFirstWishlistId(D.id) : null, L = (0, E.ny)(x, t), j = i.useRef(null), [M, k] = i.useState(null);
  i.useEffect(() => {
    k(null)
  }, [t]);
  let U = null !== M ? M : L,
    G = (0, f.X)(j),
    Z = U ? u.h_8 : u.Pzh,
    B = U || G ? T.wishlistedOrHoveredIconColor : T.normalIconColor,
    F = i.useCallback(async e => {
      if (e.stopPropagation(), null == v || v(), U && null != x) {
        k(false);
        try {
          await g.Z.removeSkuFromWishlist(x, t, w), k(null)
        } catch (e) {
          k(null), (0, u.showToast)((0, u.createToast)(I.intl.string(I.t.F8FvUy), u.ToastType.FAILURE)), u.uvj.announce(I.intl.string(I.t.F8FvUy))
        }
      } else {
        k(true);
        try {
          await g.Z.addSkuToWishlist(t, w), k(null), R && null != O && ((0, u.ZDy)(async () => {
            let {
              default: e
            } = await n.e("36340").then(n.bind(n, 874533));
            return t => (0, r.jsx)(e, P(A({}, t), {
              graphic: O
            }))
          }), N(S.L.USER_DISMISS))
        } catch (e) {
          k(null), (0, u.showToast)((0, u.createToast)(I.intl.string(I.t.F8FvUy), u.ToastType.FAILURE)), u.uvj.announce(I.intl.string(I.t.F8FvUy))
        }
      }
    }, [U, x, t, w, R, O, N, v]),
    V = U ? I.intl.string(I.t.yr9TTf) : I.intl.string(I.t["8DkMEQ"]);
  return (h || U) && null != D ? m ? (0, r.jsx)(c.u, {
    text: null != y ? y : V,
    "aria-label": null != y ? y : V,
    children: (0, r.jsx)(u.P3F, {
      className: o()(T.wishlistButton, T.disabledButton, a),
      innerRef: j,
      onClick: e => e.stopPropagation(),
      "aria-disabled": true,
      children: (0, r.jsx)(Z, {
        colorClass: T.disabledIconColor,
        size: "custom",
        height: s,
        width: s
      })
    })
  }) : R ? (0, r.jsx)(c.i_, {
    title: I.intl.string(I.t["47Rhc3"]),
    body: I.intl.string(I.t.PXjA0b),
    "aria-label": V,
    children: (0, r.jsx)(u.P3F, {
      className: o()(T.wishlistButton, a),
      innerRef: j,
      onClick: F,
      "aria-label": V,
      children: (0, r.jsx)(Z, {
        colorClass: B,
        size: "custom",
        height: s,
        width: s
      })
    })
  }) : (0, r.jsx)(c.u, {
    text: null != y ? y : V,
    "aria-label": null != y ? y : V,
    children: (0, r.jsx)(u.P3F, {
      className: o()(T.wishlistButton, a),
      innerRef: j,
      onClick: F,
      "aria-label": V,
      children: (0, r.jsx)(Z, {
        colorClass: B,
        size: "custom",
        height: s,
        width: s
      })
    })
  }, "wishlist-button-hovering-".concat(h)) : null
}