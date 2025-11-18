/** Chunk was on 10023 **/
/** chunk id: 851397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
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
  Chunk897986 = require("./897986.js");

function j(e) {
  var t, n, {
      profileOwner: j,
      hideButtonIcon: C = false,
      showPrice: x = false,
      showIcons: E = false
    } = e,
    S = function(e, t) {
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
    item: I,
    isOwner: P,
    giftingOrigin: N = _.Wt.USER_PROFILE_WISHLIST
  } = S, Z = I.sku, w = Z.applicationId, T = (0, c.q)(w), A = i.useRef(null), R = (0, l.e7)([p.Z], () => null != j && p.Z.hasSentGift(I.skuId, j.id), [I.skuId, j]), D = R || true === I.isOwned, L = I.skuName, {
    buttonCTALabel: M,
    buttonIcon: k,
    handleCardClick: G
  } = i.useMemo(() => {
    var e, t, n, r, i, l, o, c;
    return P || D ? {
      buttonCTALabel: x ? (0, h.T4)(null != (i = null == (n = Z.price) ? true : n.amount) ? i : 0, null != (l = null == (r = Z.price) ? true : r.currency) ? l : y.pK.USD) : O.intl.string(O.t.FdGl5A),
      buttonIcon: true,
      handleCardClick: () => {
        (null == T ? true : T.guildId) != null && ((0, u.closeUserProfileModal)(), (0, g.g)({
          skuId: Z.id,
          applicationId: T.id,
          guildId: T.guildId,
          isStorefront: false
        }))
      }
    } : {
      buttonCTALabel: x ? (0, h.T4)(null != (o = null == (e = Z.price) ? true : e.amount) ? o : 0, null != (c = null == (t = Z.price) ? true : t.currency) ? c : y.pK.USD) : O.intl.string(O.t.ilhtIa),
      buttonIcon: C ? true : a.OgN,
      handleCardClick: () => {
        R || ((0, u.closeUserProfileModal)(), (0, m.P)(Z, {
          isGift: true,
          giftRecipient: j,
          giftingOrigin: N
        }, {
          analyticsLocations: [s.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        }))
      }
    }
  }, [P, D, x, Z, C, T, R, j, N]), U = i.useCallback(() => E ? (0, r.jsx)("div", {
    className: v.itemIcon,
    children: (0, r.jsx)(o.u, {
      text: O.intl.formatToPlainString(O.t.p3RmJF, {
        username: f.ZP.getName(j)
      }),
      position: "top",
      children: (0, r.jsx)(a.h_8, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: v.itemIconHeart
      })
    })
  }) : null, [E, j]), B = i.useCallback(() => (0, r.jsx)(b.A, {
    shape: "custom",
    containerClassName: v.card,
    backgroundImageClassName: v.cardBackgroundImage,
    foregroundImageClassName: v.cardImage,
    sku: Z
  }), [Z]);
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
  }({}, S), n = n = {
    cardRef: A,
    accessibleLabel: L,
    onCardClick: G,
    buttonCTALabel: M,
    buttonIcon: k,
    isOwned: D,
    renderItemPreview: B,
    renderSourceIcon: U
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