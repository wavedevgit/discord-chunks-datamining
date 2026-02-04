/** Chunk was on 59569 **/
/** chunk id: 86638, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk111085 = require("./111085.js"),
  Chunk594832 = require("./594832.js"),
  Chunk146423 = require("./146423.jsx"),
  Chunk121547 = require("./121547.jsx"),
  Chunk460442 = require("./460442.jsx"),
  Chunk662349 = require("./662349.jsx"),
  Chunk479026 = require("./479026.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk518477 = require("./518477.js"),
  Chunk894100 = require("./894100.js");

function A(e) {
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

function P(e, t) {
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

function E(e) {
  let {
    item: t,
    wishlistOwner: n,
    currentUser: i,
    style: o,
    isDragging: s,
    dragHandle: u,
    tooltipConfig: d,
    skuPreviewStyle: f,
    isHoveringOrFocusing: g,
    setIsHoveringOrFocusing: m,
    onClick: x,
    wishlistId: v,
    analyticsLocations: _,
    isItemOwned: A
  } = e, P = l.useRef(null), E = l.useRef(m), [S, T] = l.useState(false);
  l.useEffect(() => {
    E.current = m
  }, [m]), l.useEffect(() => {
    let e = P.current;
    if (null == e) return;
    let t = () => {
      E.current(false)
    };
    return e.addEventListener("focusin", t), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let {
    trackUserProfileWishlistAction: N
  } = (0, p.NJ)(), C = l.useCallback(() => {
    null != t.sku && (N({
      wishlistId: v,
      action: I.Mq.WISHLIST_ITEM_CLICKED,
      skuId: t.sku.id,
      productLines: new Set([t.sku.productLine])
    }), x())
  }, [x, t.sku, v, N]), R = null != u ? (0, r.jsx)("div", {
    ref: P,
    className: w.BU,
    children: u
  }) : null, k = l.useMemo(() => {
    if (null == t.sku) return null;
    let e = (0, r.jsxs)(y.A, {
        sku: t.sku,
        user: n,
        cardStyle: a()(w.Nr, o),
        skuPreviewStyle: a()(w.ev, {
          [w.go]: A && !g
        }, f),
        disableHoverOrFocus: s,
        onHoverOrFocusChange: m,
        onClick: C,
        children: [(0, r.jsx)(h.A, {
          onClick: C,
          isHoveringOrFocusing: g,
          currentUser: i,
          wishlistOwner: n,
          isOwned: A
        }), A && (0, r.jsx)(j.gS, {
          isHoveringOrFocusing: g
        })]
      }),
      l = e;
    if (d.shouldShow)
      if (null != d.title && null == d.body && null == d.renderIcon) l = (0, r.jsx)(c.m_, {
        text: d.title,
        position: "top",
        asContainer: true,
        delay: b.Zh,
        children: e
      });
      else {
        var u, p;
        l = (0, r.jsx)(c.un, {
          title: d.title,
          body: null != (u = d.body) ? u : "",
          asset: null == (p = d.renderIcon) ? true : p.call(d, t),
          assetSize: b.Q8,
          position: "top",
          asContainer: true,
          delay: b.Zh,
          children: e
        })
      } return l
  }, [d, t, s, g, A, C, m, f, o, n, i]);
  return null == t.sku ? null : (0, r.jsxs)("div", {
    className: w.kL,
    children: [(0, r.jsx)("div", {
      className: S ? w.B8 : true,
      children: k
    }), R, n.id === i.id && (0, r.jsx)(O.A, {
      wishlistId: v,
      sku: t.sku,
      analyticsLocations: _,
      isHoveringOrFocusing: g,
      onHoverOrFocusChange: T
    })]
  })
}

function S(e) {
  var t;
  let {
    item: n,
    isItemOwned: i,
    wishlistOwner: a,
    currentUser: o,
    analyticsLocations: s
  } = e, c = P(e, ["item", "isItemOwned", "wishlistOwner", "currentUser", "analyticsLocations"]), u = (0, f.h)(null == (t = n.sku) ? true : t.applicationId), d = l.useMemo(() => () => {
    if (null == n.sku) return;
    let e = a.id === o.id;
    (0, x.T)({
      isOwner: e,
      giftingOrigin: _.vQ.USER_PROFILE_WISHLIST,
      profileOwner: a,
      isItemOwned: i,
      application: null != u ? u : true,
      sku: n.sku,
      analyticsLocations: null != s ? s : []
    })
  }, [n.sku, a, o.id, i, u, s]);
  return (0, r.jsx)(E, A({
    item: n,
    wishlistOwner: a,
    isItemOwned: i,
    onClick: d,
    analyticsLocations: s,
    currentUser: o
  }, c))
}

function T(e) {
  let {
    item: t,
    wishlistOwner: n,
    isItemOwned: i,
    analyticsLocations: a,
    currentUser: s,
    isHoveringOrFocusing: c
  } = e, u = P(e, ["item", "wishlistOwner", "isItemOwned", "analyticsLocations", "currentUser", "isHoveringOrFocusing"]), d = l.useMemo(() => {
    var e, n;
    if (null != t.sku && t.sku.productLine === v.EZt.COLLECTIBLES && (null == (n = t.sku.tenantMetadata) || null == (e = n.collectibles) ? true : e.type) !== o.R.PROFILE_EFFECT) return w.mn
  }, [t.sku]), f = l.useMemo(() => () => {
    if (null == t.sku) return;
    let e = n.id === s.id;
    (0, x._)({
      isOwner: e,
      isItemOwned: i,
      onWishlistItemClick: true,
      profileOwner: n,
      sku: t.sku,
      analyticsLocations: null != a ? a : [],
      giftingOrigin: _.vQ.USER_PROFILE_WISHLIST
    })
  }, [t.sku, i, n, s.id, a]);
  return (0, r.jsx)(E, A({
    item: t,
    wishlistOwner: n,
    isItemOwned: i,
    currentUser: s,
    onClick: f,
    isHoveringOrFocusing: c,
    skuPreviewStyle: c ? d : true,
    analyticsLocations: a
  }, u))
}

function N(e) {
  var t;
  let {
    item: n,
    wishlistOwner: i,
    wishlistId: a,
    analyticsLocations: o
  } = e, c = P(e, ["item", "wishlistOwner", "wishlistId", "analyticsLocations"]), {
    analyticsLocations: f
  } = (0, d.Ay)(...null != o ? o : [], (null == (t = n.sku) ? true : t.productLine) === v.EZt.SOCIAL_LAYER_GAME_ITEM ? u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : []), p = (0, s.bG)([g.default], () => g.default.getCurrentUser()), [b, y] = l.useState(false), O = (0, s.bG)([m.A], () => m.A.hasSentGift(n.skuId, i.id), [i, n.skuId]), j = l.useMemo(() => true === n.isOwned || O, [n.isOwned, O]);
  if (null == n.sku || null == p) return null;
  switch (n.sku.productLine) {
    case v.EZt.SOCIAL_LAYER_GAME_ITEM:
      return (0, r.jsx)(S, A({
        item: n,
        analyticsLocations: f,
        isHoveringOrFocusing: b,
        setIsHoveringOrFocusing: y,
        currentUser: p,
        isItemOwned: j,
        wishlistOwner: i,
        wishlistId: a
      }, c));
    case v.EZt.COLLECTIBLES:
      return (0, r.jsx)(T, A({
        item: n,
        analyticsLocations: f,
        isHoveringOrFocusing: b,
        setIsHoveringOrFocusing: y,
        currentUser: p,
        isItemOwned: j,
        wishlistOwner: i,
        wishlistId: a
      }, c));
    default:
      return null
  }
}