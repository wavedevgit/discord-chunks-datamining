/** Chunk was on 74330 **/
/** chunk id: 835255, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  BO: () => R,
  ZP: () => _,
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
  Chunk216541 = require("./216541.jsx"),
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
  Chunk889588 = require("./889588.js"),
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
    cardSize: t = w.U.MEDIUM
  } = e, r = i.useRef(null), l = i.useRef(null);
  return (0, n.jsx)("div", {
    ref: r,
    className: x.container,
    children: (0, n.jsx)("div", {
      ref: l,
      className: o()(x.card, x.placeholderCard, {
        [x.smallCard]: t === w.U.SMALL,
        [x.largeCard]: t === w.U.LARGE
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

function R(e) {
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
    className: x.container,
    children: (0, n.jsx)(d.P3F, {
      tag: "div",
      innerRef: u,
      onClick: s,
      className: o()(x.card, x.seeMoreCard, {
        [x.smallCard]: r === w.U.SMALL
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

function _(e) {
  var t, r, {
      profileOwner: l,
      showIcons: o = false,
      source: M = P.lr.WISHLIST,
      giftingOrigin: T = C.Wt.USER_PROFILE_WISHLIST,
      onWishlistItemClick: A,
      cardSize: R = w.U.MEDIUM,
      analyticsLocations: _,
      isDragging: N = false
    } = e,
    U = function(e, t) {
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
    }(e, ["profileOwner", "showIcons", "source", "giftingOrigin", "onWishlistItemClick", "cardSize", "analyticsLocations", "isDragging"]);
  let {
    item: Z,
    isOwner: F
  } = U, {
    analyticsLocations: H
  } = (0, m.ZP)(...null != _ ? _ : []), D = (0, s.TH)(), W = i.useRef(null), {
    isHoveringOrFocusing: z
  } = (0, I.Z)(W), [G] = (0, u.Wu)([y.Z], () => [y.Z.hasSentGift(Z.skuId, l.id)], [Z.skuId, l.id]), B = G || true === Z.isOwned, q = null != Z.bundleItems && Z.bundleItems.length > 0, Q = (() => {
    if (q) return k.intl.formatToPlainString(k.t["/l2CAE"], {
      itemName: Z.skuName
    });
    let e = Z.collectiblesItem.type;
    switch (e) {
      case c.Z.AVATAR_DECORATION:
        return k.intl.formatToPlainString(k.t.IQQYef, {
          itemName: Z.skuName
        });
      case c.Z.PROFILE_EFFECT:
        return k.intl.formatToPlainString(k.t["x/MGWy"], {
          itemName: Z.skuName
        });
      case c.Z.NAMEPLATE:
        return k.intl.formatToPlainString(k.t.eVNt6E, {
          itemName: Z.skuName
        });
      default:
        (0, v.vE)(e)
    }
  })(), Y = F || B ? k.intl.string(k.t.FdGl5A) : k.intl.string(k.t.ilhtIa), V = F || B ? true : d.OgN, J = i.useCallback(() => {
    let e = D.pathname.startsWith(E.Z5c.COLLECTIBLES_SHOP);
    if (F || B) {
      let t = !F && B;
      if (e) {
        let e = O.Z.getProduct(Z.skuId),
          r = O.Z.getCategoryForProduct(Z.skuId);
        if (null != e && null != r) {
          t || (0, L.closeUserProfileModal)(), (0, g.T)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, p.oQ)({
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
      t || (0, L.closeUserProfileModal)(), (0, S.uL)("".concat(E.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(Z.skuId))
    } else null == A || A(), (0, b.Z)({
      skuId: Z.skuId,
      isGift: true,
      giftingOrigin: T,
      analyticsLocations: H,
      giftRecipient: l,
      variantsReturnStyle: a.v.VARIANTS_GROUP
    })
  }, [D.pathname, Z.skuId, H, F, B, l, T, A]), K = i.useCallback(() => q || !o ? null : M === P.lr.WISHLIST ? (0, n.jsx)("div", {
    className: x.itemIcon,
    children: (0, n.jsx)(d.h_8, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: x.itemIconHeart
    })
  }) : M === P.lr.POPULAR ? (0, n.jsx)("div", {
    className: x.itemIcon,
    children: (0, n.jsx)(d.YqE, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: x.itemIconShop
    })
  }) : null, [q, o, M]), X = i.useCallback(() => {
    if (q) {
      let e = {
        items: Z.bundleItems
      };
      return (0, n.jsx)("div", {
        className: x.bundlePreview,
        children: (0, n.jsx)(h.d, {
          product: e,
          isHighlighted: z && !N,
          user: l
        })
      })
    }
    return (0, n.jsx)(j.Z, {
      item: Z,
      profileOwner: l,
      isHighlighted: z && !N,
      cardSize: R
    })
  }, [q, Z, l, z, R, N]);
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
  }({}, U), r = r = {
    cardRef: W,
    accessibleLabel: Q,
    onCardClick: J,
    buttonCTALabel: Y,
    buttonIcon: V,
    isOwned: B,
    renderItemPreview: X,
    renderSourceIcon: K,
    giftingOrigin: T,
    source: M,
    cardSize: R
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