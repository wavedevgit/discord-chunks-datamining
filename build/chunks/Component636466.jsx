/** Chunk was on web.js **/
/** chunk id: 636466, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => M,
  J: () => L
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk728345 = require("./728345.js"),
  Chunk525302 = require("./525302.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk766717 = require("./766717.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk699955 = require("./699955.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk466953 = require("./466953.js"),
  Chunk788015 = require("./788015.js"),
  Chunk993516 = require("./993516.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = w(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function D(e) {
  let {
    targetElementRef: t,
    onRequestClose: n,
    onActionClick: i
  } = e;
  return (0, r.jsx)(l.J2, {
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
      src: T.Z
    }
  })
}

function x(e) {
  var {
    showPopover: t,
    onViewWishlist: n,
    onCardClick: l
  } = e, c = R(e, ["showPopover", "onViewWishlist", "onCardClick"]);
  let u = i.useRef(null),
    d = (0, s.useHasAnyModalOpen)(),
    f = (0, a.e7)([m.Z], () => m.Z.hasLayers()),
    g = (0, h.NN)({
      location: "wishlist-card"
    }),
    [E, b] = (0, p.US)(g ? [o.z.GAME_SHOP_WISHLIST_POPOVER] : [], y.R.SIDEBAR, true),
    O = i.useCallback(() => {
      b(y.L.USER_DISMISS), l()
    }, [l, b]),
    v = i.useCallback(() => {
      b(y.L.USER_DISMISS)
    }, [b]),
    S = i.useCallback(() => {
      b(y.L.USER_DISMISS), n()
    }, [n, b]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.Z, P(A({}, c), {
      onCardClick: O,
      ref: u
    })), t && E === o.z.GAME_SHOP_WISHLIST_POPOVER && !d && !f && (0, r.jsx)(D, {
      targetElementRef: u,
      onRequestClose: v,
      onActionClick: S
    })]
  })
}

function L(e, t) {
  let {
    index: n,
    moreCount: i,
    onViewWishlist: a,
    isSingleCard: o = false,
    profileOwner: s,
    wishlistId: l,
    cardSize: c,
    analyticsLocations: d
  } = t, p = null != i && i > 0, _ = {
    title: p ? v.intl.string(v.t.TxBQzD) : v.intl.string(v.t["4yiU7x"]),
    body: p ? true : v.intl.string(v.t.ilhtIa),
    renderIcon: p ? true : f.Q,
    shouldShow: true
  }, m = () => {
    if (p) return void a();
    (0, g.P)(e.sku, {
      isGift: true,
      giftRecipient: s,
      giftingOrigin: O.Wt.USER_PROFILE_WISHLIST
    }, {
      analyticsLocations: [...d, u.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON]
    })
  }, h = () => (0, r.jsx)(E.A, {
    containerClassName: S.card,
    backgroundImageClassName: S.cardBackgroundImage,
    foregroundImageClassName: S.cardImage,
    sku: e.sku,
    shape: "custom"
  });
  return (0, r.jsx)(x, {
    wishlistItem: e,
    onCardClick: m,
    tooltipConfig: _,
    shouldScalePreview: false,
    renderPreview: h,
    moreCount: i,
    isSingleCard: o,
    wishlistId: l,
    showPopover: 0 === n && e.sku.applicationId === b.t9,
    onViewWishlist: a,
    cardSize: c
  }, e.skuId)
}

function j(e) {
  let {
    item: t,
    card: n,
    analyticsLocations: i,
    profileOwner: a
  } = e, {
    data: o
  } = (0, d.IX)(t.sku.applicationId), s = () => {
    (0, g.P)(t.sku, {
      isGift: true,
      giftRecipient: a,
      giftingOrigin: O.Wt.USER_PROFILE_WISHLIST
    }, {
      analyticsLocations: [...i, u.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON]
    })
  };
  return (0, r.jsxs)("div", {
    className: I.singleItemContainer,
    children: [n, (0, r.jsx)("div", {
      className: I.singleItemInfo,
      children: (0, r.jsxs)(c.P3F, {
        onClick: s,
        className: I.singleItemName,
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
            applicationName: null == o ? true : o.name
          })
        })]
      })
    })]
  })
}

function M(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: i,
    wishlistId: a,
    onViewWishlist: o
  } = t, s = L(e, {
    index: 0,
    profileOwner: n,
    analyticsLocations: i,
    onViewWishlist: o,
    isSingleCard: true,
    wishlistId: a
  });
  return (0, r.jsx)(j, {
    item: e,
    card: s,
    profileOwner: n,
    analyticsLocations: i
  })
}