/** Chunk was on 57575 **/
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
let M = e => {
  let {
    size: t = d.EFr.SIZE_80
  } = e;
  return (0, n.jsx)(d.qEK, {
    className: k.placeholderAvatar,
    src: x,
    size: t,
    "aria-label": T.intl.string(T.t.lqaIxI)
  })
};

function A(e) {
  let {
    cardSize: t = j.U.MEDIUM
  } = e, r = i.useRef(null), l = i.useRef(null);
  return (0, n.jsx)("div", {
    ref: r,
    className: k.container,
    children: (0, n.jsx)("div", {
      ref: l,
      className: o()(k.card, k.placeholderCard, {
        [k.smallCard]: t === j.U.SMALL,
        [k.largeCard]: t === j.U.LARGE
      }),
      children: (0, n.jsx)("div", {
        className: k.cardPreview,
        children: (0, n.jsx)("div", {
          className: k.avatarDecorationPreview,
          children: (0, n.jsx)(M, {
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
    cardSize: r = j.U.SMALL,
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
        [k.smallCard]: r === j.U.SMALL
      }),
      children: (0, n.jsxs)("div", {
        className: o()(k.cardPreview, k.seeMoreCardPreview),
        children: [c(!m && f), (0, n.jsx)("div", {
          className: k.seeMoreOverlay,
          children: (0, n.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "always-white",
            children: T.intl.format(T.t.F6iMs4, {
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
      source: x = y.lr.WISHLIST,
      giftingOrigin: M = C.Wt.USER_PROFILE_WISHLIST,
      onWishlistItemClick: A,
      cardSize: Z = j.U.MEDIUM
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
  } = (0, I.Z)(H), [D] = (0, u.Wu)([P.Z], () => [P.Z.hasSentGift(_.skuId, l.id)], [_.skuId, l.id]), G = D || true === _.isOwned, z = null != _.bundleItems && _.bundleItems.length > 0, B = (() => {
    if (z) return T.intl.formatToPlainString(T.t["/l2CAE"], {
      itemName: _.skuName
    });
    let e = _.collectiblesItem.type;
    switch (e) {
      case c.Z.AVATAR_DECORATION:
        return T.intl.formatToPlainString(T.t.IQQYef, {
          itemName: _.skuName
        });
      case c.Z.PROFILE_EFFECT:
        return T.intl.formatToPlainString(T.t["x/MGWy"], {
          itemName: _.skuName
        });
      case c.Z.NAMEPLATE:
        return T.intl.formatToPlainString(T.t.eVNt6E, {
          itemName: _.skuName
        });
      default:
        (0, v.vE)(e)
    }
  })(), q = N || G ? T.intl.string(T.t.FdGl5A) : T.intl.string(T.t.ilhtIa), Q = N || G ? true : d.OgN, Y = i.useCallback(() => {
    let e = F.pathname.startsWith(E.Z5c.COLLECTIBLES_SHOP);
    if (N || G) {
      let t = !N && G;
      if (e) {
        let e = h.Z.getProduct(_.skuId),
          r = h.Z.getCategoryForProduct(_.skuId);
        if (null != e && null != r) {
          t || (0, w.closeUserProfileModal)(), (0, O.T)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, g.oQ)({
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
      t || (0, w.closeUserProfileModal)(), (0, b.uL)("".concat(E.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(_.skuId))
    } else null == A || A(), (0, S.Z)({
      skuId: _.skuId,
      isGift: true,
      giftingOrigin: M,
      analyticsLocations: U,
      giftRecipient: l,
      variantsReturnStyle: a.v.VARIANTS_GROUP
    })
  }, [F.pathname, _.skuId, U, N, G, l, M, A]), V = i.useCallback(() => z || !o ? null : x === y.lr.WISHLIST ? (0, n.jsx)("div", {
    className: k.itemIcon,
    children: (0, n.jsx)(d.h_8, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: k.itemIconHeart
    })
  }) : x === y.lr.POPULAR ? (0, n.jsx)("div", {
    className: k.itemIcon,
    children: (0, n.jsx)(d.YqE, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: k.itemIconShop
    })
  }) : null, [z, o, x]), J = i.useCallback(() => {
    if (z) {
      let e = {
        items: _.bundleItems
      };
      return (0, n.jsx)("div", {
        className: k.bundlePreview,
        children: (0, n.jsx)(p.U, {
          product: e,
          isPurchased: G,
          isHighlighted: W,
          user: l
        })
      })
    }
    return (0, n.jsx)(L.Z, {
      item: _,
      profileOwner: l,
      isHighlighted: W,
      cardSize: Z
    })
  }, [z, _, l, G, W, Z]);
  return (0, n.jsx)(j.Z, (t = function(e) {
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
    giftingOrigin: M,
    source: x,
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