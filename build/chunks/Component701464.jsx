/** Chunk was on 23404 **/
/** chunk id: 701464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk687158 = require("./687158.js"),
  Chunk892001 = require("./892001.js"),
  Chunk835255 = require("./835255.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk51144 = require("./51144.js"),
  Chunk973007 = require("./973007.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk391763 = require("./391763.js");

function f(e) {
  let {
    giftRecipient: t
  } = e, n = (0, l.ZP)(null == t ? true : t.id), {
    defaultWishlistId: c,
    wishlist: f,
    popularProducts: m,
    isFetchingWishlist: x,
    isFetchingShopHome: g,
    isFetchingCategories: j,
    wishlistError: b,
    fetchShopHomeError: y
  } = (0, d.ZL)(t), {
    displayItems: L,
    wishlistLength: S
  } = (0, d.UD)({
    wishlist: f,
    defaultWishlistId: c,
    popularProducts: m,
    wishlistError: b,
    fetchShopHomeError: y
  }), v = i.useCallback(() => {
    (0, o.openUserProfileModal)({
      userId: t.id,
      section: p.oh.WISHLIST
    })
  }, [t.id]);
  if (null == c || null != b || null != y) return null;
  let w = C.ZP.getName(t),
    I = null == n ? true : n.getBannerURL({
      canAnimate: false,
      size: 714
    });
  return (0, r.jsxs)("div", {
    className: h.wishlistBanner,
    style: {
      width: 714
    },
    children: [null != I && (0, r.jsx)("div", {
      className: h.backgroundImage,
      style: {
        backgroundImage: "url(".concat(I, ")")
      }
    }), (0, r.jsxs)("div", {
      className: h.wishlistBannerHeader,
      children: [(0, r.jsxs)("div", {
        className: h.wishlistBannerTitleContainer,
        children: [(0, r.jsx)(a.Heading, {
          variant: "display-md",
          className: h.wishlistBannerTitle,
          children: _.intl.string(_.t["7lZ31N"])
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: _.intl.format(_.t.BjEX39, {
            username: w
          })
        })]
      }), (0, r.jsx)(a.Button, {
        variant: "overlay-secondary",
        text: _.intl.format(_.t["8uYD+P"], {
          username: w
        }),
        onClick: v,
        disabled: (null == t ? true : t.id) == null
      })]
    }), x || g || j || 0 === L.length ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.nn4, {
        children: _.intl.string(_.t.pfChQk)
      }), (0, r.jsx)("div", {
        className: h.wishlistBannerGrid,
        children: Array.from({
          length: d.zL
        }, (e, t) => (0, r.jsx)(s.w, {
          size: "sm"
        }, "placeholder-".concat(t)))
      })]
    }) : (0, r.jsx)("ul", {
      className: h.wishlistBannerGrid,
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0
      },
      children: L.map(e => {
        let {
          item: n,
          source: i
        } = e;
        return (0, r.jsx)("li", {
          style: {
            display: "contents"
          },
          children: (0, r.jsx)(s.Z, {
            item: n,
            profileOwner: t,
            wishlistId: c,
            isOwner: false,
            size: "sm",
            giftingOrigin: i === d.lr.WISHLIST ? u.Wt.DM_CHANNEL_WISHLIST : u.Wt.DM_CHANNEL,
            collectibleSource: i,
            showIcons: S < d.zL
          })
        }, n.skuId)
      })
    })]
  })
}
let m = function(e) {
  let {
    onSelectSku: t,
    isGift: n,
    priceOptions: i,
    showPromotionalGiftBanner: a,
    giftRecipient: l
  } = e;
  return (0, r.jsxs)("div", {
    className: h.giftOptionContainer,
    children: [(0, r.jsxs)("div", {
      className: h.cardsRow,
      children: [(0, r.jsx)(c.jB, {
        onClick: () => t(u.Si.TIER_2),
        isGift: n,
        priceOptions: i,
        showPromotionalGiftBanner: a,
        enablePremiumBrandRefresh: true
      }), (0, r.jsx)(c.j8, {
        onClick: () => t(u.Si.TIER_0),
        isGift: n,
        priceOptions: i,
        enablePremiumBrandRefresh: true
      })]
    }), (0, r.jsx)(f, {
      giftRecipient: l
    })]
  })
}