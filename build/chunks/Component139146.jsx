/** Chunk was on web.js **/
/** chunk id: 139146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => C,
  _: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk554146 = require("./554146.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk713517 = require("./713517.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk622543 = require("./622543.js"),
  Chunk661492 = require("./661492.js"),
  Chunk808247 = require("./808247.js"),
  Chunk594832 = require("./594832.js"),
  Chunk287809 = require("./287809.js"),
  Chunk466459 = require("./466459.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk394236 = require("./394236.js");

function A(e, t, n) {
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
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = e => {
  let {
    product: t,
    iconSize: n = 20,
    className: a,
    enableHoverEffect: l = false,
    isCardHovered: c = true,
    selectedVariantIndex: d
  } = e, f = i.useMemo(() => {
    var e;
    return t.type === o.R.VARIANTS_GROUP && null != d && (null == (e = t.variants) ? true : e[d]) != null ? t.variants[d] : t
  }, [t, d]), p = f.skuId, {
    isPurchased: _
  } = (0, y.h)(f), m = i.useMemo(() => {
    let e = "6/4";
    switch (t.type) {
      case o.R.NAMEPLATE:
      case o.R.AVATAR_DECORATION:
        e = "16/9";
        break;
      case o.R.BUNDLE:
      case o.R.PROFILE_EFFECT:
      default:
        e = "6/4"
    }
    return {
      type: "dynamic",
      component: u.Oz7.COLLECTIBLES_PREVIEW,
      aspectRatio: e,
      props: {
        product: t,
        forCollectedModal: true
      }
    }
  }, [t]);
  return _ ? null : (0, h.q)(f) ? (0, r.jsx)(N, {
    skuId: p,
    className: s()(l && v.FU, a),
    iconSize: n,
    isCardHovered: c,
    nuxGraphic: m
  }) : (0, r.jsx)(N, {
    skuId: p,
    className: s()(v.NY, a),
    iconSize: n,
    isCardHovered: c,
    disabled: true,
    tooltipOverrideText: O.intl.string(O.t["50TX9k"]),
    nuxGraphic: m
  })
};

function N(e) {
  let {
    skuId: t,
    className: a,
    iconSize: o = 20,
    disabled: h,
    isCardHovered: y,
    tooltipOverrideText: A,
    nuxGraphic: S,
    onClick: C
  } = e, [N, w] = (0, p.kn)([l.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), R = N === l.M.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    analyticsLocations: P
  } = (0, d.Ay)(), D = E.default.getCurrentUser(), x = null != D ? _.A.getFirstWishlistId(D.id) : null, L = (0, g.rJ)(x, t), j = i.useRef(null), [M, k] = i.useState(null);
  i.useEffect(() => {
    k(null)
  }, [t]);
  let U = null !== M ? M : L,
    G = (0, f.M)(j),
    V = U ? u.C3E : u.yhu,
    F = U || G ? v.Pc : v.i7,
    B = i.useCallback(async e => {
      if (e.stopPropagation(), null == C || C(), U && null != x) {
        k(false);
        try {
          await m.A.removeSkuFromWishlist(x, t, P), k(null)
        } catch (e) {
          k(null), (0, u.showToast)((0, u.createToast)(O.intl.string(O.t.F8FvUy), u.ToastType.FAILURE)), u.ORC.announce(O.intl.string(O.t.F8FvUy))
        }
      } else {
        k(true);
        try {
          await m.A.addSkuToWishlist(t, P), k(null), R && null != S && ((0, u.mMO)(async () => {
            let {
              default: e
            } = await n.e("64581").then(n.bind(n, 38884));
            return t => (0, r.jsx)(e, T(I({}, t), {
              graphic: S
            }))
          }), w(b.i.USER_DISMISS))
        } catch (e) {
          k(null), (0, u.showToast)((0, u.createToast)(O.intl.string(O.t.F8FvUy), u.ToastType.FAILURE)), u.ORC.announce(O.intl.string(O.t.F8FvUy))
        }
      }
    }, [U, x, t, P, R, S, w, C]),
    H = U ? O.intl.string(O.t.yr9TTf) : O.intl.string(O.t["8DkMEQ"]);
  return (y || U) && null != D ? h ? (0, r.jsx)(c.m_, {
    text: null != A ? A : H,
    "aria-label": null != A ? A : H,
    children: (0, r.jsx)(u.DUT, {
      className: s()(v.ij, v.NY, a),
      innerRef: j,
      onClick: e => e.stopPropagation(),
      "aria-disabled": true,
      children: (0, r.jsx)(V, {
        colorClass: v.rM,
        size: "custom",
        height: o,
        width: o
      })
    })
  }) : R ? (0, r.jsx)(c.un, {
    title: O.intl.string(O.t["47Rhc3"]),
    body: O.intl.string(O.t.PXjA0b),
    "aria-label": H,
    children: (0, r.jsx)(u.DUT, {
      className: s()(v.ij, a),
      innerRef: j,
      onClick: B,
      "aria-label": H,
      children: (0, r.jsx)(V, {
        colorClass: F,
        size: "custom",
        height: o,
        width: o
      })
    })
  }) : (0, r.jsx)(c.m_, {
    text: null != A ? A : H,
    "aria-label": null != A ? A : H,
    children: (0, r.jsx)(u.DUT, {
      className: s()(v.ij, a),
      innerRef: j,
      onClick: B,
      "aria-label": H,
      children: (0, r.jsx)(V, {
        colorClass: F,
        size: "custom",
        height: o,
        width: o
      })
    })
  }, "wishlist-button-hovering-".concat(y)) : null
}