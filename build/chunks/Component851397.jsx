/** Chunk was on 82697 **/
/** chunk id: 851397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk892001 = require("./892001.js"),
  Chunk688192 = require("./688192.jsx"),
  Chunk89196 = require("./89196.js"),
  Chunk602733 = require("./602733.js"),
  Chunk937615 = require("./937615.js"),
  Chunk705338 = require("./705338.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk594914 = require("./594914.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk63602 = require("./63602.js");

function x(e) {
  var t, n, {
      profileOwner: x,
      hideButtonIcon: P = false,
      showPrice: I = false,
      showIcons: S = false,
      source: C = b.lr.WISHLIST,
      analyticsLocations: k
    } = e,
    w = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["profileOwner", "hideButtonIcon", "showPrice", "showIcons", "source", "analyticsLocations"]);
  let {
    item: Z,
    isOwner: E,
    giftingOrigin: T = O.Wt.USER_PROFILE_WISHLIST
  } = w, N = Z.sku, D = N.applicationId, A = (0, c.q)(D), L = i.useRef(null), {
    analyticsLocations: M
  } = (0, s.ZP)(...null != k ? k : [], l.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD), U = (0, o.e7)([f.Z], () => null != x && f.Z.hasSentGift(Z.skuId, x.id), [Z.skuId, x]), F = U || true === Z.isOwned, G = Z.skuName, {
    buttonCTALabel: R,
    buttonIcon: B,
    handleCardClick: V
  } = i.useMemo(() => {
    var e, t, n, r, i, o, s, c;
    return E || F ? {
      buttonCTALabel: I ? (0, p.T4)(null != (i = null == (n = N.price) ? true : n.amount) ? i : 0, null != (o = null == (r = N.price) ? true : r.currency) ? o : y.pK.USD) : v.intl.string(v.t.FdGl5A),
      buttonIcon: true,
      handleCardClick: () => {
        (null == A ? true : A.guildId) != null && (E ? ((0, u.closeUserProfileModal)(), (0, h.default)({
          guildId: A.guildId,
          skuId: N.id,
          slug: N.slug
        })) : (0, m.g)({
          skuId: N.id,
          applicationId: A.id,
          guildId: A.guildId,
          isStorefront: false,
          analyticsLocations: M
        }))
      }
    } : {
      buttonCTALabel: I ? (0, p.T4)(null != (s = null == (e = N.price) ? true : e.amount) ? s : 0, null != (c = null == (t = N.price) ? true : t.currency) ? c : y.pK.USD) : v.intl.string(v.t.ilhtIa),
      buttonIcon: P ? true : a.OgN,
      handleCardClick: () => {
        U || (0, g.P)(N, {
          isGift: true,
          giftRecipient: x,
          giftingOrigin: T
        }, {
          analyticsLocations: [...M, l.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
      }
    }
  }, [E, F, I, N, P, A, U, x, T, M]), z = i.useCallback(() => S ? C === b.lr.WISHLIST ? (0, r.jsx)("div", {
    className: _.itemIcon,
    children: (0, r.jsx)(a.h_8, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: _.itemIconHeart
    })
  }) : C === b.lr.POPULAR ? (0, r.jsx)("div", {
    className: _.itemIcon,
    children: (0, r.jsx)(a.YqE, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: _.itemIconShop
    })
  }) : null : null, [S, C]), H = i.useCallback(() => (0, r.jsx)(j.A, {
    shape: "custom",
    containerClassName: _.card,
    backgroundImageClassName: _.cardBackgroundImage,
    foregroundImageClassName: _.cardImage,
    sku: N
  }), [N]);
  return (0, r.jsx)(d.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, w), n = n = {
    source: C,
    cardRef: L,
    accessibleLabel: G,
    onCardClick: V,
    buttonCTALabel: R,
    buttonIcon: B,
    isOwned: F,
    renderItemPreview: H,
    renderSourceIcon: z
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}