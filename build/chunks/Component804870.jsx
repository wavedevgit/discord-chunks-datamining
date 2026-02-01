/** Chunk was on 13696 **/
/** chunk id: 804870, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ay: () => C,
  Zu: () => N,
  uz: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk960488 = require("./960488.js"),
  Chunk575593 = require("./575593.js"),
  Chunk635358 = require("./635358.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk572595 = require("./572595.jsx"),
  Chunk245068 = require("./245068.jsx"),
  Chunk57020 = require("./57020.js"),
  Chunk713517 = require("./713517.js"),
  Chunk44120 = require("./44120.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk111085 = require("./111085.js"),
  Chunk594832 = require("./594832.js"),
  Chunk403362 = require("./403362.js"),
  Chunk657331 = require("./657331.js"),
  Chunk353157 = require("./353157.jsx"),
  Chunk242640 = require("./242640.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk752276 = require("./752276.js"),
  Chunk476324 = require("./476324.js");
let M = e => {
  let {
    size: t = d._3J.SIZE_80
  } = e;
  return (0, n.jsx)(d.euF, {
    className: R.RH,
    src: k,
    size: t,
    "aria-label": x.intl.string(x.t.lqaIxI)
  })
};

function N(e) {
  let {
    cardSize: t = v.Y.MEDIUM
  } = e, r = i.useRef(null), l = i.useRef(null);
  return (0, n.jsx)("div", {
    ref: r,
    className: R.kL,
    children: (0, n.jsx)("div", {
      ref: l,
      className: s()(R.Nr, R.Yf, {
        [R.IU]: t === v.Y.SMALL,
        [R.Sd]: t === v.Y.LARGE
      }),
      children: (0, n.jsx)("div", {
        className: R.ho,
        children: (0, n.jsx)("div", {
          className: R._P,
          children: (0, n.jsx)(M, {
            size: d._3J.SIZE_80
          })
        })
      })
    })
  })
}

function T(e) {
  let {
    item: t,
    cardSize: r = v.Y.SMALL,
    remainingCount: l,
    onClick: o,
    renderItemPreview: u
  } = e, a = i.useRef(null), c = i.useRef(null), {
    isHoveringOrFocusing: f
  } = (0, O.A)(c), m = true === t.isOwned;
  return (0, n.jsx)("div", {
    ref: a,
    className: R.kL,
    children: (0, n.jsx)(d.DUT, {
      tag: "div",
      innerRef: c,
      onClick: o,
      className: s()(R.Nr, R.xJ, {
        [R.IU]: r === v.Y.SMALL
      }),
      children: (0, n.jsxs)("div", {
        className: s()(R.ho, R.jP),
        children: [u(!m && f), (0, n.jsx)("div", {
          className: R.RF,
          children: (0, n.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "always-white",
            children: x.intl.format(x.t.F6iMs4, {
              count: l
            })
          })
        })]
      })
    })
  })
}

function C(e) {
  var t, r;
  let {
    profileOwner: l,
    showIcons: s = false,
    source: k = j.uS.WISHLIST,
    giftingOrigin: M = P.vQ.USER_PROFILE_WISHLIST,
    onWishlistItemClick: N,
    cardSize: T = v.Y.MEDIUM,
    analyticsLocations: C,
    isDragging: _ = false
  } = e, U = function(e, t) {
    if (null == e) return {};
    var r, n, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          l = Object.getOwnPropertyNames(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }(e, ["profileOwner", "showIcons", "source", "giftingOrigin", "onWishlistItemClick", "cardSize", "analyticsLocations", "isDragging"]), {
    item: H,
    isOwner: F
  } = U, {
    analyticsLocations: z
  } = (0, m.Ay)(...null != C ? C : []), D = (0, o.zy)(), Y = i.useRef(null), {
    isHoveringOrFocusing: G
  } = (0, O.A)(Y), [W] = (0, c.yK)([b.A], () => [b.A.hasSentGift(H.skuId, l.id)], [H.skuId, l.id]), B = W || true === H.isOwned, Z = null != H.bundleItems && H.bundleItems.length > 0, V = (() => {
    if (Z) return x.intl.formatToPlainString(x.t["/l2CAE"], {
      itemName: H.skuName
    });
    let e = H.collectiblesItem.type;
    switch (e) {
      case u.R.AVATAR_DECORATION:
        return x.intl.formatToPlainString(x.t.IQQYef, {
          itemName: H.skuName
        });
      case u.R.PROFILE_EFFECT:
        return x.intl.formatToPlainString(x.t["x/MGWy"], {
          itemName: H.skuName
        });
      case u.R.NAMEPLATE:
        return x.intl.formatToPlainString(x.t.eVNt6E, {
          itemName: H.skuName
        });
      default:
        (0, A.xb)(e)
    }
  })(), q = F || B ? x.intl.string(x.t.FdGl5A) : x.intl.string(x.t.ilhtIa), J = F || B ? true : d.okO, K = i.useCallback(() => {
    let e = D.pathname.startsWith(w.BVt.COLLECTIBLES_SHOP);
    if (F || B) {
      let t = !F && B;
      if (e) {
        let e = g.A.getProduct(H.skuId),
          r = g.A.getCategoryForProduct(H.skuId);
        if (null != e && null != r) {
          t || (0, L.closeUserProfileModal)(), (0, h.t)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, I.Ak)({
              product: e
            }),
            analyticsLocations: z,
            analyticsSource: f.A.USER_PROFILE_WISHLIST,
            returnRef: true,
            tab: true
          });
          return
        }
      }
      t || (0, L.closeUserProfileModal)(), (0, y.pX)("".concat(w.BVt.COLLECTIBLES_SHOP, "#itemSkuId=").concat(H.skuId))
    } else null == N || N(), (0, S.A)({
      skuId: H.skuId,
      isGift: true,
      giftingOrigin: M,
      analyticsLocations: z,
      giftRecipient: l,
      variantsReturnStyle: a.g.VARIANTS_GROUP
    })
  }, [D.pathname, H.skuId, z, F, B, l, M, N]), Q = i.useCallback(() => Z || !s ? null : k === j.uS.WISHLIST ? (0, n.jsx)("div", {
    className: R.Fx,
    children: (0, n.jsx)(d.C3E, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: R.Be
    })
  }) : k === j.uS.POPULAR ? (0, n.jsx)("div", {
    className: R.Fx,
    children: (0, n.jsx)(d.Y3C, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: R.rY
    })
  }) : null, [Z, s, k]), X = i.useCallback(() => {
    if (Z) {
      let e = {
        items: H.bundleItems
      };
      return (0, n.jsx)("div", {
        className: R.hT,
        children: (0, n.jsx)(p.X, {
          product: e,
          isHighlighted: G && !_,
          user: l
        })
      })
    }
    return (0, n.jsx)(E.A, {
      item: H,
      profileOwner: l,
      isHighlighted: G && !_,
      cardSize: T
    })
  }, [Z, H, l, G, T, _]);
  return (0, n.jsx)(v.A, (t = function(e) {
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
  }({}, U), r = r = {
    cardRef: Y,
    accessibleLabel: V,
    onCardClick: K,
    buttonCTALabel: q,
    buttonIcon: J,
    isOwned: B,
    renderItemPreview: X,
    renderSourceIcon: Q,
    giftingOrigin: M,
    source: k,
    cardSize: T
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}