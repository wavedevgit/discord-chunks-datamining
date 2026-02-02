/** Chunk was on 62694 **/
/** chunk id: 878244, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk587895 = require("./587895.js"),
  Chunk576030 = require("./576030.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk594832 = require("./594832.js"),
  Chunk146423 = require("./146423.jsx"),
  Chunk460442 = require("./460442.jsx"),
  Chunk754804 = require("./754804.jsx"),
  Chunk479026 = require("./479026.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk804810 = require("./804810.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = i[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function b(e, t) {
  if (null == e) return {};
  var i, n, r, l = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (r = 0, i = Reflect.ownKeys(e); r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }
  if (l = function(e, t) {
      if (null == e) return {};
      var i, n, r = {},
        l = Object.getOwnPropertyNames(e);
      for (n = 0; n < l.length; n++) i = l[n], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
      return r
    }(e, t), Object.getOwnPropertySymbols)
    for (r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
  return l
}
let w = Chunk788868.vQ.DM_CHANNEL_WISHLIST;

function y(e) {
  let {
    sku: t,
    onClick: i,
    onOpenWishlist: l,
    wishlistOwner: s,
    tooltipInfo: o,
    wishlistId: u,
    source: d,
    hasMultipleSources: h,
    totalUnownedWishlistItems: I,
    index: S,
    skuPreviewStyle: C
  } = e, b = r.useMemo(() => ({
    collectibles: {
      nameplate: {
        width: 136
      }
    }
  }), []), w = S === m.pl - 1 && I > m.pl, y = I - m.pl + 1, O = r.useCallback(() => {
    if (w) return void l();
    let e = d === m.uS.WISHLIST ? "wishlist" : "shop";
    c.default.track(g.HAw.GIFTING_ITEM_CLICKED, {
      sku_id: t.id,
      item_source: e,
      wishlist_id: d === m.uS.WISHLIST ? u : null,
      product_line: t.productLine
    }), null == i || i()
  }, [i, u, d, t.id, t.productLine, l, w]), j = r.useMemo(() => {
    var e;
    let i = (0, n.jsxs)(p.A, {
      sku: t,
      user: s,
      cardStyle: x.Nr,
      skuPreviewStyle: C,
      options: b,
      onClick: O,
      children: [h && d === m.uS.POPULAR && (0, n.jsx)(_.o, {}), h && d === m.uS.WISHLIST && (0, n.jsx)(_.k, {}), w && (0, n.jsx)(f.Yb, {
        count: y
      })]
    });
    return o.shouldShow ? null != o.title && null == o.body && null == o.icon ? (0, n.jsx)(a.m_, {
      text: o.title,
      position: "top",
      asContainer: true,
      delay: m.Zh,
      children: i
    }) : (0, n.jsx)(a.un, {
      title: o.title,
      body: null != (e = o.body) ? e : "",
      asset: o.icon,
      assetSize: m.Q8,
      position: "top",
      asContainer: true,
      delay: m.Zh,
      children: i
    }) : i
  }, [t, s, O, d, h, b, o.shouldShow, o.title, o.body, o.icon, y, C, w]);
  return (0, n.jsx)("div", {
    children: j
  })
}

function O(e) {
  let {
    sku: t,
    wishlistOwner: i,
    analyticsLocations: l,
    onClick: a,
    hasMultipleTypes: c,
    hasMultipleSources: p,
    source: f
  } = e, _ = b(e, ["sku", "wishlistOwner", "analyticsLocations", "onClick", "hasMultipleTypes", "hasMultipleSources", "source"]), g = (0, s.bG)([o.A], () => o.A.getApplication(t.applicationId)), I = r.useMemo(() => {
    let e = d.Ay.getName(i),
      t = f === m.uS.WISHLIST ? S.intl.formatToPlainString(S.t.p3RmJF, {
        username: e
      }) : S.intl.string(S.t.Ig6VDH);
    return c || p ? !c && p ? {
      title: t,
      icon: (0, n.jsx)(u.mW, {
        application: g
      }),
      shouldShow: true
    } : c && !p ? {
      title: S.intl.string(S.t["4yiU7x"]),
      icon: (0, n.jsx)(u.mW, {
        application: g
      }),
      shouldShow: true
    } : {
      title: S.intl.string(S.t["4yiU7x"]),
      body: t,
      icon: (0, n.jsx)(u.mW, {
        application: g
      }),
      shouldShow: true
    } : {
      title: S.intl.string(S.t["4yiU7x"]),
      shouldShow: false
    }
  }, [f, c, p, g, i]), x = r.useCallback(() => {
    null == a || a(), (0, h.T)({
      isOwner: false,
      giftingOrigin: w,
      profileOwner: i,
      isItemOwned: false,
      application: null != g ? g : true,
      sku: t,
      analyticsLocations: null != l ? l : []
    })
  }, [t, i, g, l, a]);
  return (0, n.jsx)(y, C({
    sku: t,
    wishlistOwner: i,
    analyticsLocations: l,
    onClick: x,
    hasMultipleTypes: c,
    hasMultipleSources: p,
    tooltipInfo: I,
    source: f
  }, _))
}

function j(e) {
  var t, i;
  let {
    sku: s,
    wishlistOwner: a,
    analyticsLocations: o,
    onClick: c,
    hasMultipleTypes: p,
    hasMultipleSources: f,
    source: _
  } = e, g = b(e, ["sku", "wishlistOwner", "analyticsLocations", "onClick", "hasMultipleTypes", "hasMultipleSources", "source"]), I = r.useMemo(() => {
    let e = d.Ay.getName(a),
      t = _ === m.uS.WISHLIST ? S.intl.formatToPlainString(S.t.p3RmJF, {
        username: e
      }) : S.intl.string(S.t.Ig6VDH);
    return p || f ? !p && f ? {
      title: t,
      shouldShow: true
    } : p && !f ? {
      title: S.intl.string(S.t.HFhcqh),
      icon: (0, n.jsx)(u.mW, {}),
      shouldShow: true
    } : {
      title: S.intl.string(S.t.HFhcqh),
      body: t,
      icon: (0, n.jsx)(u.mW, {}),
      shouldShow: true
    } : {
      title: S.intl.string(S.t.HFhcqh),
      shouldShow: false
    }
  }, [_, p, f, a]), O = r.useMemo(() => {
    var e, t;
    return null != s.bundledSkus && s.bundledSkus.length > 0 ? x.Eo : (null == (t = s.tenantMetadata) || null == (e = t.collectibles) ? true : e.type) === l.R.NAMEPLATE ? x.qF : true
  }, [s.bundledSkus, null == (i = s.tenantMetadata) || null == (t = i.collectibles) ? true : t.type]), j = r.useMemo(() => () => {
    (0, h._)({
      isOwner: false,
      isItemOwned: false,
      onWishlistItemClick: c,
      profileOwner: a,
      sku: s,
      analyticsLocations: null != o ? o : [],
      giftingOrigin: w
    })
  }, [s, a, c, o]);
  return (0, n.jsx)(y, C({
    sku: s,
    wishlistOwner: a,
    analyticsLocations: o,
    onClick: j,
    hasMultipleTypes: p,
    hasMultipleSources: f,
    tooltipInfo: I,
    source: _,
    skuPreviewStyle: O
  }, g))
}

function T(e) {
  let {
    sku: t
  } = e, i = b(e, ["sku"]);
  switch (t.productLine) {
    case g.EZt.SOCIAL_LAYER_GAME_ITEM:
      return (0, n.jsx)(O, C({
        sku: t
      }, i));
    case g.EZt.COLLECTIBLES:
      return (0, n.jsx)(j, C({
        sku: t
      }, i));
    default:
      return null
  }
}