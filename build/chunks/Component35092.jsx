/** Chunk was on 44669 **/
/** chunk id: 35092, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => H
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk635358 = require("./635358.js"),
  Chunk417597 = require("./417597.js"),
  Chunk554146 = require("./554146.js"),
  Chunk192308 = require("./192308.js"),
  Chunk342494 = require("./342494.js"),
  Chunk435371 = require("./435371.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk576030 = require("./576030.jsx"),
  Chunk379848 = require("./379848.jsx"),
  Chunk44120 = require("./44120.jsx"),
  Chunk916023 = require("./916023.js"),
  Chunk533406 = require("./533406.jsx"),
  Chunk183555 = require("./183555.jsx");
require("./524380.js");
var Chunk186111 = require("./186111.js"),
  Chunk594832 = require("./594832.js"),
  Chunk146423 = require("./146423.jsx"),
  Chunk460442 = require("./460442.jsx"),
  Chunk216020 = require("./216020.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk788868 = require("./788868.js"),
  Chunk188275 = require("./188275.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk556786 = require("./556786.js"),
  Chunk585048 = require("./585048.js");

function M(e) {
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

function G(e, t) {
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
let k = Chunk64700.forwardRef(function(e, t) {
  let {
    sku: n,
    index: i,
    totalUnownedWishlistItems: a,
    wishlistOwner: o,
    wishlistId: c,
    style: u,
    tooltipTypeTitle: d,
    showTypeTooltip: p,
    tooltipIcon: g,
    skuPreviewStyle: f,
    singleCardInfo: m,
    onViewWishlist: b,
    onClick: A
  } = e, y = 3 === i ? a - 4 : 0, O = 1 === a, {
    trackUserProfileWishlistAction: j
  } = (0, x.NJ)(), _ = l.useCallback(() => {
    (j({
      action: y > 0 ? w.Mq.PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD : w.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
      skuId: y > 0 ? null : n.id,
      wishlistId: c,
      productLines: new Set([n.productLine])
    }), y > 0) ? b(): A()
  }, [n, y, c, b, A, j]), I = l.useMemo(() => y > 0 ? R.intl.string(R.t.TxBQzD) : p ? d : R.intl.string(R.t.pLPjsb), [p, d, y]), N = l.useMemo(() => p && 0 === y ? R.intl.string(R.t.ilhtIa) : "", [p, y]);
  return (0, r.jsxs)("div", {
    className: D.kL,
    ref: t,
    children: [(0, r.jsx)(h.un, {
      asContainer: true,
      asset: y > 0 ? true : g,
      assetSize: v.Q8,
      title: I,
      body: N,
      children: (0, r.jsx)("div", {
        className: s()(D.Ui, {
          [D.pr]: O
        }),
        children: (0, r.jsx)(E.A, {
          disableHoverOrFocus: true,
          sku: n,
          user: o,
          cardStyle: s()(D.Nr, D.Q1, u),
          skuPreviewStyle: s()(D.ho, f),
          onClick: _,
          children: y > 0 && (0, r.jsx)(C.BF, {
            count: y
          })
        })
      })
    }), O && (0, r.jsx)(S.A, {
      title: m.title,
      description: m.description,
      onClick: _
    })]
  })
});

function U(e) {
  let {
    targetElementRef: t,
    onRequestClose: n,
    onActionClick: l
  } = e;
  return (0, r.jsx)(p.AM, {
    size: "lg",
    shouldShow: true,
    position: "left",
    caretConfig: {
      align: "center"
    },
    gradientColor: "blue",
    align: "center",
    onRequestClose: n,
    actions: [{
      text: R.intl.string(R.t.uB4Gax),
      variant: "primary",
      onClick: l
    }],
    targetElementRef: t,
    title: R.intl.string(R.t.qh9t5c),
    body: R.intl.string(R.t.iM6fxV),
    graphic: {
      type: "image",
      src: L.A
    }
  })
}

function V(e) {
  let {
    sku: t,
    wishlistOwner: n,
    index: i,
    onViewWishlist: s,
    analyticsLocations: a
  } = e, o = G(e, ["sku", "wishlistOwner", "index", "onViewWishlist", "analyticsLocations"]), p = (0, c.bG)([m.A], () => m.A.getApplication(t.applicationId)), {
    analyticsLocations: h
  } = (0, f.Ay)(...null != a ? a : [], g.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON), y = (0, O.Jw)({
    location: "dm-side-panel-social-layer-storefront-wishlist-item-card"
  }), x = (0, d.useHasAnyModalOpen)(), v = (0, c.bG)([_.A], () => _.A.hasLayers()), [E, C] = (0, A.kn)(!y || 0 !== i || t.applicationId !== P.XR || x || v ? [] : [u.M.GAME_SHOP_WISHLIST_POPOVER], N.m.SIDEBAR, true), S = l.useRef(null), I = l.useCallback(() => {
    C(N.i.USER_DISMISS), (0, j.a)(t, {
      isGift: true,
      giftRecipient: n,
      giftingOrigin: T.vQ.USER_PROFILE_WISHLIST
    }, {
      analyticsLocations: h
    })
  }, [C, t, n, h]), w = l.useCallback(() => {
    C(N.i.USER_DISMISS)
  }, [C]), D = l.useCallback(() => {
    C(N.i.USER_DISMISS), s()
  }, [s, C]), L = l.useMemo(() => ({
    title: t.name,
    description: R.intl.format(R.t["CqpEC+"], {
      applicationName: null == p ? true : p.name
    })
  }), [t.name, null == p ? true : p.name]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k, M({
      ref: S,
      sku: t,
      index: i,
      onViewWishlist: s,
      singleCardInfo: L,
      analyticsLocations: h,
      wishlistOwner: n,
      onClick: I,
      tooltipTypeTitle: R.intl.string(R.t["4yiU7x"]),
      tooltipIcon: (0, r.jsx)(b.mW, {
        application: p
      })
    }, o)), E === u.M.GAME_SHOP_WISHLIST_POPOVER && (0, r.jsx)(U, {
      targetElementRef: S,
      onRequestClose: w,
      onActionClick: D
    })]
  })
}

function B(e) {
  var t, n;
  let {
    sku: i,
    wishlistOwner: c,
    analyticsLocations: u,
    showTypeTooltip: d
  } = e, p = G(e, ["sku", "wishlistOwner", "analyticsLocations", "showTypeTooltip"]), h = l.useCallback(() => {
    (0, y.A)({
      skuId: i.id,
      isGift: true,
      giftingOrigin: T.vQ.USER_PROFILE_WISHLIST,
      analyticsLocations: null != u ? u : [],
      giftRecipient: c,
      variantsReturnStyle: o.g.VARIANTS_GROUP
    })
  }, [i.id, c, u]), g = l.useMemo(() => {
    var e, t;
    switch (null == i || null == (t = i.tenantMetadata) || null == (e = t.collectibles) ? true : e.type) {
      case a.R.PROFILE_EFFECT:
        return;
      case a.R.AVATAR_DECORATION:
        return s()(D.ML, D._P);
      default:
        return s()(D.ML, D.ZY)
    }
  }, [null == i || null == (n = i.tenantMetadata) || null == (t = n.collectibles) ? true : t.type]), f = l.useMemo(() => ({
    title: i.name,
    description: function(e) {
      var t;
      if ((null == (t = e.tenantMetadata) ? true : t.collectibles) == null) return "";
      if (null != e.bundledSkus && e.bundledSkus.length > 0) return R.intl.string(R.t.Zr5tjn);
      switch (e.tenantMetadata.collectibles.type) {
        case a.R.AVATAR_DECORATION:
          return R.intl.string(R.t["7v0T9P"]);
        case a.R.PROFILE_EFFECT:
          return R.intl.string(R.t.wR5wOo);
        case a.R.NAMEPLATE:
          return R.intl.string(R.t.x5CoXR);
        default:
          return ""
      }
    }(i)
  }), [i]);
  return (0, r.jsx)(k, M({
    sku: i,
    singleCardInfo: f,
    wishlistOwner: c,
    analyticsLocations: u,
    onClick: h,
    showTypeTooltip: d,
    skuPreviewStyle: g,
    tooltipTypeTitle: R.intl.string(R.t.HFhcqh),
    tooltipIcon: d ? (0, r.jsx)(b.mW, {}) : true
  }, p))
}

function H(e) {
  let {
    sku: t
  } = e, n = G(e, ["sku"]);
  switch (t.productLine) {
    case I.EZt.SOCIAL_LAYER_GAME_ITEM:
      return (0, r.jsx)(V, M({
        sku: t
      }, n));
    case I.EZt.COLLECTIBLES:
      return (0, r.jsx)(B, M({
        sku: t
      }, n));
    default:
      return null
  }
}