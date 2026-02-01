/** Chunk was on web.js **/
/** chunk id: 235218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk657331 = require("./657331.js"),
  Chunk242640 = require("./242640.jsx"),
  Chunk111085 = require("./111085.js"),
  Chunk594832 = require("./594832.js"),
  Chunk580630 = require("./580630.js"),
  Chunk44724 = require("./44724.js"),
  Chunk317560 = require("./317560.jsx"),
  Chunk533406 = require("./533406.jsx"),
  Chunk366523 = require("./366523.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk125908 = require("./125908.js");

function A(e, t, n) {
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
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = N(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let w = 20;

function R(e) {
  let {
    profileOwner: t,
    additionalUserIds: n,
    hideButtonIcon: A = false,
    showPrice: S = false,
    showIcons: N = false,
    source: R = p.uS.WISHLIST,
    analyticsLocations: P
  } = e, D = C(e, ["profileOwner", "additionalUserIds", "hideButtonIcon", "showPrice", "showIcons", "source", "analyticsLocations"]), {
    item: L,
    isOwner: x,
    giftingOrigin: M = y.vQ.USER_PROFILE_WISHLIST
  } = D, j = L.sku, k = j.applicationId, U = (0, c.h)(k), G = i.useRef(null), {
    analyticsLocations: V
  } = (0, l.Ay)(...null != P ? P : [], s.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD), F = (0, a.bG)([f.A], () => null != t && f.A.hasSentGift(L.skuId, t.id), [L.skuId, t]), B = F || true === L.isOwned, H = L.skuName, {
    buttonCTALabel: Y,
    buttonIcon: W,
    handleCardClick: K
  } = i.useMemo(() => {
    var e, r, i, a, l, c, d, f;
    return x || B ? {
      buttonCTALabel: S ? (0, _.$g)(null != (l = null == (d = j.price) ? true : d.amount) ? l : 0, null != (c = null == (f = j.price) ? true : f.currency) ? c : b.Yr.USD) : O.intl.string(O.t.FdGl5A),
      buttonIcon: true,
      handleCardClick: () => {
        (null == U ? true : U.guildId) != null && (x ? ((0, u.closeUserProfileModal)(), (0, h.default)({
          guildId: U.guildId,
          skuId: j.id,
          slug: j.slug
        })) : (0, m.R)({
          skuId: j.id,
          applicationId: U.id,
          guildId: U.guildId,
          isStorefront: false,
          analyticsLocations: V
        }))
      }
    } : {
      buttonCTALabel: S ? (0, _.$g)(null != (e = null == (i = j.price) ? true : i.amount) ? e : 0, null != (r = null == (a = j.price) ? true : a.currency) ? r : b.Yr.USD) : O.intl.string(O.t.ilhtIa),
      buttonIcon: A ? true : o.okO,
      handleCardClick: () => {
        F || (0, g.a)(j, {
          isGift: true,
          giftRecipient: t,
          additionalUserIds: n,
          giftingOrigin: M
        }, {
          analyticsLocations: [...V, s.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
      }
    }
  }, [x, B, S, j, A, U, F, t, n, M, V]), z = i.useCallback(() => N ? R === p.uS.WISHLIST ? (0, r.jsx)("div", {
    className: v.Fx,
    children: (0, r.jsx)(o.C3E, {
      size: "custom",
      width: w,
      height: w,
      color: "currentColor",
      colorClass: v.Be
    })
  }) : R === p.uS.POPULAR ? (0, r.jsx)("div", {
    className: v.Fx,
    children: (0, r.jsx)(o.Y3C, {
      size: "custom",
      width: w,
      height: w,
      color: "currentColor",
      colorClass: v.rY
    })
  }) : null : null, [N, R]), q = i.useCallback(() => (0, r.jsx)(E.e, {
    shape: "custom",
    containerClassName: v.Nr,
    backgroundImageClassName: v.GC,
    foregroundImageClassName: v.wP,
    sku: j
  }), [j]);
  return (0, r.jsx)(d.A, T(I({}, D), {
    source: R,
    cardRef: G,
    accessibleLabel: H,
    onCardClick: K,
    buttonCTALabel: Y,
    buttonIcon: W,
    isOwned: B,
    renderItemPreview: q,
    renderSourceIcon: z
  }))
}