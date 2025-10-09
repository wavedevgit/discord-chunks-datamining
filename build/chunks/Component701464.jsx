/** Chunk was on 84071 **/
/** chunk id: 701464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk687158 = require("./687158.js"),
  Chunk892001 = require("./892001.js"),
  Chunk835255 = require("./835255.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk541699 = require("./541699.js"),
  Chunk51144 = require("./51144.js"),
  Chunk973007 = require("./973007.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk391763 = require("./391763.js");

function j() {
  var e;
  let {
    giftRecipient: t
  } = (0, Chunk987209.wD)(), {
    defaultWishlistId: n
  } = (0, Chunk442837.cj)([Chunk621853.Z], () => ({
    defaultWishlistId: null != exports ? Chunk621853.Z.getFirstWishlistId(exports.id) : null
  })), h = (0, Chunk687158.ZP)(null == exports ? true : exports.id), {
    wishlist: f,
    isFetching: j,
    error: b
  } = (0, Chunk602733.k)(require), v = Chunk647438.useCallback(() => {
    (null == exports ? true : exports.id) != null && (0, Chunk892001.openUserProfileModal)({
      userId: exports.id,
      section: Chunk228168.oh.WISHLIST
    })
  }, [null == exports ? true : exports.id]);
  if (null == exports || null == require || null != b) return null;
  let y = Chunk51144.ZP.getName(exports),
    S = (null != (e = null == Chunk474936 ? true : Chunk474936.items.filter(Chunk541699.Q)) ? module : []).slice(0, 6),
    L = null == Chunk973007 ? true : Chunk973007.getBannerURL({
      canAnimate: false,
      size: 714
    });
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk391763.wishlistBanner,
    style: {
      width: 714
    },
    children: [null != L && (0, Chunk951288.jsx)("div", {
      className: Chunk391763.backgroundImage,
      style: {
        backgroundImage: "url(".concat(L, ")")
      }
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk391763.wishlistBannerHeader,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk391763.wishlistBannerTitleContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "display-md",
          className: Chunk391763.wishlistBannerTitle,
          children: Chunk388032.intl.string(Chunk388032.t["7lZ31N"])
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: Chunk388032.intl.format(Chunk388032.t.BjEX39, {
            username: y
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "overlay-secondary",
        text: Chunk388032.intl.format(Chunk388032.t["8uYD+P"], {
          username: y
        }),
        onClick: v,
        disabled: (null == exports ? true : exports.id) == null
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk391763.wishlistBannerGrid,
      children: j || null == Chunk474936 || 0 === S.length ? (0, Chunk951288.jsx)("div", {}) : S.map(e => (0, r.jsx)(C.Z, {
        item: e,
        profileOwner: t,
        wishlistId: n,
        isOwner: false,
        size: "sm"
      }, e.skuId))
    })]
  })
}
let b = function(e) {
  let {
    onSelectSku: t,
    isGift: n,
    priceOptions: i,
    showPromotionalGiftBanner: a
  } = e;
  return (0, r.jsxs)("div", {
    className: g.giftOptionContainer,
    children: [(0, r.jsxs)("div", {
      className: g.cardsRow,
      children: [(0, r.jsx)(h.jB, {
        onClick: () => t(f.Si.TIER_2),
        isGift: n,
        priceOptions: i,
        showPromotionalGiftBanner: a,
        enablePremiumBrandRefresh: true
      }), (0, r.jsx)(h.j8, {
        onClick: () => t(f.Si.TIER_0),
        isGift: n,
        priceOptions: i,
        enablePremiumBrandRefresh: true
      })]
    }), (0, r.jsx)(j, {})]
  })
}