/** Chunk was on 94072 **/
/** chunk id: 835255, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  BO: () => _,
  ZP: () => A,
  w_: () => L
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
    size: t = d.EFr.SIZE_80
  } = e;
  return (0, n.jsx)(d.qEK, {
    className: N.placeholderAvatar,
    src: R,
    size: t,
    "aria-label": E.intl.string(E.t.lqaIxI)
  })
};

function L(e) {
  let {
    surface: t = x.Y.PROFILE_MODAL
  } = e, r = i.useRef(null), l = i.useRef(null);
  return (0, n.jsx)("div", {
    ref: r,
    className: N.container,
    children: (0, n.jsx)("div", {
      ref: l,
      className: s()(N.card, N.placeholderCard, {
        [N.smallCard]: t === x.Y.GIFTING_FLOW,
        [N.largeCard]: t === x.Y.PROFILE_MODAL
      }),
      children: (0, n.jsx)("div", {
        className: N.cardPreview,
        children: (0, n.jsx)("div", {
          className: N.avatarDecorationPreview,
          children: (0, n.jsx)(Z, {
            size: d.EFr.SIZE_80
          })
        })
      })
    })
  })
}

function _(e) {
  let {
    item: t,
    size: r = "sm",
    remainingCount: l,
    onClick: o,
    renderItemPreview: a
  } = e, c = i.useRef(null), u = i.useRef(null), {
    isHoveringOrFocusing: f
  } = (0, I.Z)(u), O = true === t.isOwned;
  return (0, n.jsx)("div", {
    ref: c,
    className: N.container,
    children: (0, n.jsx)(d.P3F, {
      tag: "div",
      innerRef: u,
      onClick: o,
      className: s()(N.card, N.seeMoreCard, {
        [N.smallCard]: "sm" === r
      }),
      children: (0, n.jsxs)("div", {
        className: s()(N.cardPreview, N.seeMoreCardPreview),
        children: [a(!O && f), (0, n.jsx)("div", {
          className: N.seeMoreOverlay,
          children: (0, n.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "always-white",
            children: E.intl.format(E.t.F6iMs4, {
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
      showIcons: s = false,
      source: R = P.lr.WISHLIST,
      giftingOrigin: Z = T.Wt.USER_PROFILE_WISHLIST,
      onWishlistItemClick: L
    } = e,
    _ = function(e, t) {
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
    item: A,
    isOwner: F
  } = _, {
    analyticsLocations: G
  } = (0, p.ZP)(), D = (0, o.TH)(), W = i.useRef(null), {
    isHoveringOrFocusing: H
  } = (0, I.Z)(W), [M] = (0, u.Wu)([h.Z], () => [h.Z.hasSentGift(A.skuId, l.id)], [A.skuId, l.id]), U = M || true === A.isOwned, z = A.collectiblesItem.type, B = (() => {
    switch (z) {
      case a.Z.AVATAR_DECORATION:
        return E.intl.formatToPlainString(E.t.IQQYef, {
          itemName: A.skuName
        });
      case a.Z.PROFILE_EFFECT:
        return E.intl.formatToPlainString(E.t["x/MGWy"], {
          itemName: A.skuName
        });
      case a.Z.NAMEPLATE:
        return E.intl.formatToPlainString(E.t.eVNt6E, {
          itemName: A.skuName
        });
      default:
        (0, S.vE)(z)
    }
  })(), Y = F || U ? E.intl.string(E.t.FdGl5A) : E.intl.string(E.t.ilhtIa), q = F || U ? true : d.OgN, V = i.useCallback(() => {
    let e = D.pathname.startsWith(C.Z5c.COLLECTIBLES_SHOP);
    if (F || U) {
      let t = !F && U;
      if (e) {
        let e = b.Z.getProduct(A.skuId),
          r = b.Z.getCategoryForProduct(A.skuId);
        if (null != e && null != r) {
          t || (0, w.closeUserProfileModal)(), (0, m.T)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, g.oQ)({
              product: e
            }),
            analyticsLocations: G,
            analyticsSource: O.Z.USER_PROFILE_WISHLIST,
            returnRef: true,
            tab: true
          });
          return
        }
      }
      t || (0, w.closeUserProfileModal)(), (0, j.uL)("".concat(C.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(A.skuId))
    } else null == L || L(), (0, y.Z)({
      skuId: A.skuId,
      isGift: true,
      giftingOrigin: Z,
      analyticsLocations: G,
      giftRecipient: l,
      variantsReturnStyle: c.v.VARIANTS_GROUP
    })
  }, [D.pathname, A.skuId, G, F, U, l, Z, L]), Q = i.useCallback(() => s ? R === P.lr.WISHLIST ? (0, n.jsx)("div", {
    className: N.itemIcon,
    children: (0, n.jsx)(f.u, {
      text: E.intl.formatToPlainString(E.t.p3RmJF, {
        username: v.ZP.getName(l)
      }),
      position: "top",
      children: (0, n.jsx)(d.h_8, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: N.itemIconHeart
      })
    })
  }) : R === P.lr.POPULAR ? (0, n.jsx)("div", {
    className: N.itemIcon,
    children: (0, n.jsx)(f.u, {
      text: E.intl.string(E.t.Ig6VDH),
      position: "top",
      children: (0, n.jsx)(d.YqE, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: N.itemIconShop
      })
    })
  }) : null : null, [s, R, l]), J = i.useCallback(() => (0, n.jsx)(k.Z, {
    item: A,
    profileOwner: l,
    isHighlighted: H,
    surface: _.surface
  }), [A, l, H, _.surface]);
  return (0, n.jsx)(x.Z, (t = function(e) {
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
  }({}, _), r = r = {
    cardRef: W,
    accessibleLabel: B,
    onCardClick: V,
    buttonCTALabel: Y,
    buttonIcon: q,
    isOwned: U,
    renderItemPreview: J,
    renderSourceIcon: Q,
    giftingOrigin: Z,
    source: R
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