/** Chunk was on 94758 **/
/** chunk id: 835255, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => F,
  w: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk843611 = require("./843611.js"),
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
  Chunk215023 = require("./215023.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk232644 = require("./232644.js"),
  Chunk660097 = require("./660097.js");
let Z = e => {
  let {
    size: t = f.EFr.SIZE_80
  } = e;
  return (0, n.jsx)(f.qEK, {
    className: _.placeholderAvatar,
    src: C,
    size: t,
    "aria-label": k.intl.string(k.t.lqaIxI)
  })
};

function R(e) {
  let {
    surface: t = E.Y.PROFILE_MODAL
  } = e, r = i.useRef(null), s = i.useRef(null);
  return (0, n.jsx)("div", {
    ref: r,
    className: _.container,
    children: (0, n.jsx)("div", {
      ref: s,
      className: l()(_.card, _.placeholderCard, {
        [_.smallCard]: t === E.Y.GIFTING_FLOW,
        [_.largeCard]: t === E.Y.PROFILE_MODAL
      }),
      children: (0, n.jsx)("div", {
        className: _.cardPreview,
        children: (0, n.jsx)("div", {
          className: _.avatarDecorationPreview,
          children: (0, n.jsx)(Z, {
            size: f.EFr.SIZE_80
          })
        })
      })
    })
  })
}

function F(e) {
  var t, r, {
      profileOwner: s,
      showIcons: l = false,
      collectibleSource: C = j.lr.WISHLIST,
      giftingOrigin: Z = L.Wt.USER_PROFILE_WISHLIST
    } = e,
    R = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          s = Object.keys(e);
        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["profileOwner", "showIcons", "collectibleSource", "giftingOrigin"]);
  let {
    item: F,
    isOwner: A
  } = R, {
    analyticsLocations: G
  } = (0, m.ZP)(), D = (0, a.TH)(), W = i.useRef(null), {
    isHoveringOrFocusing: H
  } = (0, g.Z)(W), [z] = (0, u.Wu)([S.Z], () => [S.Z.hasSentGift(F.skuId, s.id)], [F.skuId, s.id]), M = F.collectiblesItem.type, U = (() => {
    switch (M) {
      case o.Z.AVATAR_DECORATION:
        return k.intl.formatToPlainString(k.t.IQQYef, {
          itemName: F.skuName
        });
      case o.Z.PROFILE_EFFECT:
        return k.intl.formatToPlainString(k.t["x/MGWy"], {
          itemName: F.skuName
        });
      case o.Z.NAMEPLATE:
        return k.intl.formatToPlainString(k.t.eVNt6E, {
          itemName: F.skuName
        });
      default:
        (0, v.vE)(M)
    }
  })(), V = A ? k.intl.string(k.t.FdGl5A) : k.intl.string(k.t.ilhtIa), Y = A ? true : f.OgN, B = i.useCallback(() => {
    let e = D.pathname.startsWith(T.Z5c.COLLECTIBLES_SHOP);
    if (A) {
      if (e) {
        let e = h.Z.getProduct(F.skuId),
          t = h.Z.getCategoryForProduct(F.skuId);
        if (null != e && null != t) {
          (0, y.closeUserProfileModal)(), (0, I.T)({
            product: e,
            category: t,
            shouldCheckoutWithOrbs: (0, O.oQ)({
              product: e
            }),
            analyticsLocations: G,
            analyticsSource: p.Z.USER_PROFILE_WISHLIST,
            returnRef: true,
            tab: true,
            variantType: N.Ch.DEFAULT
          });
          return
        }
      }(0, y.closeUserProfileModal)(), (0, P.uL)("".concat(T.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(F.skuId))
    } else {
      if (z) return;
      (0, b.Z)({
        skuId: F.skuId,
        isGift: true,
        giftingOrigin: Z,
        analyticsLocations: G,
        giftRecipient: s,
        variantsReturnStyle: c.v.VARIANTS_GROUP
      })
    }
  }, [D.pathname, F.skuId, G, A, z, s, Z]), K = i.useCallback(() => l ? C === j.lr.WISHLIST ? (0, n.jsx)("div", {
    className: _.itemIcon,
    children: (0, n.jsx)(d.u, {
      text: k.intl.formatToPlainString(k.t.p3RmJF, {
        username: w.ZP.getName(s)
      }),
      position: "top",
      children: (0, n.jsx)(f.h_8, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: _.itemIconHeart
      })
    })
  }) : C === j.lr.POPULAR ? (0, n.jsx)("div", {
    className: _.itemIcon,
    children: (0, n.jsx)(d.u, {
      text: k.intl.string(k.t.Ig6VDH),
      position: "top",
      children: (0, n.jsx)(f.EOn, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: _.itemIconShop
      })
    })
  }) : null : null, [l, C, s]), Q = i.useCallback(() => (0, n.jsx)(x.Z, {
    item: F,
    profileOwner: s,
    isHighlighted: !z && H,
    surface: R.surface
  }), [F, s, z, H, R.surface]);
  return (0, n.jsx)(E.Z, (t = function(e) {
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
    cardRef: W,
    accessibleLabel: U,
    onCardClick: B,
    buttonCTALabel: V,
    buttonIcon: Y,
    isOwned: z,
    renderItemPreview: Q,
    renderSourceIcon: K
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