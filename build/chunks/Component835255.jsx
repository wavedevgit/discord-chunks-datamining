/** Chunk was on 49902 **/
/** chunk id: 835255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk221292 = require("./221292.js"),
  Chunk892001 = require("./892001.js"),
  Chunk461631 = require("./461631.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk988388 = require("./988388.js");

function P(e) {
  let {
    item: t,
    profileOwner: n,
    wishlistId: P,
    isOwner: S
  } = e, I = i.useRef(null), w = (0, o.Z)(I), C = t.collectiblesItem, {
    analyticsLocations: E
  } = (0, c.ZP)(), N = () => {
    (0, p.Er)({
      wishlistId: P,
      action: b.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: E
    }), S ? ((0, m.closeUserProfileModal)(), (0, h.uL)("".concat(y.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))) : (0, f.Z)({
      skuId: t.skuId,
      isGift: true,
      giftingOrigin: j.Wt.USER_PROFILE_WISHLIST,
      analyticsLocations: E,
      giftRecipient: n,
      variantsReturnStyle: a.v.VARIANTS_GROUP
    })
  };
  return (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsxs)(s.P3F, {
      className: x.card,
      innerRef: I,
      onClick: N,
      "aria-label": t.skuName,
      children: [(0, r.jsx)("div", {
        className: x.cardPreview,
        children: (() => {
          switch (C.type) {
            case l.Z.PROFILE_EFFECT:
              return (0, r.jsx)("div", {
                className: x.profileEffectPreview,
                children: (0, r.jsx)(g.Z, {
                  profileEffectId: C.id,
                  isHovering: w,
                  isPurchased: false,
                  removeSetHeight: true
                })
              });
            case l.Z.AVATAR_DECORATION:
              return (0, r.jsx)("div", {
                className: x.avatarDecorationPreview,
                children: (0, r.jsx)(u.R, {
                  item: C,
                  user: n,
                  isHighlighted: w,
                  isPurchased: false,
                  avatarSize: s.EFr.SIZE_80
                })
              });
            case l.Z.NAMEPLATE:
              return (0, r.jsxs)("div", {
                className: x.nameplatePreview,
                children: [(0, r.jsx)("div", {
                  className: x.nameplateTopLeft,
                  children: (0, r.jsx)(d.Z, {
                    user: n,
                    nameplate: C,
                    isHighlighted: w,
                    showPlaceholderUser: true,
                    showStatus: true,
                    isPurchased: false,
                    nameplatePreviewSize: "default",
                    width: 200
                  })
                }), (0, r.jsx)("div", {
                  className: x.nameplateBottomRight,
                  children: (0, r.jsx)(d.Z, {
                    user: n,
                    nameplate: C,
                    isHighlighted: w,
                    showPlaceholderUser: true,
                    showStatus: true,
                    isPurchased: false,
                    nameplatePreviewSize: "default",
                    width: 200
                  })
                })]
              });
            default:
              return null
          }
        })()
      }), w && (0, r.jsx)("div", {
        className: x.overlay,
        children: (0, r.jsx)(s.zxk, {
          variant: "primary",
          size: "sm",
          text: O.intl.string(S ? O.t.FdGl5O : O.t.ilhtIS),
          icon: S ? true : s.OgN,
          onClick: e => {
            e.stopPropagation(), N()
          },
          fullWidth: true
        })
      })]
    }), S && (0, r.jsx)(v.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: P,
      className: x.removeItemButton
    })]
  })
}