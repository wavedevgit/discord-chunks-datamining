/** Chunk was on 65354 **/
/** chunk id: 851397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk892001 = require("./892001.js"),
  Chunk688192 = require("./688192.jsx"),
  Chunk89196 = require("./89196.js"),
  Chunk937615 = require("./937615.js"),
  Chunk51144 = require("./51144.js"),
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
      showIcons: S = false
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
    }(e, ["profileOwner", "hideButtonIcon", "showPrice", "showIcons"]);
  let {
    item: P,
    isOwner: N,
    giftingOrigin: Z = y.Wt.USER_PROFILE_WISHLIST
  } = I, w = P.sku, T = w.applicationId, A = (0, u.q)(T), R = i.useRef(null), {
    analyticsLocations: D
  } = (0, c.ZP)(s.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD), L = (0, l.e7)([p.Z], () => null != x && p.Z.hasSentGift(P.skuId, x.id), [P.skuId, x]), M = L || true === P.isOwned, k = P.skuName, {
    buttonCTALabel: G,
    buttonIcon: U,
    handleCardClick: B
  } = i.useMemo(() => {
    var e, t, n, r, i, l, o, c;
    return N || M ? {
      buttonCTALabel: E ? (0, h.T4)(null != (i = null == (n = w.price) ? true : n.amount) ? i : 0, null != (l = null == (r = w.price) ? true : r.currency) ? l : O.pK.USD) : v.intl.string(v.t.FdGl5A),
      buttonIcon: true,
      handleCardClick: () => {
        (null == A ? true : A.guildId) != null && ((0, d.closeUserProfileModal)(), (0, m.g)({
          skuId: w.id,
          applicationId: A.id,
          guildId: A.guildId,
          isStorefront: false,
          analyticsLocations: D
        }))
      }
    } : {
      buttonCTALabel: E ? (0, h.T4)(null != (o = null == (e = w.price) ? true : e.amount) ? o : 0, null != (c = null == (t = w.price) ? true : t.currency) ? c : O.pK.USD) : v.intl.string(v.t.ilhtIa),
      buttonIcon: C ? true : a.OgN,
      handleCardClick: () => {
        L || ((0, d.closeUserProfileModal)(), (0, b.P)(w, {
          isGift: true,
          giftRecipient: x,
          giftingOrigin: Z
        }, {
          analyticsLocations: [...D, s.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        }))
      }
    }
  }, [N, M, E, w, C, A, L, x, Z, D]), F = i.useCallback(() => S ? (0, r.jsx)("div", {
    className: j.itemIcon,
    children: (0, r.jsx)(o.u, {
      text: v.intl.formatToPlainString(v.t.p3RmJF, {
        username: g.ZP.getName(x)
      }),
      position: "top",
      children: (0, r.jsx)(a.h_8, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: j.itemIconHeart
      })
    })
  }) : null, [S, x]), V = i.useCallback(() => (0, r.jsx)(_.A, {
    shape: "custom",
    containerClassName: j.card,
    backgroundImageClassName: j.cardBackgroundImage,
    foregroundImageClassName: j.cardImage,
    sku: w
  }), [w]);
  return (0, r.jsx)(f.Z, (t = function(e) {
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