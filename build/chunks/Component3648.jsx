/** Chunk was on 78528 **/
/** chunk id: 3648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T,
  Z: () => I
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

function C(e) {
  let {
    targetElementRef: t,
    onRequestClose: n,
    onActionClick: l
  } = e;
  return (0, r.jsx)(o.AM, {
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
      text: j.intl.string(j.t.uB4Gax),
      variant: "primary",
      onClick: l
    }],
    targetElementRef: t,
    title: j.intl.string(j.t.qh9t5c),
    body: j.intl.string(j.t.iM6fxV),
    graphic: {
      type: "image",
      src: E.A
    }
  })
}

function S(e) {
  var t, n;
  let {
    showPopover: o,
    onViewWishlist: c,
    onCardClick: u
  } = e, d = function(e, t) {
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
  }(e, ["showPopover", "onViewWishlist", "onCardClick"]), p = l.useRef(null), b = (0, a.useHasAnyModalOpen)(), A = (0, i.bG)([g.A], () => g.A.hasLayers()), y = (0, m.Jw)({
    location: "wishlist-card"
  }), [O, j] = (0, h.kn)(y ? [s.M.GAME_SHOP_WISHLIST_POPOVER] : [], _.m.SIDEBAR, true), v = l.useCallback(() => {
    j(_.i.USER_DISMISS), u()
  }, [u, j]), x = l.useCallback(() => {
    j(_.i.USER_DISMISS)
  }, [j]), E = l.useCallback(() => {
    j(_.i.USER_DISMISS), c()
  }, [c, j]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.A, (t = function(e) {
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
    }({}, d), n = n = {
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
    }), t)), o && O === s.M.GAME_SHOP_WISHLIST_POPOVER && !b && !A && (0, r.jsx)(C, {
      targetElementRef: p,
      onRequestClose: x,
      onActionClick: E
    })]
  })
}

function I(e, t) {
  let {
    index: n,
    moreCount: l,
    onViewWishlist: i,
    isSingleCard: s = false,
    profileOwner: a,
    wishlistId: o,
    cardSize: c,
    analyticsLocations: d
  } = t, h = null != l && l > 0, f = {
    title: h ? j.intl.string(j.t.TxBQzD) : j.intl.string(j.t["4yiU7x"]),
    body: h ? true : j.intl.string(j.t.ilhtIa),
    renderIcon: h ? true : p.GM,
    shouldShow: true
  };
  return (0, r.jsx)(S, {
    wishlistItem: e,
    onCardClick: () => {
      h ? i() : (0, b.a)(e.sku, {
        isGift: true,
        giftRecipient: a,
        giftingOrigin: O.vQ.USER_PROFILE_WISHLIST
      }, {
        analyticsLocations: [...d, u.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON]
      })
    },
    tooltipConfig: f,
    shouldScalePreview: false,
    renderPreview: () => (0, r.jsx)(A.e, {
      containerClassName: v.Nr,
      backgroundImageClassName: v.GC,
      foregroundImageClassName: v.wP,
      sku: e.sku,
      shape: "custom"
    }),
    moreCount: l,
    isSingleCard: s,
    wishlistId: o,
    showPopover: 0 === n && e.sku.applicationId === y.XR,
    onViewWishlist: i,
    cardSize: c
  }, e.skuId)
}

function N(e) {
  let {
    item: t,
    card: n,
    analyticsLocations: l,
    profileOwner: i
  } = e, {
    data: s
  } = (0, d.YY)(t.sku.applicationId);
  return (0, r.jsxs)("div", {
    className: x.D5,
    children: [n, (0, r.jsx)("div", {
      className: x.S7,
      children: (0, r.jsxs)(c.DUT, {
        onClick: () => {
          (0, b.a)(t.sku, {
            isGift: true,
            giftRecipient: i,
            giftingOrigin: O.vQ.USER_PROFILE_WISHLIST
          }, {
            analyticsLocations: [...l, u.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON]
          })
        },
        className: x.Hh,
        "aria-label": j.intl.string(j.t.pLPjsb),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          lineClamp: 2,
          children: t.skuName
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: j.intl.format(j.t["CqpEC+"], {
            applicationName: null == s ? true : s.name
          })
        })]
      })
    })]
  })
}

function T(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: l,
    wishlistId: i,
    onViewWishlist: s
  } = t, a = I(e, {
    index: 0,
    profileOwner: n,
    analyticsLocations: l,
    onViewWishlist: s,
    isSingleCard: true,
    wishlistId: i
  });
  return (0, r.jsx)(N, {
    item: e,
    card: a,
    profileOwner: n,
    analyticsLocations: l
  })
}