/** Chunk was on 91053 **/
/** chunk id: 636466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => T,
  J: () => Z
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
  Chunk758650 = require("./758650.js"),
  Chunk976218 = require("./976218.js"),
  Chunk30399 = require("./30399.js");

function S(e) {
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
      text: x.intl.string(x.t.uB4Gax),
      variant: "primary",
      onClick: i
    }],
    targetElementRef: t,
    title: x.intl.string(x.t.qh9t5c),
    body: x.intl.string(x.t.iM6fxV),
    graphic: {
      type: "image",
      src: I.Z
    }
  })
}

function E(e) {
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
  let p = i.useRef(null),
    b = (0, s.f9)(),
    _ = (0, l.e7)([g.Z], () => g.Z.hasLayers()),
    y = (0, m.NN)({
      location: "wishlist-card"
    }),
    [j, x] = (0, h.US)(y ? [a.z.GAME_SHOP_WISHLIST_POPOVER] : [], O.R.SIDEBAR, true),
    v = i.useCallback(() => {
      x(O.L.USER_DISMISS), d()
    }, [d, x]),
    C = i.useCallback(() => {
      x(O.L.USER_DISMISS)
    }, [x]),
    I = i.useCallback(() => {
      x(O.L.USER_DISMISS), c()
    }, [c, x]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.Z, (t = function(e) {
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
      onCardClick: v,
      ref: p
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), o && j === a.z.GAME_SHOP_WISHLIST_POPOVER && !b && !_ && (0, r.jsx)(S, {
      targetElementRef: p,
      onRequestClose: C,
      onActionClick: I
    })]
  })
}

function Z(e, t) {
  let {
    index: n,
    moreCount: i,
    onViewWishlist: l,
    isSingleCard: a = false,
    profileOwner: s,
    wishlistId: o,
    showTypeTooltip: c = false
  } = t, u = null != i && i > 0, h = c && !u, f = u ? x.intl.string(x.t.TxBQzD) : x.intl.string(x.t.pLPjsb), g = {
    title: h ? x.intl.string(x.t["4yiU7x"]) : f,
    body: h ? x.intl.string(x.t.ilhtIa) : true,
    renderIcon: h ? p.Q : true,
    shouldShow: true
  };
  return (0, r.jsx)(E, {
    wishlistItem: e,
    onCardClick: () => {
      if (u) return void l();
      (0, b.P)(e.sku, {
        isGift: true,
        giftRecipient: s,
        giftingOrigin: j.Wt.USER_PROFILE_WISHLIST
      }, {
        analyticsLocations: [d.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON]
      })
    },
    tooltipConfig: g,
    shouldScalePreview: false,
    renderPreview: () => (0, r.jsx)(_.A, {
      containerClassName: v.card,
      backgroundImageClassName: v.cardBackgroundImage,
      foregroundImageClassName: v.cardImage,
      sku: e.sku,
      shape: "custom"
    }),
    moreCount: i,
    isSingleCard: a,
    wishlistId: o,
    showPopover: 0 === n && e.sku.applicationId === y.t9,
    onViewWishlist: l
  }, e.skuId)
}

function P(e) {
  let {
    item: t,
    card: n,
    profileOwner: i
  } = e, {
    data: l
  } = (0, u.IX)(t.sku.applicationId);
  return (0, r.jsxs)("div", {
    className: C.singleItemContainer,
    children: [n, (0, r.jsx)("div", {
      className: C.singleItemInfo,
      children: (0, r.jsxs)(c.P3F, {
        onClick: () => {
          (0, b.P)(t.sku, {
            isGift: true,
            giftRecipient: i,
            giftingOrigin: j.Wt.USER_PROFILE_WISHLIST
          }, {
            analyticsLocations: [d.Z.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON]
          })
        },
        className: C.singleItemName,
        "aria-label": x.intl.string(x.t.pLPjsb),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          lineClamp: 2,
          children: t.skuName
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: x.intl.format(x.t["CqpEC+"], {
            applicationName: null == l ? true : l.name
          })
        })]
      })
    })]
  })
}

function T(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: i,
    wishlistId: l,
    onViewWishlist: a
  } = t, s = Z(e, {
    index: 0,
    profileOwner: n,
    analyticsLocations: i,
    onViewWishlist: a,
    isSingleCard: true,
    wishlistId: l
  });
  return (0, r.jsx)(P, {
    item: e,
    card: s,
    profileOwner: n
  })
}