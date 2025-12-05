/** Chunk was on 13587 **/
/** chunk id: 835255, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  BO: () => Z,
  ZP: () => R,
  w_: () => A
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
  Chunk684263 = require("./684263.jsx"),
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
let T = e => {
  let {
    size: t = d.EFr.SIZE_80
  } = e;
  return (0, n.jsx)(d.qEK, {
    className: x.placeholderAvatar,
    src: M,
    size: t,
    "aria-label": k.intl.string(k.t.lqaIxI)
  })
};

function A(e) {
  let {
    cardSize: t = L.U.MEDIUM
  } = e, r = i.useRef(null), l = i.useRef(null);
  return (0, n.jsx)("div", {
    ref: r,
    className: x.container,
    children: (0, n.jsx)("div", {
      ref: l,
      className: o()(x.card, x.placeholderCard, {
        [x.smallCard]: t === L.U.SMALL,
        [x.largeCard]: t === L.U.LARGE
      }),
      children: (0, n.jsx)("div", {
        className: x.cardPreview,
        children: (0, n.jsx)("div", {
          className: x.avatarDecorationPreview,
          children: (0, n.jsx)(T, {
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
    cardSize: r = L.U.SMALL,
    remainingCount: l,
    onClick: s,
    renderItemPreview: c
  } = e, u = i.useRef(null), a = i.useRef(null), {
    isHoveringOrFocusing: f
  } = (0, g.Z)(a), m = true === t.isOwned;
  return (0, n.jsx)("div", {
    ref: u,
    className: x.container,
    children: (0, n.jsx)(d.P3F, {
      tag: "div",
      innerRef: a,
      onClick: s,
      className: o()(x.card, x.seeMoreCard, {
        [x.smallCard]: r === L.U.SMALL
      }),
      children: (0, n.jsxs)("div", {
        className: o()(x.cardPreview, x.seeMoreCardPreview),
        children: [c(!m && f), (0, n.jsx)("div", {
          className: x.seeMoreOverlay,
          children: (0, n.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "always-white",
            children: k.intl.format(k.t.F6iMs4, {
              count: l
            })
          })
        })]
      })
    })
  })
}

function R(e) {
  var t, r, {
      profileOwner: l,
      showIcons: o = false,
      source: M = v.lr.WISHLIST,
      giftingOrigin: T = C.Wt.USER_PROFILE_WISHLIST,
      onWishlistItemClick: A,
      cardSize: Z = L.U.MEDIUM
    } = e,
    R = function(e, t) {
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
    item: _,
    isOwner: N
  } = R, {
    analyticsLocations: U
  } = (0, m.ZP)(), F = (0, s.TH)(), H = i.useRef(null), {
    isHoveringOrFocusing: W
  } = (0, g.Z)(H), [D] = (0, a.Wu)([P.Z], () => [P.Z.hasSentGift(_.skuId, l.id)], [_.skuId, l.id]), G = D || true === _.isOwned, z = null != _.bundleItems && _.bundleItems.length > 0, B = (() => {
    if (z) return k.intl.formatToPlainString(k.t["/l2CAE"], {
      itemName: _.skuName
    });
    let e = _.collectiblesItem.type;
    switch (e) {
      case c.Z.AVATAR_DECORATION:
        return k.intl.formatToPlainString(k.t.IQQYef, {
          itemName: _.skuName
        });
      case c.Z.PROFILE_EFFECT:
        return k.intl.formatToPlainString(k.t["x/MGWy"], {
          itemName: _.skuName
        });
      case c.Z.NAMEPLATE:
        return k.intl.formatToPlainString(k.t.eVNt6E, {
          itemName: _.skuName
        });
      default:
        (0, y.vE)(e)
    }
  })(), q = N || G ? k.intl.string(k.t.FdGl5A) : k.intl.string(k.t.ilhtIa), Q = N || G ? true : d.OgN, Y = i.useCallback(() => {
    let e = F.pathname.startsWith(E.Z5c.COLLECTIBLES_SHOP);
    if (N || G) {
      let t = !N && G;
      if (e) {
        let e = O.Z.getProduct(_.skuId),
          r = O.Z.getCategoryForProduct(_.skuId);
        if (null != e && null != r) {
          t || (0, j.closeUserProfileModal)(), (0, h.T)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, I.oQ)({
              product: e
            }),
            analyticsLocations: U,
            analyticsSource: f.Z.USER_PROFILE_WISHLIST,
            returnRef: true,
            tab: true
          });
          return
        }
      }
      t || (0, j.closeUserProfileModal)(), (0, b.uL)("".concat(E.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(_.skuId))
    } else null == A || A(), (0, S.Z)({
      skuId: _.skuId,
      isGift: true,
      giftingOrigin: T,
      analyticsLocations: U,
      giftRecipient: l,
      variantsReturnStyle: u.v.VARIANTS_GROUP
    })
  }, [F.pathname, _.skuId, U, N, G, l, T, A]), V = i.useCallback(() => z || !o ? null : M === v.lr.WISHLIST ? (0, n.jsx)("div", {
    className: x.itemIcon,
    children: (0, n.jsx)(d.h_8, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: x.itemIconHeart
    })
  }) : M === v.lr.POPULAR ? (0, n.jsx)("div", {
    className: x.itemIcon,
    children: (0, n.jsx)(d.YqE, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: x.itemIconShop
    })
  }) : null, [z, o, M]), J = i.useCallback(() => {
    if (z) {
      let e = {
        items: _.bundleItems
      };
      return (0, n.jsx)("div", {
        className: x.bundlePreview,
        children: (0, n.jsx)(p.U, {
          product: e,
          isPurchased: G,
          isHighlighted: W,
          user: l
        })
      })
    }
    return (0, n.jsx)(w.Z, {
      item: _,
      profileOwner: l,
      isHighlighted: W,
      cardSize: Z
    })
  }, [z, _, l, G, W, Z]);
  return (0, n.jsx)(L.Z, (t = function(e) {
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
  }({}, R), r = r = {
    cardRef: H,
    accessibleLabel: B,
    onCardClick: Y,
    buttonCTALabel: q,
    buttonIcon: Q,
    isOwned: G,
    renderItemPreview: J,
    renderSourceIcon: V,
    giftingOrigin: T,
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