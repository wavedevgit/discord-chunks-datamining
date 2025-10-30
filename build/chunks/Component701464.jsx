/** Chunk was on 31029 **/
/** chunk id: 701464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk796483 = require("./796483.jsx"),
  Chunk688192 = require("./688192.jsx"),
  Chunk372263 = require("./372263.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk51144 = require("./51144.js"),
  Chunk973007 = require("./973007.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk391763 = require("./391763.js");

function y(e) {
  let {
    giftRecipient: t
  } = e, n = (0, s.ZP)(null == t ? true : t.id), {
    defaultWishlistId: a,
    wishlist: x,
    popularCollectiblesProducts: y,
    isFetchingWishlist: v,
    isFetchingShopHome: S,
    isFetchingCategories: w,
    wishlistError: I,
    fetchShopHomeError: O
  } = (0, m.ZL)(t), {
    displayItems: P,
    hasMoreItems: E,
    totalWishlistItemCount: T,
    displayItemsFromWishlistCount: k
  } = (0, m.UD)({
    wishlist: x,
    popularCollectiblesProducts: y,
    wishlistError: I,
    fetchShopHomeError: O
  }), {
    theme: M,
    primaryColor: A,
    secondaryColor: B
  } = (0, d.Z)({
    user: t,
    displayProfile: n
  }), {
    profileThemeStyle: Z,
    profileThemeClassName: N
  } = (0, C.Z)({
    theme: M,
    themeType: null,
    primaryColor: A,
    secondaryColor: B
  }), R = function(e) {
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
  }({}, Z), F = i.useCallback(() => {
    (0, c.openUserProfileModal)({
      userId: t.id,
      section: j.oh.WISHLIST
    })
  }, [t.id]);
  if (null != I || null != O) return null;
  let G = f.ZP.getName(t),
    H = null == n ? true : n.getBannerURL({
      canAnimate: false,
      size: 713
    }),
    U = v || S || w;
  return (0, r.jsxs)("div", {
    className: l()(L.wishlistBanner, N),
    style: R,
    children: [null != H && (0, r.jsx)("div", {
      className: L.backgroundImage,
      style: {
        backgroundImage: "url(".concat(H, ")")
      }
    }), (0, r.jsx)(o.f6W, {
      disableAdaptiveTheme: true,
      children: e => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: l()(L.wishlistBannerHeader, e),
          children: (0, r.jsxs)("div", {
            className: L.wishlistBannerTitleContainer,
            children: [(0, r.jsx)(o.Heading, {
              variant: "display-md",
              className: L.wishlistBannerTitle,
              children: k >= m.zL ? b.intl.string(b.t["7lZ31J"]) : b.intl.string(b.t.SK5rmi)
            }), (0, r.jsx)(o.Text, {
              variant: "text-sm/medium",
              children: k >= m.zL ? b.intl.format(b.t.BjEX38, {
                username: G
              }) : k > 0 ? b.intl.format(b.t.dIDKgi, {
                username: G
              }) : b.intl.format(b.t.wyMp1j, {
                username: G
              })
            })]
          })
        }), (0, r.jsx)("div", {
          className: e,
          children: U || 0 === P.length ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(o.nn4, {
              children: b.intl.string(b.t.pfChQr)
            }), (0, r.jsx)("div", {
              className: L.wishlistBannerGrid,
              children: Array.from({
                length: m.zL
              }, (e, t) => (0, r.jsx)(h.Z, {
                surface: _.Y.GIFTING_FLOW
              }, "placeholder-".concat(t)))
            })]
          }) : (0, r.jsxs)("ul", {
            className: L.wishlistBannerGrid,
            children: [(E ? P.slice(0, m.zL - 1) : P).map(e => {
              let {
                item: n,
                source: i
              } = e;
              return (0, r.jsx)("li", {
                className: L.wishlistBannerListItem,
                children: (0, r.jsx)(p.Z, {
                  item: n,
                  profileOwner: t,
                  wishlistId: a,
                  isOwner: false,
                  surface: _.Y.GIFTING_FLOW,
                  giftingOrigin: i === m.lr.WISHLIST ? g.Wt.DM_CHANNEL_WISHLIST : g.Wt.DM_CHANNEL,
                  collectibleSource: i,
                  showIcons: k > 0 && k < m.zL
                })
              }, n.skuId)
            }), E && (0, r.jsx)("li", {
              className: L.wishlistBannerListItem,
              children: (0, r.jsx)(u.Uw, {
                item: P[m.zL - 1].item,
                profileOwner: t,
                remainingCount: T - m.zL + 1,
                onClick: F,
                size: "sm",
                surface: _.Y.GIFTING_FLOW
              })
            }, "overflow-".concat(P[m.zL - 1].item.skuId))]
          })
        })]
      })
    })]
  })
}
let v = function(e) {
  let {
    onSelectSku: t,
    isGift: n,
    priceOptions: i,
    showPromotionalGiftBanner: a,
    giftRecipient: l
  } = e;
  return (0, r.jsxs)("div", {
    className: L.giftOptionContainer,
    children: [(0, r.jsxs)("div", {
      className: L.cardsRow,
      children: [(0, r.jsx)(x.jB, {
        onClick: () => t(g.Si.TIER_2),
        isGift: n,
        priceOptions: i,
        showPromotionalGiftBanner: a,
        enablePremiumBrandRefresh: true
      }), (0, r.jsx)(x.j8, {
        onClick: () => t(g.Si.TIER_0),
        isGift: n,
        priceOptions: i,
        enablePremiumBrandRefresh: true,
        removeTopMargin: true
      })]
    }), (0, r.jsx)(y, {
      giftRecipient: l
    })]
  })
}