/** Chunk was on 73895 **/
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
      hideButtonIcon: C = false,
      showPrice: E = false,
      showIcons: S = false,
      source: I = f.lr.WISHLIST
    } = e,
    P = function(e, t) {
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
    item: N,
    isOwner: Z,
    giftingOrigin: w = y.Wt.USER_PROFILE_WISHLIST
  } = P, T = N.sku, A = T.applicationId, R = (0, c.q)(A), D = i.useRef(null), {
    analyticsLocations: L
  } = (0, s.ZP)(a.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD), M = (0, l.e7)([h.Z], () => null != x && h.Z.hasSentGift(N.skuId, x.id), [N.skuId, x]), k = M || true === N.isOwned, G = N.skuName, {
    buttonCTALabel: U,
    buttonIcon: B,
    handleCardClick: F
  } = i.useMemo(() => {
    var e, t, n, r, i, l, s, c;
    return Z || k ? {
      buttonCTALabel: E ? (0, p.T4)(null != (i = null == (n = T.price) ? true : n.amount) ? i : 0, null != (l = null == (r = T.price) ? true : r.currency) ? l : O.pK.USD) : v.intl.string(v.t.FdGl5A),
      buttonIcon: true,
      handleCardClick: () => {
        (null == R ? true : R.guildId) != null && (Z ? ((0, u.closeUserProfileModal)(), (0, g.default)({
          guildId: R.guildId,
          skuId: T.id,
          slug: T.slug
        })) : (0, m.g)({
          skuId: T.id,
          applicationId: R.id,
          guildId: R.guildId,
          isStorefront: false,
          analyticsLocations: L
        }))
      }
    } : {
      buttonCTALabel: E ? (0, p.T4)(null != (s = null == (e = T.price) ? true : e.amount) ? s : 0, null != (c = null == (t = T.price) ? true : t.currency) ? c : O.pK.USD) : v.intl.string(v.t.ilhtIa),
      buttonIcon: C ? true : o.OgN,
      handleCardClick: () => {
        M || (0, b.P)(T, {
          isGift: true,
          giftRecipient: x,
          giftingOrigin: w
        }, {
          analyticsLocations: [...L, a.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
      }
    }
  }, [Z, k, E, T, C, R, M, x, w, L]), V = i.useCallback(() => S ? I === f.lr.WISHLIST ? (0, r.jsx)("div", {
    className: j.itemIcon,
    children: (0, r.jsx)(o.h_8, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: j.itemIconHeart
    })
  }) : I === f.lr.POPULAR ? (0, r.jsx)("div", {
    className: j.itemIcon,
    children: (0, r.jsx)(o.YqE, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: j.itemIconShop
    })
  }) : null : null, [S, I]), H = i.useCallback(() => (0, r.jsx)(_.A, {
    shape: "custom",
    containerClassName: j.card,
    backgroundImageClassName: j.cardBackgroundImage,
    foregroundImageClassName: j.cardImage,
    sku: T
  }), [T]);
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
  }({}, P), n = n = {
    source: I,
    cardRef: D,
    accessibleLabel: G,
    onCardClick: F,
    buttonCTALabel: U,
    buttonIcon: B,
    isOwned: k,
    renderItemPreview: H,
    renderSourceIcon: V
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