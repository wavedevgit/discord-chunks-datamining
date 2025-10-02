/** Chunk was on 56848 **/
/** chunk id: 835255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk237031 = require("./237031.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk956472 = require("./956472.js"),
  Chunk333867 = require("./333867.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk823379 = require("./823379.js"),
  Chunk221292 = require("./221292.js"),
  Chunk892001 = require("./892001.js"),
  Chunk461631 = require("./461631.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk988388 = require("./988388.js");

function A(e) {
  let {
    item: t,
    profileOwner: n,
    wishlistId: A,
    isOwner: T
  } = e, Z = i.useRef(null), D = i.useRef(null), _ = t.collectiblesItem, {
    analyticsLocations: R
  } = (0, f.ZP)(), L = (0, u.Z)(Z), M = (0, l.TH)(), U = i.useCallback(() => {
    if (M.pathname.startsWith(I.Z5c.COLLECTIBLES_SHOP)) {
      let e = g.Z.getProduct(t.skuId),
        n = g.Z.getCategoryForProduct(t.skuId);
      if (null != e && null != n) {
        (0, P.closeUserProfileModal)(), (0, h.T)({
          product: e,
          category: n,
          shouldCheckoutWithOrbs: (0, v.oQ)({
            product: e
          }),
          analyticsLocations: R,
          analyticsSource: d.Z.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true,
          variantType: N.Ch.DEFAULT
        });
        return
      }
    }(0, P.closeUserProfileModal)(), (0, j.uL)("".concat(I.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))
  }, [M.pathname, t.skuId, R]), F = () => {
    (0, x.Er)({
      wishlistId: A,
      action: w.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: R
    }), T ? U() : (0, b.Z)({
      skuId: t.skuId,
      isGift: true,
      giftingOrigin: k.Wt.USER_PROFILE_WISHLIST,
      analyticsLocations: R,
      giftRecipient: n,
      variantsReturnStyle: s.v.VARIANTS_GROUP
    })
  };
  return (0, r.jsxs)("div", {
    ref: Z,
    className: E.container,
    children: [(0, r.jsx)(o.u, {
      asContainer: true,
      text: t.skuName,
      children: (0, r.jsxs)("div", {
        ref: D,
        className: E.card,
        onClick: F,
        children: [(0, r.jsx)(c.nn4, {
          children: (0, r.jsx)(c.H, {
            children: (() => {
              let e = _.type;
              switch (e) {
                case a.Z.AVATAR_DECORATION:
                  return C.intl.formatToPlainString(C.t.IQQYeX, {
                    itemName: t.skuName
                  });
                case a.Z.PROFILE_EFFECT:
                  return C.intl.formatToPlainString(C.t["x/MGW1"], {
                    itemName: t.skuName
                  });
                case a.Z.NAMEPLATE:
                  return C.intl.formatToPlainString(C.t.eVNt6O, {
                    itemName: t.skuName
                  });
                default:
                  (0, O.vE)(e)
              }
            })()
          })
        }), (0, r.jsx)("div", {
          className: E.cardPreview,
          children: (() => {
            switch (_.type) {
              case a.Z.PROFILE_EFFECT:
                return (0, r.jsx)("div", {
                  className: E.profileEffectPreview,
                  children: (0, r.jsx)(y.Z, {
                    skuId: _.skuId,
                    isHovering: L,
                    isPurchased: false,
                    removeSetHeight: true
                  })
                });
              case a.Z.AVATAR_DECORATION:
                return (0, r.jsx)("div", {
                  className: E.avatarDecorationPreview,
                  children: (0, r.jsx)(p.R, {
                    item: _,
                    user: n,
                    isHighlighted: L,
                    isPurchased: false,
                    avatarSize: c.EFr.SIZE_80
                  })
                });
              case a.Z.NAMEPLATE:
                return (0, r.jsxs)("div", {
                  className: E.nameplatePreview,
                  children: [(0, r.jsx)("div", {
                    className: E.nameplateTopLeft,
                    children: (0, r.jsx)(m.Z, {
                      user: n,
                      nameplate: _,
                      isHighlighted: L,
                      showPlaceholderUser: true,
                      showStatus: true,
                      isPurchased: false,
                      nameplatePreviewSize: "default",
                      width: 200
                    })
                  }), (0, r.jsx)("div", {
                    className: E.nameplateBottomRight,
                    "aria-hidden": true,
                    children: (0, r.jsx)(m.Z, {
                      user: n,
                      nameplate: _,
                      isHighlighted: L,
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
          className: E.overlay,
          children: (0, r.jsx)(c.zxk, {
            focusProps: {
              ringTarget: D
            },
            variant: "primary",
            size: "sm",
            text: C.intl.string(T ? C.t.FdGl5O : C.t.ilhtIS),
            icon: T ? true : c.OgN,
            onClick: e => {
              e.stopPropagation(), F()
            },
            fullWidth: true
          })
        })]
      })
    }), T && (0, r.jsx)(S.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: A,
      className: E.removeItemButton
    })]
  })
}