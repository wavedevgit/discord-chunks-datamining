/** Chunk was on web.js **/
/** chunk id: 851397, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
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
  Chunk256698 = require("./256698.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = N(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let P = 20;

function w(e) {
  var {
    profileOwner: t,
    additionalUserIds: n,
    hideButtonIcon: S = false,
    showPrice: T = false,
    showIcons: N = false,
    source: w = p.lr.WISHLIST,
    analyticsLocations: R
  } = e, D = A(e, ["profileOwner", "additionalUserIds", "hideButtonIcon", "showPrice", "showIcons", "source", "analyticsLocations"]);
  let {
    item: x,
    isOwner: L,
    giftingOrigin: j = b.Wt.USER_PROFILE_WISHLIST
  } = D, M = x.sku, k = M.applicationId, U = (0, c.q)(k), G = i.useRef(null), {
    analyticsLocations: Z
  } = (0, l.ZP)(...null != R ? R : [], s.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD), F = (0, a.e7)([f.Z], () => null != t && f.Z.hasSentGift(x.skuId, t.id), [x.skuId, t]), B = F || true === x.isOwned, V = x.skuName, {
    buttonCTALabel: H,
    buttonIcon: Y,
    handleCardClick: W
  } = i.useMemo(() => {
    var e, r, i, a, l, c, d, f;
    return L || B ? {
      buttonCTALabel: T ? (0, _.T4)(null != (l = null == (i = M.price) ? true : i.amount) ? l : 0, null != (c = null == (a = M.price) ? true : a.currency) ? c : y.pK.USD) : O.intl.string(O.t.FdGl5A),
      buttonIcon: true,
      handleCardClick: () => {
        (null == U ? true : U.guildId) != null && (L ? ((0, u.closeUserProfileModal)(), (0, h.default)({
          guildId: U.guildId,
          skuId: M.id,
          slug: M.slug
        })) : (0, m.g)({
          skuId: M.id,
          applicationId: U.id,
          guildId: U.guildId,
          isStorefront: false,
          analyticsLocations: Z
        }))
      }
    } : {
      buttonCTALabel: T ? (0, _.T4)(null != (d = null == (e = M.price) ? true : e.amount) ? d : 0, null != (f = null == (r = M.price) ? true : r.currency) ? f : y.pK.USD) : O.intl.string(O.t.ilhtIa),
      buttonIcon: S ? true : o.OgN,
      handleCardClick: () => {
        F || (0, g.P)(M, {
          isGift: true,
          giftRecipient: t,
          additionalUserIds: n,
          giftingOrigin: j
        }, {
          analyticsLocations: [...Z, s.Z.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
      }
    }
  }, [L, B, T, M, S, U, F, t, n, j, Z]), K = i.useCallback(() => N ? w === p.lr.WISHLIST ? (0, r.jsx)("div", {
    className: v.itemIcon,
    children: (0, r.jsx)(o.h_8, {
      size: "custom",
      width: P,
      height: P,
      color: "currentColor",
      colorClass: v.itemIconHeart
    })
  }) : w === p.lr.POPULAR ? (0, r.jsx)("div", {
    className: v.itemIcon,
    children: (0, r.jsx)(o.YqE, {
      size: "custom",
      width: P,
      height: P,
      color: "currentColor",
      colorClass: v.itemIconShop
    })
  }) : null : null, [N, w]), z = i.useCallback(() => (0, r.jsx)(E.A, {
    shape: "custom",
    containerClassName: v.card,
    backgroundImageClassName: v.cardBackgroundImage,
    foregroundImageClassName: v.cardImage,
    sku: M
  }), [M]);
  return (0, r.jsx)(d.Z, C(I({}, D), {
    source: w,
    cardRef: G,
    accessibleLabel: V,
    onCardClick: W,
    buttonCTALabel: H,
    buttonIcon: Y,
    isOwned: B,
    renderItemPreview: z,
    renderSourceIcon: K
  }))
}