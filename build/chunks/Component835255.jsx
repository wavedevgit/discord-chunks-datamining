/** Chunk was on 93582 **/
/** chunk id: 835255, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  BO: () => M,
  ZP: () => R,
  w_: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
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
  Chunk51144 = require("./51144.js"),
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
    size: t = m.EFr.SIZE_80
  } = e;
  return (0, r.jsx)(m.qEK, {
    className: N.placeholderAvatar,
    src: B,
    size: t,
    "aria-label": L.intl.string(L.t.lqaIxI)
  })
};

function E(e) {
  let {
    cardSize: t = C.U.MEDIUM
  } = e, i = n.useRef(null), a = n.useRef(null);
  return (0, r.jsx)("div", {
    ref: i,
    className: N.container,
    children: (0, r.jsx)("div", {
      ref: a,
      className: l()(N.card, N.placeholderCard, {
        [N.smallCard]: t === C.U.SMALL,
        [N.largeCard]: t === C.U.LARGE
      }),
      children: (0, r.jsx)("div", {
        className: N.cardPreview,
        children: (0, r.jsx)("div", {
          className: N.avatarDecorationPreview,
          children: (0, r.jsx)(T, {
            size: m.EFr.SIZE_80
          })
        })
      })
    })
  })
}

function M(e) {
  let {
    item: t,
    cardSize: i = C.U.SMALL,
    remainingCount: a,
    onClick: s,
    renderItemPreview: o
  } = e, c = n.useRef(null), d = n.useRef(null), {
    isHoveringOrFocusing: u
  } = (0, _.Z)(d), f = true === t.isOwned;
  return (0, r.jsx)("div", {
    ref: c,
    className: N.container,
    children: (0, r.jsx)(m.P3F, {
      tag: "div",
      innerRef: d,
      onClick: s,
      className: l()(N.card, N.seeMoreCard, {
        [N.smallCard]: i === C.U.SMALL
      }),
      children: (0, r.jsxs)("div", {
        className: l()(N.cardPreview, N.seeMoreCardPreview),
        children: [o(!f && u), (0, r.jsx)("div", {
          className: N.seeMoreOverlay,
          children: (0, r.jsx)(m.Text, {
            variant: "text-md/medium",
            color: "always-white",
            children: L.intl.format(L.t.F6iMs4, {
              count: a
            })
          })
        })]
      })
    })
  })
}

function R(e) {
  var t, i, {
      profileOwner: a,
      showIcons: l = false,
      source: B = w.lr.WISHLIST,
      giftingOrigin: T = k.Wt.USER_PROFILE_WISHLIST,
      onWishlistItemClick: E,
      cardSize: M = C.U.MEDIUM
    } = e,
    R = function(e, t) {
      if (null == e) return {};
      var i, r, n = function(e, t) {
        if (null == e) return {};
        var i, r, n = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) i = a[r], t.indexOf(i) >= 0 || (n[i] = e[i]);
        return n
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) i = a[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i])
      }
      return n
    }(e, ["profileOwner", "showIcons", "source", "giftingOrigin", "onWishlistItemClick", "cardSize"]);
  let {
    item: Z,
    isOwner: A
  } = R, {
    analyticsLocations: H
  } = (0, h.ZP)(), W = (0, s.TH)(), G = n.useRef(null), {
    isHoveringOrFocusing: U
  } = (0, _.Z)(G), [D] = (0, d.Wu)([j.Z], () => [j.Z.hasSentGift(Z.skuId, a.id)], [Z.skuId, a.id]), z = D || true === Z.isOwned, F = Z.collectiblesItem.type, Y = (() => {
    switch (F) {
      case o.Z.AVATAR_DECORATION:
        return L.intl.formatToPlainString(L.t.IQQYef, {
          itemName: Z.skuName
        });
      case o.Z.PROFILE_EFFECT:
        return L.intl.formatToPlainString(L.t["x/MGWy"], {
          itemName: Z.skuName
        });
      case o.Z.NAMEPLATE:
        return L.intl.formatToPlainString(L.t.eVNt6E, {
          itemName: Z.skuName
        });
      default:
        (0, v.vE)(F)
    }
  })(), Q = A || z ? L.intl.string(L.t.FdGl5A) : L.intl.string(L.t.ilhtIa), q = A || z ? true : m.OgN, K = n.useCallback(() => {
    let e = W.pathname.startsWith(y.Z5c.COLLECTIBLES_SHOP);
    if (A || z) {
      let t = !A && z;
      if (e) {
        let e = p.Z.getProduct(Z.skuId),
          i = p.Z.getCategoryForProduct(Z.skuId);
        if (null != e && null != i) {
          t || (0, x.closeUserProfileModal)(), (0, g.T)({
            product: e,
            category: i,
            shouldCheckoutWithOrbs: (0, b.oQ)({
              product: e
            }),
            analyticsLocations: H,
            analyticsSource: f.Z.USER_PROFILE_WISHLIST,
            returnRef: true,
            tab: true
          });
          return
        }
      }
      t || (0, x.closeUserProfileModal)(), (0, O.uL)("".concat(y.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(Z.skuId))
    } else null == E || E(), (0, I.Z)({
      skuId: Z.skuId,
      isGift: true,
      giftingOrigin: T,
      analyticsLocations: H,
      giftRecipient: a,
      variantsReturnStyle: c.v.VARIANTS_GROUP
    })
  }, [W.pathname, Z.skuId, H, A, z, a, T, E]), X = n.useCallback(() => l ? B === w.lr.WISHLIST ? (0, r.jsx)("div", {
    className: N.itemIcon,
    children: (0, r.jsx)(u.u, {
      text: L.intl.formatToPlainString(L.t.p3RmJF, {
        username: S.ZP.getName(a)
      }),
      position: "top",
      children: (0, r.jsx)(m.h_8, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: N.itemIconHeart
      })
    })
  }) : B === w.lr.POPULAR ? (0, r.jsx)("div", {
    className: N.itemIcon,
    children: (0, r.jsx)(u.u, {
      text: L.intl.string(L.t.Ig6VDH),
      position: "top",
      children: (0, r.jsx)(m.YqE, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: N.itemIconShop
      })
    })
  }) : null : null, [l, B, a]), V = n.useCallback(() => (0, r.jsx)(P.Z, {
    item: Z,
    profileOwner: a,
    isHighlighted: U,
    cardSize: M
  }), [Z, a, U, M]);
  return (0, r.jsx)(C.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(i);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
        return Object.getOwnPropertyDescriptor(i, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = i[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, R), i = i = {
    cardRef: G,
    accessibleLabel: Y,
    onCardClick: K,
    buttonCTALabel: Q,
    buttonIcon: q,
    isOwned: z,
    renderItemPreview: V,
    renderSourceIcon: X,
    giftingOrigin: T,
    source: B,
    cardSize: M
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      i.push.apply(i, r)
    }
    return i
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
  }), t))
}