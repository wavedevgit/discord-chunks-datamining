/** Chunk was on 95320 **/
/** chunk id: 479026, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  T: () => I,
  _: () => h
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

function h(e) {
  let {
    isOwner: t,
    isItemOwned: r,
    onWishlistItemClick: c,
    profileOwner: d,
    sku: f,
    analyticsLocations: h,
    giftingOrigin: I
  } = e, p = location.pathname.startsWith(m.BV.COLLECTIBLES_SHOP);
  if (t || r) {
    let e = !t && r;
    if (p) {
      let t = l.A.getProduct(f.id),
        r = l.A.getCategoryForProduct(f.id);
      if (null != t && null != r) {
        e || (0, g.closeUserProfileModal)(), (0, s.t)({
          product: t,
          category: r,
          shouldCheckoutWithOrbs: (0, o.Ak)({
            product: t
          }),
          analyticsLocations: h,
          analyticsSource: i.A.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true
        });
        return
      }
    }
    e || (0, g.closeUserProfileModal)(), (0, a.pX)("".concat(m.BV.COLLECTIBLES_SHOP, "#itemSkuId=").concat(f.id))
  } else null == c || c(), (0, u.A)({
    skuId: f.id,
    isGift: true,
    giftingOrigin: I,
    analyticsLocations: h,
    giftRecipient: d,
    variantsReturnStyle: n.g.VARIANTS_GROUP
  })
}

function I(e) {
  let {
    isOwner: t,
    giftingOrigin: r,
    profileOwner: n,
    isItemOwned: l,
    application: s,
    sku: o,
    analyticsLocations: u,
    additionalUserIds: a
  } = e;
  t || l ? (null == s ? true : s.guildId) != null && (t ? ((0, g.closeUserProfileModal)(), (0, c.default)({
    guildId: s.guildId,
    skuId: o.id,
    slug: o.slug
  })) : (0, d.R)({
    skuId: o.id,
    applicationId: s.id,
    guildId: s.guildId,
    isStorefront: false,
    analyticsLocations: u
  })) : (0, f.a)(o, {
    isGift: true,
    giftRecipient: n,
    additionalUserIds: a,
    giftingOrigin: r
  }, {
    analyticsLocations: [...u, i.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
  })
}