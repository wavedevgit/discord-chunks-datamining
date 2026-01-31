/** Chunk was on 17534 **/
/** chunk id: 35092, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => w
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk635358 = require("./635358.js"),
  Chunk417597 = require("./417597.js"),
  Chunk435371 = require("./435371.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk576030 = require("./576030.jsx"),
  Chunk44120 = require("./44120.jsx"),
  Chunk533406 = require("./533406.jsx"),
  Chunk183555 = require("./183555.jsx");
require("./524380.js");
var Chunk594832 = require("./594832.js"),
  Chunk146423 = require("./146423.jsx"),
  Chunk460442 = require("./460442.jsx"),
  Chunk216020 = require("./216020.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk556786 = require("./556786.js");

function S(e) {
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
}

function I(e, t) {
  if (null == e) return {};
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}

function N(e) {
  let {
    sku: t,
    index: n,
    totalUnownedWishlistItems: i,
    wishlistOwner: a,
    wishlistId: o,
    style: c,
    tooltipTypeTitle: d,
    showTypeTooltip: h,
    tooltipIcon: p,
    skuPreviewStyle: g,
    singleCardInfo: f,
    onViewWishlist: m,
    onClick: j
  } = e, x = 3 === n ? i - 4 : 0, S = 1 === i, {
    trackUserProfileWishlistAction: I
  } = (0, b.NJ)(), N = l.useCallback(() => {
    (I({
      action: x > 0 ? v.Mq.PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD : v.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
      skuId: x > 0 ? null : t.id,
      wishlistId: o,
      productLines: new Set([t.productLine])
    }), x > 0) ? m(): j()
  }, [t, x, o, m, j, I]), T = l.useMemo(() => x > 0 ? E.intl.string(E.t.TxBQzD) : h ? d : E.intl.string(E.t.pLPjsb), [h, d, x]), P = l.useMemo(() => h && 0 === x ? E.intl.string(E.t.ilhtIa) : "", [h, x]);
  return (0, r.jsxs)("div", {
    className: C.kL,
    children: [(0, r.jsx)(u.un, {
      asContainer: true,
      asset: x > 0 ? true : p,
      assetSize: A.Q8,
      title: T,
      body: P,
      children: (0, r.jsx)("div", {
        className: s()(C.Ui, {
          [C.pr]: S
        }),
        children: (0, r.jsx)(y.A, {
          disableHoverOrFocus: true,
          sku: t,
          user: a,
          cardStyle: s()(C.Nr, C.Q1, c),
          skuPreviewStyle: s()(C.ho, g),
          onClick: N,
          children: x > 0 && (0, r.jsx)(O.B, {
            count: x
          })
        })
      })
    }), S && (0, r.jsx)(_.A, {
      title: f.title,
      description: f.description,
      onClick: N
    })]
  })
}

function T(e) {
  let {
    sku: t,
    wishlistOwner: n,
    analyticsLocations: i
  } = e, s = I(e, ["sku", "wishlistOwner", "analyticsLocations"]), a = (0, c.bG)([p.A], () => p.A.getApplication(t.applicationId)), {
    analyticsLocations: o
  } = (0, h.Ay)(...null != i ? i : [], d.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON), u = l.useCallback(() => {
    (0, m.a)(t, {
      isGift: true,
      giftRecipient: n,
      giftingOrigin: x.vQ.USER_PROFILE_WISHLIST
    }, {
      analyticsLocations: o
    })
  }, [t, n, o]), f = l.useMemo(() => ({
    title: t.name,
    description: E.intl.format(E.t["CqpEC+"], {
      applicationName: null == a ? true : a.name
    })
  }), [t.name, null == a ? true : a.name]);
  return (0, r.jsx)(N, S({
    sku: t,
    singleCardInfo: f,
    analyticsLocations: o,
    wishlistOwner: n,
    onClick: u,
    tooltipTypeTitle: E.intl.string(E.t["4yiU7x"]),
    tooltipIcon: (0, r.jsx)(g.mW, {
      application: a
    })
  }, s))
}

function P(e) {
  var t, n;
  let {
    sku: i,
    wishlistOwner: c,
    analyticsLocations: u,
    showTypeTooltip: d
  } = e, h = I(e, ["sku", "wishlistOwner", "analyticsLocations", "showTypeTooltip"]), p = l.useCallback(() => {
    (0, f.A)({
      skuId: i.id,
      isGift: true,
      giftingOrigin: x.vQ.USER_PROFILE_WISHLIST,
      analyticsLocations: null != u ? u : [],
      giftRecipient: c,
      variantsReturnStyle: o.g.VARIANTS_GROUP
    })
  }, [i.id, c, u]), m = l.useMemo(() => {
    var e, t;
    switch (null == i || null == (t = i.tenantMetadata) || null == (e = t.collectibles) ? true : e.type) {
      case a.R.PROFILE_EFFECT:
        return;
      case a.R.AVATAR_DECORATION:
        return s()(C.ML, C._P);
      default:
        return s()(C.ML, C.ZY)
    }
  }, [null == i || null == (n = i.tenantMetadata) || null == (t = n.collectibles) ? true : t.type]), b = l.useMemo(() => ({
    title: i.name,
    description: function(e) {
      var t;
      if ((null == (t = e.tenantMetadata) ? true : t.collectibles) == null) return "";
      if (null != e.bundledSkus && e.bundledSkus.length > 0) return E.intl.string(E.t.Zr5tjn);
      switch (e.tenantMetadata.collectibles.type) {
        case a.R.AVATAR_DECORATION:
          return E.intl.string(E.t["7v0T9P"]);
        case a.R.PROFILE_EFFECT:
          return E.intl.string(E.t.wR5wOo);
        case a.R.NAMEPLATE:
          return E.intl.string(E.t.x5CoXR);
        default:
          return ""
      }
    }(i)
  }), [i]);
  return (0, r.jsx)(N, S({
    sku: i,
    singleCardInfo: b,
    wishlistOwner: c,
    analyticsLocations: u,
    onClick: p,
    showTypeTooltip: d,
    skuPreviewStyle: m,
    tooltipTypeTitle: E.intl.string(E.t.HFhcqh),
    tooltipIcon: d ? (0, r.jsx)(g.mW, {}) : true
  }, h))
}

function w(e) {
  let {
    sku: t
  } = e, n = I(e, ["sku"]);
  switch (t.productLine) {
    case j.EZt.SOCIAL_LAYER_GAME_ITEM:
      return (0, r.jsx)(T, S({
        sku: t
      }, n));
    case j.EZt.COLLECTIBLES:
      return (0, r.jsx)(P, S({
        sku: t
      }, n));
    default:
      return null
  }
}