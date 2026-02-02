/** Chunk was on 65442 **/
/** chunk id: 804870, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ay: () => _,
  Zu: () => N,
  uz: () => k
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
let C = e => {
  let {
    size: t = d._3J.SIZE_80
  } = e;
  return (0, n.jsx)(d.euF, {
    className: R.RH,
    src: T,
    size: t,
    "aria-label": P.intl.string(P.t.lqaIxI)
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
          children: (0, n.jsx)(C, {
            size: d._3J.SIZE_80
          })
        })
      })
    })
  })
}

function k(e) {
  let {
    item: t,
    cardSize: r = v.Y.SMALL,
    remainingCount: l,
    onClick: a,
    renderItemPreview: u
  } = e, o = i.useRef(null), c = i.useRef(null), {
    isHoveringOrFocusing: f
  } = (0, S.A)(c), h = true === t.isOwned;
  return (0, n.jsx)("div", {
    ref: o,
    className: R.kL,
    children: (0, n.jsx)(d.DUT, {
      tag: "div",
      innerRef: c,
      onClick: a,
      className: s()(R.Nr, R.xJ, {
        [R.IU]: r === v.Y.SMALL
      }),
      children: (0, n.jsxs)("div", {
        className: s()(R.ho, R.jP),
        children: [u(!h && f), (0, n.jsx)("div", {
          className: R.RF,
          children: (0, n.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "always-white",
            children: P.intl.format(P.t.F6iMs4, {
              count: l
            })
          })
        })]
      })
    })
  })
}

function _(e) {
  var t, r;
  let {
    profileOwner: l,
    showIcons: s = false,
    source: T = A.uS.WISHLIST,
    giftingOrigin: C = w.vQ.USER_PROFILE_WISHLIST,
    onWishlistItemClick: N,
    cardSize: k = v.Y.MEDIUM,
    analyticsLocations: _,
    isDragging: M = false
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
    analyticsLocations: D
  } = (0, h.Ay)(...null != _ ? _ : []), Y = (0, a.zy)(), z = i.useRef(null), {
    isHoveringOrFocusing: G
  } = (0, S.A)(z), [B] = (0, c.yK)([j.A], () => [j.A.hasSentGift(F.skuId, l.id)], [F.skuId, l.id]), Z = B || true === F.isOwned, W = null != F.bundleItems && F.bundleItems.length > 0, V = (() => {
    if (W) return P.intl.formatToPlainString(P.t["/l2CAE"], {
      itemName: F.skuName
    });
    let e = F.collectiblesItem.type;
    switch (e) {
      case u.R.AVATAR_DECORATION:
        return P.intl.formatToPlainString(P.t.IQQYef, {
          itemName: F.skuName
        });
      case u.R.PROFILE_EFFECT:
        return P.intl.formatToPlainString(P.t["x/MGWy"], {
          itemName: F.skuName
        });
      case u.R.NAMEPLATE:
        return P.intl.formatToPlainString(P.t.eVNt6E, {
          itemName: F.skuName
        });
      default:
        (0, y.xb)(e)
    }
  })(), J = H || Z ? P.intl.string(P.t.FdGl5A) : P.intl.string(P.t.ilhtIa), q = H || Z ? true : d.okO, K = i.useCallback(() => {
    let e = Y.pathname.startsWith(x.BVt.COLLECTIBLES_SHOP);
    if (H || Z) {
      let t = !H && Z;
      if (e) {
        let e = m.A.getProduct(F.skuId),
          r = m.A.getCategoryForProduct(F.skuId);
        if (null != e && null != r) {
          t || (0, b.closeUserProfileModal)(), (0, g.t)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, p.Ak)({
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
      t || (0, b.closeUserProfileModal)(), (0, E.pX)("".concat(x.BVt.COLLECTIBLES_SHOP, "#itemSkuId=").concat(F.skuId))
    } else null == N || N(), (0, O.A)({
      skuId: F.skuId,
      isGift: true,
      giftingOrigin: C,
      analyticsLocations: D,
      giftRecipient: l,
      variantsReturnStyle: o.g.VARIANTS_GROUP
    })
  }, [Y.pathname, F.skuId, D, H, Z, l, C, N]), Q = i.useCallback(() => W || !s ? null : T === A.uS.WISHLIST ? (0, n.jsx)("div", {
    className: R.Fx,
    children: (0, n.jsx)(d.C3E, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: R.Be
    })
  }) : T === A.uS.POPULAR ? (0, n.jsx)("div", {
    className: R.Fx,
    children: (0, n.jsx)(d.Y3C, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: R.rY
    })
  }) : null, [W, s, T]), X = i.useCallback(() => {
    if (W) {
      let e = {
        items: F.bundleItems
      };
      return (0, n.jsx)("div", {
        className: R.hT,
        children: (0, n.jsx)(I.X, {
          product: e,
          isHighlighted: G && !M,
          user: l
        })
      })
    }
    return (0, n.jsx)(L.A, {
      item: F,
      profileOwner: l,
      isHighlighted: G && !M,
      cardSize: k
    })
  }, [W, F, l, G, k, M]);
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
    cardRef: z,
    accessibleLabel: V,
    onCardClick: K,
    buttonCTALabel: J,
    buttonIcon: q,
    isOwned: Z,
    renderItemPreview: X,
    renderSourceIcon: Q,
    giftingOrigin: C,
    source: T,
    cardSize: k
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