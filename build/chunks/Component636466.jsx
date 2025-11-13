/** Chunk was on 14953 **/
/** chunk id: 636466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => E,
  J: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk728345 = require("./728345.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk766717 = require("./766717.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk758650 = require("./758650.js"),
  Chunk976218 = require("./976218.js");

function v(e) {
  let {
    targetElementRef: t,
    onRequestClose: n,
    onActionClick: i
  } = e;
  return (0, r.jsx)(o.J2, {
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
      text: O.intl.string(O.t.RzWDqY),
      variant: "primary",
      onClick: i
    }],
    targetElementRef: t,
    title: O.intl.string(O.t.qh9t5c),
    body: O.intl.string(O.t.iM6fxV),
    graphic: true
  })
}

function C(e) {
  var t, n, {
      showPopover: o,
      onViewWishlist: c,
      onCardClick: d
    } = e,
    u = function(e, t) {
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
    }(e, ["showPopover", "onViewWishlist", "onCardClick"]);
  let g = i.useRef(null),
    m = (0, s.f9)(),
    b = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
    [y, O] = (0, p.US)([a.z.GAME_SHOP_WISHLIST_POPOVER], _.R.SIDEBAR, true),
    x = i.useCallback(() => {
      O(_.L.USER_DISMISS), d()
    }, [d, O]),
    j = i.useCallback(() => {
      O(_.L.USER_DISMISS)
    }, [O]),
    C = i.useCallback(() => {
      O(_.L.USER_DISMISS), c()
    }, [c, O]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h.Z, (t = function(e) {
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
    }({}, u), n = n = {
      onCardClick: x,
      ref: g
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), o && y === a.z.GAME_SHOP_WISHLIST_POPOVER && !m && !b && (0, r.jsx)(v, {
      targetElementRef: g,
      onRequestClose: j,
      onActionClick: C
    })]
  })
}

function I(e, t) {
  let {
    index: n,
    moreCount: i,
    onViewWishlist: l,
    isSingleCard: a = false,
    profileOwner: s,
    analyticsLocations: o,
    wishlistId: c
  } = t, u = null != i && i > 0, p = u ? O.intl.string(O.t.TxBQzD) : O.intl.string(O.t.ilhtIa);
  return (0, r.jsx)(C, {
    onCardClick: () => {
      if (u) return void l();
      (0, g.P)(e.sku, {
        isGift: true,
        giftRecipient: s,
        giftingOrigin: y.Wt.USER_PROFILE_WISHLIST
      }, {
        analyticsLocations: [d.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON]
      })
    },
    tooltipText: p,
    shouldScalePreview: false,
    renderPreview: () => (0, r.jsx)(m.A, {
      containerClassName: x.card,
      backgroundImageClassName: x.cardBackgroundImage,
      foregroundImageClassName: x.cardImage,
      sku: e.sku,
      shape: "custom"
    }),
    moreCount: i,
    isSingleCard: a,
    skuId: e.skuId,
    analyticsLocations: o,
    wishlistId: c,
    showPopover: 0 === n && e.sku.applicationId === b.t9,
    onViewWishlist: l
  }, e.skuId)
}

function S(e) {
  let {
    item: t,
    card: n,
    profileOwner: i
  } = e, {
    data: l
  } = (0, u.IX)(t.sku.applicationId);
  return (0, r.jsxs)("div", {
    className: j.singleItemContainer,
    children: [n, (0, r.jsx)("div", {
      className: j.singleItemInfo,
      children: (0, r.jsxs)(c.P3F, {
        onClick: () => {
          (0, g.P)(t.sku, {
            isGift: true,
            giftRecipient: i,
            giftingOrigin: y.Wt.USER_PROFILE_WISHLIST
          }, {
            analyticsLocations: [d.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON]
          })
        },
        className: j.singleItemName,
        "aria-label": O.intl.string(O.t.ilhtIa),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          lineClamp: 2,
          children: t.skuName
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: O.intl.format(O.t["CqpEC+"], {
            applicationName: null == l ? true : l.name
          })
        })]
      })
    })]
  })
}

function E(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: i,
    wishlistId: l,
    onViewWishlist: a
  } = t, s = I(e, {
    index: 0,
    profileOwner: n,
    analyticsLocations: i,
    onViewWishlist: a,
    isSingleCard: true,
    wishlistId: l
  });
  return (0, r.jsx)(S, {
    item: e,
    card: s,
    profileOwner: n
  })
}