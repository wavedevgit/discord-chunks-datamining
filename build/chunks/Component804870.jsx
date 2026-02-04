/** Chunk was on 95320 **/
/** chunk id: 804870, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ay: () => N,
  Zu: () => k,
  uz: () => M
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
let _ = e => {
  let {
    size: t = d._3J.SIZE_80
  } = e;
  return (0, n.jsx)(d.euF, {
    className: R.RH,
    src: T,
    size: t,
    "aria-label": x.intl.string(x.t.lqaIxI)
  })
};

function k(e) {
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
          children: (0, n.jsx)(_, {
            size: d._3J.SIZE_80
          })
        })
      })
    })
  })
}

function M(e) {
  let {
    item: t,
    cardSize: r = v.Y.SMALL,
    remainingCount: l,
    onClick: o,
    renderItemPreview: u
  } = e, a = i.useRef(null), c = i.useRef(null), {
    isHoveringOrFocusing: f
  } = (0, S.A)(c), g = true === t.isOwned;
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
        children: [u(!g && f), (0, n.jsx)("div", {
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

function N(e) {
  var t, r;
  let {
    profileOwner: l,
    showIcons: s = false,
    source: T = L.uS.WISHLIST,
    giftingOrigin: _ = w.vQ.USER_PROFILE_WISHLIST,
    onWishlistItemClick: k,
    cardSize: M = v.Y.MEDIUM,
    analyticsLocations: N,
    isDragging: C = false
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
    item: F,
    isOwner: H
  } = U, {
    analyticsLocations: Y
  } = (0, g.Ay)(...null != N ? N : []), z = (0, o.zy)(), D = i.useRef(null), {
    isHoveringOrFocusing: G
  } = (0, S.A)(D), [W] = (0, c.yK)([b.A], () => [b.A.hasSentGift(F.skuId, l.id)], [F.skuId, l.id]), B = W || true === F.isOwned, V = null != F.bundleItems && F.bundleItems.length > 0, Z = (() => {
    if (V) return x.intl.formatToPlainString(x.t["/l2CAE"], {
      itemName: F.skuName
    });
    let e = F.collectiblesItem.type;
    switch (e) {
      case u.R.AVATAR_DECORATION:
        return x.intl.formatToPlainString(x.t.IQQYef, {
          itemName: F.skuName
        });
      case u.R.PROFILE_EFFECT:
        return x.intl.formatToPlainString(x.t["x/MGWy"], {
          itemName: F.skuName
        });
      case u.R.NAMEPLATE:
        return x.intl.formatToPlainString(x.t.eVNt6E, {
          itemName: F.skuName
        });
      default:
        (0, j.xb)(e)
    }
  })(), q = H || B ? x.intl.string(x.t.FdGl5A) : x.intl.string(x.t.ilhtIa), J = H || B ? true : d.okO, K = i.useCallback(() => {
    let e = z.pathname.startsWith(P.BVt.COLLECTIBLES_SHOP);
    if (H || B) {
      let t = !H && B;
      if (e) {
        let e = m.A.getProduct(F.skuId),
          r = m.A.getCategoryForProduct(F.skuId);
        if (null != e && null != r) {
          t || (0, A.closeUserProfileModal)(), (0, h.t)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, p.Ak)({
              product: e
            }),
            analyticsLocations: Y,
            analyticsSource: f.A.USER_PROFILE_WISHLIST,
            returnRef: true,
            tab: true
          });
          return
        }
      }
      t || (0, A.closeUserProfileModal)(), (0, y.pX)("".concat(P.BVt.COLLECTIBLES_SHOP, "#itemSkuId=").concat(F.skuId))
    } else null == k || k(), (0, O.A)({
      skuId: F.skuId,
      isGift: true,
      giftingOrigin: _,
      analyticsLocations: Y,
      giftRecipient: l,
      variantsReturnStyle: a.g.VARIANTS_GROUP
    })
  }, [z.pathname, F.skuId, Y, H, B, l, _, k]), Q = i.useCallback(() => V || !s ? null : T === L.uS.WISHLIST ? (0, n.jsx)("div", {
    className: R.Fx,
    children: (0, n.jsx)(d.C3E, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: R.Be
    })
  }) : T === L.uS.POPULAR ? (0, n.jsx)("div", {
    className: R.Fx,
    children: (0, n.jsx)(d.Y3C, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: R.rY
    })
  }) : null, [V, s, T]), X = i.useCallback(() => {
    if (V) {
      let e = {
        items: F.bundleItems
      };
      return (0, n.jsx)("div", {
        className: R.hT,
        children: (0, n.jsx)(I.X, {
          product: e,
          isHighlighted: G && !C,
          user: l
        })
      })
    }
    return (0, n.jsx)(E.A, {
      item: F,
      profileOwner: l,
      isHighlighted: G && !C,
      cardSize: M
    })
  }, [V, F, l, G, M, C]);
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
    cardRef: D,
    accessibleLabel: Z,
    onCardClick: K,
    buttonCTALabel: q,
    buttonIcon: J,
    isOwned: B,
    renderItemPreview: X,
    renderSourceIcon: Q,
    giftingOrigin: _,
    source: T,
    cardSize: M
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