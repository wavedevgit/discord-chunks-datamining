/** Chunk was on 56848 **/
/** chunk id: 835255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk823379 = require("./823379.js"),
  Chunk221292 = require("./221292.js"),
  Chunk892001 = require("./892001.js"),
  Chunk461631 = require("./461631.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk988388 = require("./988388.js");

function I(e) {
  let {
    item: t,
    profileOwner: n,
    wishlistId: I,
    isOwner: w
  } = e, E = i.useRef(null), C = i.useRef(null), N = t.collectiblesItem, {
    analyticsLocations: A
  } = (0, u.ZP)(), k = (0, c.Z)(E), T = () => {
    (0, v.Er)({
      wishlistId: I,
      action: O.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: A
    }), w ? ((0, b.closeUserProfileModal)(), (0, p.uL)("".concat(j.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))) : (0, g.Z)({
      skuId: t.skuId,
      isGift: true,
      giftingOrigin: P.Wt.USER_PROFILE_WISHLIST,
      analyticsLocations: A,
      giftRecipient: n,
      variantsReturnStyle: l.v.VARIANTS_GROUP
    })
  };
  return (0, r.jsxs)("div", {
    ref: E,
    className: S.container,
    children: [(0, r.jsx)(s.u, {
      asContainer: true,
      text: t.skuName,
      children: (0, r.jsxs)("div", {
        ref: C,
        className: S.card,
        onClick: T,
        children: [(0, r.jsx)(o.nn4, {
          children: (0, r.jsx)(o.H, {
            children: (() => {
              let e = N.type;
              switch (e) {
                case a.Z.AVATAR_DECORATION:
                  return x.intl.formatToPlainString(x.t.IQQYeX, {
                    itemName: t.skuName
                  });
                case a.Z.PROFILE_EFFECT:
                  return x.intl.formatToPlainString(x.t["x/MGW1"], {
                    itemName: t.skuName
                  });
                case a.Z.NAMEPLATE:
                  return x.intl.formatToPlainString(x.t.eVNt6O, {
                    itemName: t.skuName
                  });
                default:
                  (0, m.vE)(e)
              }
            })()
          })
        }), (0, r.jsx)("div", {
          className: S.cardPreview,
          children: (() => {
            switch (N.type) {
              case a.Z.PROFILE_EFFECT:
                return (0, r.jsx)("div", {
                  className: S.profileEffectPreview,
                  children: (0, r.jsx)(h.Z, {
                    skuId: N.skuId,
                    isHovering: k,
                    isPurchased: false,
                    removeSetHeight: true
                  })
                });
              case a.Z.AVATAR_DECORATION:
                return (0, r.jsx)("div", {
                  className: S.avatarDecorationPreview,
                  children: (0, r.jsx)(d.R, {
                    item: N,
                    user: n,
                    isHighlighted: k,
                    isPurchased: false,
                    avatarSize: o.EFr.SIZE_80
                  })
                });
              case a.Z.NAMEPLATE:
                return (0, r.jsxs)("div", {
                  className: S.nameplatePreview,
                  children: [(0, r.jsx)("div", {
                    className: S.nameplateTopLeft,
                    children: (0, r.jsx)(f.Z, {
                      user: n,
                      nameplate: N,
                      isHighlighted: k,
                      showPlaceholderUser: true,
                      showStatus: true,
                      isPurchased: false,
                      nameplatePreviewSize: "default",
                      width: 200
                    })
                  }), (0, r.jsx)("div", {
                    className: S.nameplateBottomRight,
                    "aria-hidden": true,
                    children: (0, r.jsx)(f.Z, {
                      user: n,
                      nameplate: N,
                      isHighlighted: k,
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
        }), (0, r.jsx)("div", {
          className: S.overlay,
          children: (0, r.jsx)(o.zxk, {
            focusProps: {
              ringTarget: C
            },
            variant: "primary",
            size: "sm",
            text: x.intl.string(w ? x.t.FdGl5O : x.t.ilhtIS),
            icon: w ? true : o.OgN,
            onClick: e => {
              e.stopPropagation(), T()
            },
            fullWidth: true
          })
        })]
      })
    }), w && (0, r.jsx)(y.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: I,
      className: S.removeItemButton
    })]
  })
}