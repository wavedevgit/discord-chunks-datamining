/** Chunk was on 83037 **/
/** chunk id: 851397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk436585 = require("./436585.jsx"),
  Chunk594914 = require("./594914.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk63602 = require("./63602.js");

function j(e) {
  var t, n, {
      profileOwner: j,
      hideButtonIcon: x = false,
      showPrice: C = false,
      showIcons: E = false,
      source: S = h.lr.WISHLIST
    } = e,
    I = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["profileOwner", "hideButtonIcon", "showPrice", "showIcons", "source"]);
  let {
    item: P,
    isOwner: N,
    giftingOrigin: Z = _.Wt.USER_PROFILE_WISHLIST
  } = I, w = P.sku, T = w.applicationId, A = (0, c.q)(T), R = i.useRef(null), {
    analyticsLocations: D
  } = (0, s.ZP)(a.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD), L = (0, l.e7)([f.Z], () => null != j && f.Z.hasSentGift(P.skuId, j.id), [P.skuId, j]), M = L || true === P.isOwned, k = P.skuName, {
    buttonCTALabel: G,
    buttonIcon: U,
    handleCardClick: B
  } = i.useMemo(() => {
    var e, t, n, r, i, l, s, c;
    return N || M ? {
      buttonCTALabel: C ? (0, p.T4)(null != (i = null == (n = w.price) ? true : n.amount) ? i : 0, null != (l = null == (r = w.price) ? true : r.currency) ? l : y.pK.USD) : O.intl.string(O.t.FdGl5A),
      buttonIcon: true,
      handleCardClick: () => {
        (null == A ? true : A.guildId) != null && ((0, u.closeUserProfileModal)(), (0, g.g)({
          skuId: w.id,
          applicationId: A.id,
          guildId: A.guildId,
          isStorefront: false,
          analyticsLocations: D
        }))
      }
    } : {
      buttonCTALabel: C ? (0, p.T4)(null != (s = null == (e = w.price) ? true : e.amount) ? s : 0, null != (c = null == (t = w.price) ? true : t.currency) ? c : y.pK.USD) : O.intl.string(O.t.ilhtIa),
      buttonIcon: x ? true : o.OgN,
      handleCardClick: () => {
        L || ((0, u.closeUserProfileModal)(), (0, m.P)(w, {
          isGift: true,
          giftRecipient: j,
          giftingOrigin: Z
        }, {
          analyticsLocations: [...D, a.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        }))
      }
    }
  }, [N, M, C, w, x, A, L, j, Z, D]), F = i.useCallback(() => E ? S === h.lr.WISHLIST ? (0, r.jsx)("div", {
    className: v.itemIcon,
    children: (0, r.jsx)(o.h_8, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: v.itemIconHeart
    })
  }) : S === h.lr.POPULAR ? (0, r.jsx)("div", {
    className: v.itemIcon,
    children: (0, r.jsx)(o.YqE, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: v.itemIconShop
    })
  }) : null : null, [E, S]), V = i.useCallback(() => (0, r.jsx)(b.A, {
    shape: "custom",
    containerClassName: v.card,
    backgroundImageClassName: v.cardBackgroundImage,
    foregroundImageClassName: v.cardImage,
    sku: w
  }), [w]);
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
  }({}, I), n = n = {
    source: S,
    cardRef: R,
    accessibleLabel: k,
    onCardClick: B,
    buttonCTALabel: G,
    buttonIcon: U,
    isOwned: M,
    renderItemPreview: V,
    renderSourceIcon: F
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