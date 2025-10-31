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
  } = (0, h.Z)(u), m = true === t.isOwned;
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
      giftingOrigin: Z = N.Wt.USER_PROFILE_WISHLIST
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
    }(e, ["profileOwner", "showIcons", "source", "giftingOrigin"]);
  let {
    item: R,
    isOwner: F
  } = _, {
    analyticsLocations: A
  } = (0, p.ZP)(), G = (0, a.TH)(), D = i.useRef(null), {
    isHoveringOrFocusing: W
  } = (0, h.Z)(D), [H] = (0, u.Wu)([P.Z], () => [P.Z.hasSentGift(R.skuId, l.id)], [R.skuId, l.id]), M = H || true === R.isOwned, U = R.collectiblesItem.type, z = (() => {
    switch (U) {
      case o.Z.AVATAR_DECORATION:
        return C.intl.formatToPlainString(C.t.IQQYef, {
          itemName: R.skuName
        });
      case o.Z.PROFILE_EFFECT:
        return C.intl.formatToPlainString(C.t["x/MGWy"], {
          itemName: R.skuName
        });
      case o.Z.NAMEPLATE:
        return C.intl.formatToPlainString(C.t.eVNt6E, {
          itemName: R.skuName
        });
      default:
        (0, y.vE)(U)
    }
  })(), B = F || M ? C.intl.string(C.t.FdGl5A) : C.intl.string(C.t.ilhtIa), Y = F || M ? true : f.OgN, V = i.useCallback(() => {
    let e = G.pathname.startsWith(E.Z5c.COLLECTIBLES_SHOP);
    if (F || M) {
      let t = !F && M;
      if (e) {
        let e = O.Z.getProduct(R.skuId),
          r = O.Z.getCategoryForProduct(R.skuId);
        if (null != e && null != r) {
          t || (0, S.closeUserProfileModal)(), (0, b.T)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, g.oQ)({
              product: e
            }),
            analyticsLocations: A,
            analyticsSource: m.Z.USER_PROFILE_WISHLIST,
            returnRef: true,
            tab: true
          });
          return
        }
      }
      t || (0, S.closeUserProfileModal)(), (0, j.uL)("".concat(E.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(R.skuId))
    } else(0, I.Z)({
      skuId: R.skuId,
      isGift: true,
      giftingOrigin: Z,
      analyticsLocations: A,
      giftRecipient: l,
      variantsReturnStyle: c.v.VARIANTS_GROUP
    })
  }, [G.pathname, R.skuId, A, F, M, l, Z]), q = i.useCallback(() => s ? L === v.lr.WISHLIST ? (0, n.jsx)("div", {
    className: T.itemIcon,
    children: (0, n.jsx)(d.u, {
      text: C.intl.formatToPlainString(C.t.p3RmJF, {
        username: w.ZP.getName(l)
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
  }) : null : null, [s, L, l]), K = i.useCallback(() => (0, n.jsx)(x.Z, {
    item: R,
    profileOwner: l,
    isHighlighted: W,
    surface: _.surface
  }), [R, l, W, _.surface]);
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
  }({}, _), r = r = {
    cardRef: D,
    accessibleLabel: z,
    onCardClick: V,
    buttonCTALabel: B,
    buttonIcon: Y,
    isOwned: M,
    renderItemPreview: K,
    renderSourceIcon: q
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