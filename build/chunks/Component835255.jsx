/** Chunk was on 56848 **/
/** chunk id: 835255, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => x
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

function x(e) {
  let {
    item: t,
    profileOwner: r,
    wishlistId: x,
    isOwner: S
  } = e, I = i.useRef(null), w = (0, o.Z)(I), E = t.collectiblesItem, {
    analyticsLocations: C
  } = (0, c.ZP)(), A = () => {
    (0, p.Er)({
      wishlistId: x,
      action: b.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: C
    }), S ? ((0, m.closeUserProfileModal)(), (0, h.uL)("".concat(y.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))) : (0, f.Z)({
      skuId: t.skuId,
      isGift: true,
      giftingOrigin: O.Wt.USER_PROFILE_WISHLIST,
      analyticsLocations: C,
      giftRecipient: r,
      variantsReturnStyle: l.v.VARIANTS_GROUP
    })
  };
  return (0, n.jsxs)("div", {
    className: P.container,
    children: [(0, n.jsxs)(s.P3F, {
      className: P.card,
      innerRef: I,
      onClick: A,
      "aria-label": t.skuName,
      children: [(0, n.jsx)("div", {
        className: P.cardPreview,
        children: (() => {
          switch (E.type) {
            case a.Z.PROFILE_EFFECT:
              return (0, n.jsx)("div", {
                className: P.profileEffectPreview,
                children: (0, n.jsx)(g.Z, {
                  profileEffectId: E.id,
                  isHovering: w,
                  isPurchased: false,
                  removeSetHeight: true
                })
              });
            case a.Z.AVATAR_DECORATION:
              return (0, n.jsx)("div", {
                className: P.avatarDecorationPreview,
                children: (0, n.jsx)(u.R, {
                  item: E,
                  user: r,
                  isHighlighted: w,
                  isPurchased: false,
                  avatarSize: s.EFr.SIZE_80
                })
              });
            case a.Z.NAMEPLATE:
              return (0, n.jsxs)("div", {
                className: P.nameplatePreview,
                children: [(0, n.jsx)("div", {
                  className: P.nameplateTopLeft,
                  children: (0, n.jsx)(d.Z, {
                    user: r,
                    nameplate: E,
                    isHighlighted: w,
                    showPlaceholderUser: true,
                    showStatus: true,
                    isPurchased: false,
                    nameplatePreviewSize: "default",
                    width: 200
                  })
                }), (0, n.jsx)("div", {
                  className: P.nameplateBottomRight,
                  children: (0, n.jsx)(d.Z, {
                    user: r,
                    nameplate: E,
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
      }), w && (0, n.jsx)("div", {
        className: P.overlay,
        children: (0, n.jsx)(s.zxk, {
          variant: "primary",
          size: "sm",
          text: j.intl.string(S ? j.t.FdGl5O : j.t.ilhtIS),
          icon: S ? true : s.OgN,
          onClick: e => {
            e.stopPropagation(), A()
          },
          fullWidth: true
        })
      })]
    }), S && (0, n.jsx)(v.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: x,
      className: P.removeItemButton
    })]
  })
}