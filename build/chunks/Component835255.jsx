/** Chunk was on 94758 **/
/** chunk id: 835255, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  BO: () => R,
  ZP: () => F,
  w_: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk232644 = require("./232644.js"),
  Chunk660097 = require("./660097.js");
let Z = e => {
  let {
    size: t = f.EFr.SIZE_80
  } = e;
  return (0, n.jsx)(f.qEK, {
    className: T.placeholderAvatar,
    src: L,
    size: t,
    "aria-label": C.intl.string(C.t.lqaIxI)
  })
};

function _(e) {
  let {
    surface: t = k.Y.PROFILE_MODAL
  } = e, r = i.useRef(null), l = i.useRef(null);
  return (0, n.jsx)("div", {
    ref: r,
    className: T.container,
    children: (0, n.jsx)("div", {
      ref: l,
      className: s()(T.card, T.placeholderCard, {
        [T.smallCard]: t === k.Y.GIFTING_FLOW,
        [T.largeCard]: t === k.Y.PROFILE_MODAL
      }),
      children: (0, n.jsx)("div", {
        className: T.cardPreview,
        children: (0, n.jsx)("div", {
          className: T.avatarDecorationPreview,
          children: (0, n.jsx)(Z, {
            size: f.EFr.SIZE_80
          })
        })
      })
    })
  })
}

function R(e) {
  let {
    item: t,
    size: r = "sm",
    remainingCount: l,
    onClick: a,
    renderItemPreview: o
  } = e, c = i.useRef(null), u = i.useRef(null), {
    isHoveringOrFocusing: d
  } = (0, b.Z)(u), m = true === t.isOwned;
  return (0, n.jsx)("div", {
    ref: c,
    className: T.container,
    children: (0, n.jsx)(f.P3F, {
      tag: "div",
      innerRef: u,
      onClick: a,
      className: s()(T.card, T.seeMoreCard, {
        [T.smallCard]: "sm" === r
      }),
      children: (0, n.jsxs)("div", {
        className: s()(T.cardPreview, T.seeMoreCardPreview),
        children: [o(!m && d), (0, n.jsx)("div", {
          className: T.seeMoreOverlay,
          children: (0, n.jsx)(f.Text, {
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

function F(e) {
  var t, r, {
      profileOwner: l,
      showIcons: s = false,
      source: L = v.lr.WISHLIST,
      giftingOrigin: Z = N.Wt.USER_PROFILE_WISHLIST,
      onWishlistItemClick: _
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
    }(e, ["profileOwner", "showIcons", "source", "giftingOrigin", "onWishlistItemClick"]);
  let {
    item: F,
    isOwner: A
  } = R, {
    analyticsLocations: G
  } = (0, p.ZP)(), D = (0, a.TH)(), W = i.useRef(null), {
    isHoveringOrFocusing: H
  } = (0, b.Z)(W), [M] = (0, u.Wu)([P.Z], () => [P.Z.hasSentGift(F.skuId, l.id)], [F.skuId, l.id]), U = M || true === F.isOwned, z = F.collectiblesItem.type, B = (() => {
    switch (z) {
      case o.Z.AVATAR_DECORATION:
        return C.intl.formatToPlainString(C.t.IQQYef, {
          itemName: F.skuName
        });
      case o.Z.PROFILE_EFFECT:
        return C.intl.formatToPlainString(C.t["x/MGWy"], {
          itemName: F.skuName
        });
      case o.Z.NAMEPLATE:
        return C.intl.formatToPlainString(C.t.eVNt6E, {
          itemName: F.skuName
        });
      default:
        (0, w.vE)(z)
    }
  })(), Y = A || U ? C.intl.string(C.t.FdGl5A) : C.intl.string(C.t.ilhtIa), V = A || U ? true : f.OgN, q = i.useCallback(() => {
    let e = D.pathname.startsWith(E.Z5c.COLLECTIBLES_SHOP);
    if (A || U) {
      let t = !A && U;
      if (e) {
        let e = O.Z.getProduct(F.skuId),
          r = O.Z.getCategoryForProduct(F.skuId);
        if (null != e && null != r) {
          t || (0, S.closeUserProfileModal)(), (0, g.T)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, h.oQ)({
              product: e
            }),
            analyticsLocations: G,
            analyticsSource: m.Z.USER_PROFILE_WISHLIST,
            returnRef: true,
            tab: true
          });
          return
        }
      }
      t || (0, S.closeUserProfileModal)(), (0, j.uL)("".concat(E.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(F.skuId))
    } else null == _ || _(), (0, I.Z)({
      skuId: F.skuId,
      isGift: true,
      giftingOrigin: Z,
      analyticsLocations: G,
      giftRecipient: l,
      variantsReturnStyle: c.v.VARIANTS_GROUP
    })
  }, [D.pathname, F.skuId, G, A, U, l, Z, _]), K = i.useCallback(() => s ? L === v.lr.WISHLIST ? (0, n.jsx)("div", {
    className: T.itemIcon,
    children: (0, n.jsx)(d.u, {
      text: C.intl.formatToPlainString(C.t.p3RmJF, {
        username: y.ZP.getName(l)
      }),
      position: "top",
      children: (0, n.jsx)(f.h_8, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: T.itemIconHeart
      })
    })
  }) : L === v.lr.POPULAR ? (0, n.jsx)("div", {
    className: T.itemIcon,
    children: (0, n.jsx)(d.u, {
      text: C.intl.string(C.t.Ig6VDH),
      position: "top",
      children: (0, n.jsx)(f.YqE, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: T.itemIconShop
      })
    })
  }) : null : null, [s, L, l]), Q = i.useCallback(() => (0, n.jsx)(x.Z, {
    item: F,
    profileOwner: l,
    isHighlighted: H,
    surface: R.surface
  }), [F, l, H, R.surface]);
  return (0, n.jsx)(k.Z, (t = function(e) {
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
    accessibleLabel: B,
    onCardClick: q,
    buttonCTALabel: Y,
    buttonIcon: V,
    isOwned: U,
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