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
    cardSize: t = w.Y.MEDIUM
  } = e, r = i.useRef(null), l = i.useRef(null);
  return (0, n.jsx)("div", {
    ref: r,
    className: R.kL,
    children: (0, n.jsx)("div", {
      ref: l,
      className: s()(R.Nr, R.Yf, {
        [R.IU]: t === w.Y.SMALL,
        [R.Sd]: t === w.Y.LARGE
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
    cardSize: r = w.Y.SMALL,
    remainingCount: l,
    onClick: o,
    renderItemPreview: a
  } = e, u = i.useRef(null), c = i.useRef(null), {
    isHoveringOrFocusing: f
  } = (0, I.A)(c), m = true === t.isOwned;
  return (0, n.jsx)("div", {
    ref: u,
    className: R.kL,
    children: (0, n.jsx)(d.DUT, {
      tag: "div",
      innerRef: c,
      onClick: o,
      className: s()(R.Nr, R.xJ, {
        [R.IU]: r === w.Y.SMALL
      }),
      children: (0, n.jsxs)("div", {
        className: s()(R.ho, R.jP),
        children: [a(!m && f), (0, n.jsx)("div", {
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
    giftingOrigin: M = v.vQ.USER_PROFILE_WISHLIST,
    onWishlistItemClick: N,
    cardSize: T = w.Y.MEDIUM,
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
    analyticsLocations: D
  } = (0, m.Ay)(...null != C ? C : []), Y = (0, o.zy)(), z = i.useRef(null), {
    isHoveringOrFocusing: G
  } = (0, I.A)(z), [B] = (0, c.yK)([b.A], () => [b.A.hasSentGift(H.skuId, l.id)], [H.skuId, l.id]), W = B || true === H.isOwned, V = null != H.bundleItems && H.bundleItems.length > 0, Z = (() => {
    if (V) return x.intl.formatToPlainString(x.t["/l2CAE"], {
      itemName: H.skuName
    });
    let e = H.collectiblesItem.type;
    switch (e) {
      case a.R.AVATAR_DECORATION:
        return x.intl.formatToPlainString(x.t.IQQYef, {
          itemName: H.skuName
        });
      case a.R.PROFILE_EFFECT:
        return x.intl.formatToPlainString(x.t["x/MGWy"], {
          itemName: H.skuName
        });
      case a.R.NAMEPLATE:
        return x.intl.formatToPlainString(x.t.eVNt6E, {
          itemName: H.skuName
        });
      default:
        (0, E.xb)(e)
    }
  })(), q = F || W ? x.intl.string(x.t.FdGl5A) : x.intl.string(x.t.ilhtIa), J = F || W ? true : d.okO, K = i.useCallback(() => {
    let e = Y.pathname.startsWith(P.BVt.COLLECTIBLES_SHOP);
    if (F || W) {
      let t = !F && W;
      if (e) {
        let e = h.A.getProduct(H.skuId),
          r = h.A.getCategoryForProduct(H.skuId);
        if (null != e && null != r) {
          t || (0, L.closeUserProfileModal)(), (0, g.t)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, O.Ak)({
              product: e
            }),
            analyticsLocations: D,
            analyticsSource: f.A.USER_PROFILE_WISHLIST,
            returnRef: true,
            tab: true
          });
          return
        }
      }
      t || (0, L.closeUserProfileModal)(), (0, S.pX)("".concat(P.BVt.COLLECTIBLES_SHOP, "#itemSkuId=").concat(H.skuId))
    } else null == N || N(), (0, y.A)({
      skuId: H.skuId,
      isGift: true,
      giftingOrigin: M,
      analyticsLocations: D,
      giftRecipient: l,
      variantsReturnStyle: u.g.VARIANTS_GROUP
    })
  }, [Y.pathname, H.skuId, D, F, W, l, M, N]), Q = i.useCallback(() => V || !s ? null : k === j.uS.WISHLIST ? (0, n.jsx)("div", {
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
  }) : null, [V, s, k]), X = i.useCallback(() => {
    if (V) {
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
    return (0, n.jsx)(A.A, {
      item: H,
      profileOwner: l,
      isHighlighted: G && !_,
      cardSize: T
    })
  }, [V, H, l, G, T, _]);
  return (0, n.jsx)(w.A, (t = function(e) {
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
    cardRef: z,
    accessibleLabel: Z,
    onCardClick: K,
    buttonCTALabel: q,
    buttonIcon: J,
    isOwned: W,
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