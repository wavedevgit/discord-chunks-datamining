/** Chunk was on 74330 **/
/** chunk id: 851397, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function v(e) {
  var t, r, {
      profileOwner: v,
      hideButtonIcon: w = false,
      showPrice: j = false,
      showIcons: L = false,
      source: E = p.lr.WISHLIST,
      analyticsLocations: C
    } = e,
    k = function(e, t) {
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
    }(e, ["profileOwner", "hideButtonIcon", "showPrice", "showIcons", "source", "analyticsLocations"]);
  let {
    item: T,
    isOwner: x,
    giftingOrigin: A = S.Wt.USER_PROFILE_WISHLIST
  } = k, _ = T.sku, R = _.applicationId, N = (0, a.q)(R), M = i.useRef(null), {
    analyticsLocations: Z
  } = (0, c.ZP)(...null != C ? C : [], s.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD), D = (0, l.e7)([f.Z], () => null != v && f.Z.hasSentGift(T.skuId, v.id), [T.skuId, v]), U = D || true === T.isOwned, G = T.skuName, {
    buttonCTALabel: H,
    buttonIcon: F,
    handleCardClick: W
  } = i.useMemo(() => {
    var e, t, r, n, i, l, c, a;
    return x || U ? {
      buttonCTALabel: j ? (0, O.T4)(null != (i = null == (r = _.price) ? true : r.amount) ? i : 0, null != (l = null == (n = _.price) ? true : n.currency) ? l : h.pK.USD) : y.intl.string(y.t.FdGl5A),
      buttonIcon: true,
      handleCardClick: () => {
        (null == N ? true : N.guildId) != null && (x ? ((0, u.closeUserProfileModal)(), (0, I.default)({
          guildId: N.guildId,
          skuId: _.id,
          slug: _.slug
        })) : (0, m.g)({
          skuId: _.id,
          applicationId: N.id,
          guildId: N.guildId,
          isStorefront: false,
          analyticsLocations: Z
        }))
      }
    } : {
      buttonCTALabel: j ? (0, O.T4)(null != (c = null == (e = _.price) ? true : e.amount) ? c : 0, null != (a = null == (t = _.price) ? true : t.currency) ? a : h.pK.USD) : y.intl.string(y.t.ilhtIa),
      buttonIcon: w ? true : o.OgN,
      handleCardClick: () => {
        D || (0, g.P)(_, {
          isGift: true,
          giftRecipient: v,
          giftingOrigin: A
        }, {
          analyticsLocations: [...Z, s.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
      }
    }
  }, [x, U, j, _, w, N, D, v, A, Z]), z = i.useCallback(() => L ? E === p.lr.WISHLIST ? (0, n.jsx)("div", {
    className: P.itemIcon,
    children: (0, n.jsx)(o.h_8, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: P.itemIconHeart
    })
  }) : E === p.lr.POPULAR ? (0, n.jsx)("div", {
    className: P.itemIcon,
    children: (0, n.jsx)(o.YqE, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      colorClass: P.itemIconShop
    })
  }) : null : null, [L, E]), B = i.useCallback(() => (0, n.jsx)(b.A, {
    shape: "custom",
    containerClassName: P.card,
    backgroundImageClassName: P.cardBackgroundImage,
    foregroundImageClassName: P.cardImage,
    sku: _
  }), [_]);
  return (0, n.jsx)(d.Z, (t = function(e) {
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
  }({}, k), r = r = {
    source: E,
    cardRef: M,
    accessibleLabel: G,
    onCardClick: W,
    buttonCTALabel: H,
    buttonIcon: F,
    isOwned: U,
    renderItemPreview: B,
    renderSourceIcon: z
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