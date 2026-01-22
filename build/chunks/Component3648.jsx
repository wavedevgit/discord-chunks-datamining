/** Chunk was on web.js **/
/** chunk id: 3648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k,
  Z: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk192308 = require("./192308.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk627363 = require("./627363.js"),
  Chunk576030 = require("./576030.jsx"),
  Chunk379848 = require("./379848.jsx"),
  Chunk957785 = require("./957785.jsx"),
  Chunk594832 = require("./594832.js"),
  Chunk186111 = require("./186111.js"),
  Chunk916023 = require("./916023.js"),
  Chunk533406 = require("./533406.jsx"),
  Chunk366523 = require("./366523.jsx"),
  Chunk188275 = require("./188275.js"),
  Chunk49999 = require("./49999.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk407494 = require("./407494.js"),
  Chunk101616 = require("./101616.js"),
  Chunk585048 = require("./585048.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = D(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function x(e) {
  let {
    targetElementRef: t,
    onRequestClose: n,
    onActionClick: i
  } = e;
  return (0, r.jsx)(l.AM, {
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
      text: v.intl.string(v.t.uB4Gax),
      variant: "primary",
      onClick: i
    }],
    targetElementRef: t,
    title: v.intl.string(v.t.qh9t5c),
    body: v.intl.string(v.t.iM6fxV),
    graphic: {
      type: "image",
      src: T.A
    }
  })
}

function L(e) {
  let {
    showPopover: t,
    onViewWishlist: n,
    onCardClick: l
  } = e, c = P(e, ["showPopover", "onViewWishlist", "onCardClick"]), u = i.useRef(null), d = (0, o.useHasAnyModalOpen)(), f = (0, a.bG)([m.A], () => m.A.hasLayers()), h = (0, g.Jw)({
    location: "wishlist-card"
  }), [E, b] = (0, p.kn)(h ? [s.M.GAME_SHOP_WISHLIST_POPOVER] : [], O.m.SIDEBAR, true), y = i.useCallback(() => {
    b(O.i.USER_DISMISS), l()
  }, [l, b]), A = i.useCallback(() => {
    b(O.i.USER_DISMISS)
  }, [b]), v = i.useCallback(() => {
    b(O.i.USER_DISMISS), n()
  }, [n, b]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.A, w(N({}, c), {
      onCardClick: y,
      ref: u
    })), t && E === s.M.GAME_SHOP_WISHLIST_POPOVER && !d && !f && (0, r.jsx)(x, {
      targetElementRef: u,
      onRequestClose: A,
      onActionClick: v
    })]
  })
}

function j(e, t) {
  let {
    index: n,
    moreCount: i,
    onViewWishlist: a,
    isSingleCard: s = false,
    profileOwner: o,
    wishlistId: l,
    cardSize: c,
    analyticsLocations: d,
    itemSource: p
  } = t, _ = null != i && i > 0, m = p === h.uS.POPULAR ? v.intl.string(v.t.Ig6VDH) : v.intl.string(v.t.ilhtIa), g = {
    title: _ ? v.intl.string(v.t.TxBQzD) : v.intl.string(v.t["4yiU7x"]),
    body: _ ? true : m,
    renderIcon: _ ? true : f.GM,
    shouldShow: true
  }, O = () => {
    _ ? a() : (0, E.a)(e.sku, {
      isGift: true,
      giftRecipient: o,
      giftingOrigin: A.vQ.USER_PROFILE_WISHLIST
    }, {
      analyticsLocations: [...d, u.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON]
    })
  }, I = () => (0, r.jsx)(b.e, {
    containerClassName: S.Nr,
    backgroundImageClassName: S.GC,
    foregroundImageClassName: S.wP,
    sku: e.sku,
    shape: "custom"
  });
  return (0, r.jsx)(L, {
    wishlistItem: e,
    onCardClick: O,
    tooltipConfig: g,
    shouldScalePreview: false,
    renderPreview: I,
    moreCount: i,
    isSingleCard: s,
    wishlistId: l,
    showPopover: 0 === n && e.sku.applicationId === y.XR,
    onViewWishlist: a,
    cardSize: c,
    itemSource: p
  }, e.skuId)
}

function M(e) {
  let {
    item: t,
    card: n,
    analyticsLocations: i,
    profileOwner: a
  } = e, {
    data: s
  } = (0, d.YY)(t.sku.applicationId), o = () => {
    (0, E.a)(t.sku, {
      isGift: true,
      giftRecipient: a,
      giftingOrigin: A.vQ.USER_PROFILE_WISHLIST
    }, {
      analyticsLocations: [...i, u.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON]
    })
  };
  return (0, r.jsxs)("div", {
    className: I.D5,
    children: [n, (0, r.jsx)("div", {
      className: I.S7,
      children: (0, r.jsxs)(c.DUT, {
        onClick: o,
        className: I.Hh,
        "aria-label": v.intl.string(v.t.pLPjsb),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          lineClamp: 2,
          children: t.skuName
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: v.intl.format(v.t["CqpEC+"], {
            applicationName: null == s ? true : s.name
          })
        })]
      })
    })]
  })
}

function k(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: i,
    wishlistId: a,
    onViewWishlist: s
  } = t, o = j(e, {
    index: 0,
    profileOwner: n,
    analyticsLocations: i,
    onViewWishlist: s,
    isSingleCard: true,
    wishlistId: a
  });
  return (0, r.jsx)(M, {
    item: e,
    card: o,
    profileOwner: n,
    analyticsLocations: i
  })
}