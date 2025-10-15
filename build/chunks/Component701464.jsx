/** Chunk was on 31029 **/
/** chunk id: 701464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk687158 = require("./687158.js"),
  Chunk576635 = require("./576635.js"),
  Chunk213053 = require("./213053.js"),
  Chunk892001 = require("./892001.js"),
  Chunk835255 = require("./835255.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk51144 = require("./51144.js"),
  Chunk973007 = require("./973007.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk391763 = require("./391763.js");

function j(e) {
  let {
    giftRecipient: t
  } = e, n = (0, s.ZP)(null == t ? true : t.id), {
    defaultWishlistId: a,
    wishlist: h,
    popularProducts: j,
    isFetchingWishlist: b,
    isFetchingShopHome: y,
    isFetchingCategories: L,
    wishlistError: v,
    fetchShopHomeError: S
  } = (0, p.ZL)(t), {
    displayItems: w,
    wishlistLength: O
  } = (0, p.UD)({
    wishlist: h,
    defaultWishlistId: a,
    popularProducts: j,
    wishlistError: v,
    fetchShopHomeError: S
  }), {
    theme: I,
    primaryColor: P,
    secondaryColor: E
  } = (0, d.Z)({
    user: t,
    displayProfile: n
  }), {
    profileThemeStyle: k,
    profileThemeClassName: T
  } = (0, C.Z)({
    theme: I,
    themeType: null,
    primaryColor: P,
    secondaryColor: E
  }), M = function(e) {
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
  }({
    width: 713
  }, k), A = i.useCallback(() => {
    (0, c.openUserProfileModal)({
      userId: t.id,
      section: f.oh.WISHLIST
    })
  }, [t.id]);
  if (null == a || null != v || null != S) return null;
  let B = _.ZP.getName(t),
    Z = null == n ? true : n.getBannerURL({
      canAnimate: false,
      size: 713
    }),
    N = b || y || L;
  return (0, r.jsxs)("div", {
    className: l()(g.wishlistBanner, T),
    style: M,
    children: [null != Z && (0, r.jsx)("div", {
      className: g.backgroundImage,
      style: {
        backgroundImage: "url(".concat(Z, ")")
      }
    }), (0, r.jsx)(o.f6W, {
      disableAdaptiveTheme: true,
      children: e => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: l()(g.wishlistBannerHeader, e),
          children: [(0, r.jsxs)("div", {
            className: g.wishlistBannerTitleContainer,
            children: [(0, r.jsx)(o.Heading, {
              variant: "display-md",
              className: g.wishlistBannerTitle,
              children: O > 0 ? x.intl.string(x.t["7lZ31N"]) : x.intl.string(x.t.pWG4zc)
            }), (0, r.jsx)(o.Text, {
              variant: "text-sm/medium",
              children: O > 0 ? x.intl.format(x.t.BjEX39, {
                username: B
              }) : x.intl.format(x.t.dIDKgo, {
                username: B
              })
            })]
          }), O >= p.zL && (0, r.jsx)(o.Button, {
            variant: "overlay-secondary",
            text: x.intl.format(x.t["8uYD+P"], {
              username: B
            }),
            onClick: A,
            disabled: (null == t ? true : t.id) == null
          })]
        }), (0, r.jsx)("div", {
          className: e,
          children: N || 0 === w.length ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(o.nn4, {
              children: x.intl.string(x.t.pfChQk)
            }), (0, r.jsx)("div", {
              className: g.wishlistBannerGrid,
              children: Array.from({
                length: p.zL
              }, (e, t) => (0, r.jsx)(u.w, {
                size: "sm"
              }, "placeholder-".concat(t)))
            })]
          }) : (0, r.jsx)("ul", {
            className: g.wishlistBannerGrid,
            style: {
              listStyle: "none",
              margin: 0,
              padding: 0
            },
            children: w.map(e => {
              let {
                item: n,
                source: i
              } = e;
              return (0, r.jsx)("li", {
                style: {
                  display: "contents"
                },
                children: (0, r.jsx)(u.Z, {
                  item: n,
                  profileOwner: t,
                  wishlistId: a,
                  isOwner: false,
                  size: "sm",
                  giftingOrigin: i === p.lr.WISHLIST ? m.Wt.DM_CHANNEL_WISHLIST : m.Wt.DM_CHANNEL,
                  collectibleSource: i,
                  showIcons: O < p.zL,
                  disableHoverEffects: true
                })
              }, n.skuId)
            })
          })
        })]
      })
    })]
  })
}
let b = function(e) {
  let {
    onSelectSku: t,
    isGift: n,
    priceOptions: i,
    showPromotionalGiftBanner: a,
    giftRecipient: l
  } = e;
  return (0, r.jsxs)("div", {
    className: g.giftOptionContainer,
    children: [(0, r.jsxs)("div", {
      className: g.cardsRow,
      children: [(0, r.jsx)(h.jB, {
        onClick: () => t(m.Si.TIER_2),
        isGift: n,
        priceOptions: i,
        showPromotionalGiftBanner: a,
        enablePremiumBrandRefresh: true
      }), (0, r.jsx)(h.j8, {
        onClick: () => t(m.Si.TIER_0),
        isGift: n,
        priceOptions: i,
        enablePremiumBrandRefresh: true
      })]
    }), (0, r.jsx)(j, {
      giftRecipient: l
    })]
  })
}