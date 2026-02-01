/** Chunk was on 60118 **/
/** chunk id: 479026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => b,
  _: () => m
}), require("./896048.js");
var Chunk635358 = require("./635358.js"),
  Chunk793574 = require("./793574.js"),
  Chunk590180 = require("./590180.js"),
  Chunk572595 = require("./572595.jsx"),
  Chunk57020 = require("./57020.js"),
  Chunk44120 = require("./44120.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk44724 = require("./44724.js"),
  Chunk317560 = require("./317560.jsx"),
  Chunk533406 = require("./533406.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk901123 = require("./901123.js");

function m(e) {
  let {
    isOwner: t,
    isItemOwned: n,
    onWishlistItemClick: u,
    profileOwner: d,
    sku: f,
    analyticsLocations: m,
    giftingOrigin: b
  } = e, y = location.pathname.startsWith(g.BV.COLLECTIBLES_SHOP);
  if (t || n) {
    let e = !t && n;
    if (y) {
      let t = i.A.getProduct(f.id),
        n = i.A.getCategoryForProduct(f.id);
      if (null != t && null != n) {
        e || (0, p.closeUserProfileModal)(), (0, a.t)({
          product: t,
          category: n,
          shouldCheckoutWithOrbs: (0, o.Ak)({
            product: t
          }),
          analyticsLocations: m,
          analyticsSource: l.A.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true
        });
        return
      }
    }
    e || (0, p.closeUserProfileModal)(), (0, c.pX)("".concat(g.BV.COLLECTIBLES_SHOP, "#itemSkuId=").concat(f.id))
  } else null == u || u(), (0, s.A)({
    skuId: f.id,
    isGift: true,
    giftingOrigin: b,
    analyticsLocations: m,
    giftRecipient: d,
    variantsReturnStyle: r.g.VARIANTS_GROUP
  })
}

function b(e) {
  let {
    isOwner: t,
    giftingOrigin: n,
    profileOwner: r,
    isItemOwned: i,
    application: a,
    sku: o,
    analyticsLocations: s,
    additionalUserIds: c
  } = e;
  t || i ? (null == a ? true : a.guildId) != null && (t ? ((0, p.closeUserProfileModal)(), (0, u.default)({
    guildId: a.guildId,
    skuId: o.id,
    slug: o.slug
  })) : (0, d.R)({
    skuId: o.id,
    applicationId: a.id,
    guildId: a.guildId,
    isStorefront: false,
    analyticsLocations: s
  })) : (0, f.a)(o, {
    isGift: true,
    giftRecipient: r,
    additionalUserIds: c,
    giftingOrigin: n
  }, {
    analyticsLocations: [...s, l.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
  })
}