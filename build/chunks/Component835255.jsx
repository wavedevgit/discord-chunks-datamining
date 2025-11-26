/** Chunk was on 13587 **/
/** chunk id: 835255, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  BO: () => Z,
  ZP: () => A,
  w_: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk237031 = require("./237031.jsx"),
  Chunk956472 = require("./956472.js"),
  Chunk104505 = require("./104505.js"),
  Chunk333867 = require("./333867.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk89196 = require("./89196.js"),
  Chunk602733 = require("./602733.js"),
  Chunk823379 = require("./823379.js"),
  Chunk892001 = require("./892001.js"),
  Chunk221300 = require("./221300.jsx"),
  Chunk688192 = require("./688192.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk232644 = require("./232644.js"),
  Chunk660097 = require("./660097.js");
let x = e => {
  let {
    size: t = d.EFr.SIZE_80
  } = e;
  return (0, n.jsx)(d.qEK, {
    className: k.placeholderAvatar,
    src: M,
    size: t,
    "aria-label": C.intl.string(C.t.lqaIxI)
  })
};

function T(e) {
  let {
    cardSize: t = w.U.MEDIUM
  } = e, r = i.useRef(null), l = i.useRef(null);
  return (0, n.jsx)("div", {
    ref: r,
    className: k.container,
    children: (0, n.jsx)("div", {
      ref: l,
      className: o()(k.card, k.placeholderCard, {
        [k.smallCard]: t === w.U.SMALL,
        [k.largeCard]: t === w.U.LARGE
      }),
      children: (0, n.jsx)("div", {
        className: k.cardPreview,
        children: (0, n.jsx)("div", {
          className: k.avatarDecorationPreview,
          children: (0, n.jsx)(x, {
            size: d.EFr.SIZE_80
          })
        })
      })
    })
  })
}

function Z(e) {
  let {
    item: t,
    cardSize: r = w.U.SMALL,
    remainingCount: l,
    onClick: s,
    renderItemPreview: c
  } = e, a = i.useRef(null), u = i.useRef(null), {
    isHoveringOrFocusing: f
  } = (0, I.Z)(u), m = true === t.isOwned;
  return (0, n.jsx)("div", {
    ref: a,
    className: k.container,
    children: (0, n.jsx)(d.P3F, {
      tag: "div",
      innerRef: u,
      onClick: s,
      className: o()(k.card, k.seeMoreCard, {
        [k.smallCard]: r === w.U.SMALL
      }),
      children: (0, n.jsxs)("div", {
        className: o()(k.cardPreview, k.seeMoreCardPreview),
        children: [c(!m && f), (0, n.jsx)("div", {
          className: k.seeMoreOverlay,
          children: (0, n.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "always-white",
            children: C.intl.format(C.t.F6iMs4, {
              count: l
            })
          })
        })]
      })
    })
  })
}

function A(e) {
  var t, r, {
      profileOwner: l,
      showIcons: o = false,
      source: M = P.lr.WISHLIST,
      giftingOrigin: x = E.Wt.USER_PROFILE_WISHLIST,
      onWishlistItemClick: T,
      cardSize: Z = w.U.MEDIUM
    } = e,
    A = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          l = Object.keys(e);
        for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["profileOwner", "showIcons", "source", "giftingOrigin", "onWishlistItemClick", "cardSize"]);
  let {
    item: R,
    isOwner: _
  } = A, {
    analyticsLocations: N
  } = (0, m.ZP)(), U = (0, s.TH)(), F = i.useRef(null), {
    isHoveringOrFocusing: H
  } = (0, I.Z)(F), [W] = (0, u.Wu)([b.Z], () => [b.Z.hasSentGift(R.skuId, l.id)], [R.skuId, l.id]), D = W || true === R.isOwned, G = R.collectiblesItem.type, z = (() => {
    switch (G) {
      case c.Z.AVATAR_DECORATION:
        return C.intl.formatToPlainString(C.t.IQQYef, {
          itemName: R.skuName
        });
      case c.Z.PROFILE_EFFECT:
        return C.intl.formatToPlainString(C.t["x/MGWy"], {
          itemName: R.skuName
        });
      case c.Z.NAMEPLATE:
        return C.intl.formatToPlainString(C.t.eVNt6E, {
          itemName: R.skuName
        });
      default:
        (0, y.vE)(G)
    }
  })(), B = _ || D ? C.intl.string(C.t.FdGl5A) : C.intl.string(C.t.ilhtIa), q = _ || D ? true : d.OgN, Q = i.useCallback(() => {
    let e = U.pathname.startsWith(j.Z5c.COLLECTIBLES_SHOP);
    if (_ || D) {
      let t = !_ && D;
      if (e) {
        let e = O.Z.getProduct(R.skuId),
          r = O.Z.getCategoryForProduct(R.skuId);
        if (null != e && null != r) {
          t || (0, v.closeUserProfileModal)(), (0, h.T)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, p.oQ)({
              product: e
            }),
            analyticsLocations: N,
            analyticsSource: f.Z.USER_PROFILE_WISHLIST,
            returnRef: true,
            tab: true
          });
          return
        }
      }
      t || (0, v.closeUserProfileModal)(), (0, S.uL)("".concat(j.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(R.skuId))
    } else null == T || T(), (0, g.Z)({
      skuId: R.skuId,
      isGift: true,
      giftingOrigin: x,
      analyticsLocations: N,
      giftRecipient: l,
      variantsReturnStyle: a.v.VARIANTS_GROUP
    })
  }, [U.pathname, R.skuId, N, _, D, l, x, T]), Y = i.useCallback(() => o ? M === P.lr.WISHLIST ? (0, n.jsx)("div", {
    className: k.itemIcon,
    children: (0, n.jsx)(d.h_8, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: k.itemIconHeart
    })
  }) : M === P.lr.POPULAR ? (0, n.jsx)("div", {
    className: k.itemIcon,
    children: (0, n.jsx)(d.YqE, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: k.itemIconShop
    })
  }) : null : null, [o, M]), V = i.useCallback(() => (0, n.jsx)(L.Z, {
    item: R,
    profileOwner: l,
    isHighlighted: H,
    cardSize: Z
  }), [R, l, H, Z]);
  return (0, n.jsx)(w.Z, (t = function(e) {
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
  }({}, A), r = r = {
    cardRef: F,
    accessibleLabel: z,
    onCardClick: Q,
    buttonCTALabel: B,
    buttonIcon: q,
    isOwned: D,
    renderItemPreview: V,
    renderSourceIcon: Y,
    giftingOrigin: x,
    source: M,
    cardSize: Z
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