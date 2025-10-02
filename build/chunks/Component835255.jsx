/** Chunk was on 56848 **/
/** chunk id: 835255, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => k
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

function k(e) {
  let {
    item: t,
    profileOwner: r,
    wishlistId: k,
    isOwner: Z
  } = e, N = i.useRef(null), D = i.useRef(null), _ = t.collectiblesItem, {
    analyticsLocations: R
  } = (0, f.ZP)(), L = (0, u.Z)(N), U = (0, l.TH)(), M = i.useCallback(() => {
    if (U.pathname.startsWith(w.Z5c.COLLECTIBLES_SHOP)) {
      let e = g.Z.getProduct(t.skuId),
        r = g.Z.getCategoryForProduct(t.skuId);
      if (null != e && null != r) {
        (0, P.closeUserProfileModal)(), (0, h.T)({
          product: e,
          category: r,
          shouldCheckoutWithOrbs: (0, v.oQ)({
            product: e
          }),
          analyticsLocations: R,
          analyticsSource: d.Z.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true,
          variantType: E.Ch.DEFAULT
        });
        return
      }
    }(0, P.closeUserProfileModal)(), (0, O.uL)("".concat(w.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))
  }, [U.pathname, t.skuId, R]), F = () => {
    (0, S.Er)({
      wishlistId: k,
      action: I.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: R
    }), Z ? M() : (0, b.Z)({
      skuId: t.skuId,
      isGift: true,
      giftingOrigin: C.Wt.USER_PROFILE_WISHLIST,
      analyticsLocations: R,
      giftRecipient: r,
      variantsReturnStyle: s.v.VARIANTS_GROUP
    })
  };
  return (0, n.jsxs)("div", {
    ref: N,
    className: A.container,
    children: [(0, n.jsx)(o.u, {
      asContainer: true,
      text: t.skuName,
      children: (0, n.jsxs)("div", {
        ref: D,
        className: A.card,
        onClick: F,
        children: [(0, n.jsx)(c.nn4, {
          children: (0, n.jsx)(c.H, {
            children: (() => {
              let e = _.type;
              switch (e) {
                case a.Z.AVATAR_DECORATION:
                  return T.intl.formatToPlainString(T.t.IQQYeX, {
                    itemName: t.skuName
                  });
                case a.Z.PROFILE_EFFECT:
                  return T.intl.formatToPlainString(T.t["x/MGW1"], {
                    itemName: t.skuName
                  });
                case a.Z.NAMEPLATE:
                  return T.intl.formatToPlainString(T.t.eVNt6O, {
                    itemName: t.skuName
                  });
                default:
                  (0, j.vE)(e)
              }
            })()
          })
        }), (0, n.jsx)("div", {
          className: A.cardPreview,
          children: (() => {
            switch (_.type) {
              case a.Z.PROFILE_EFFECT:
                return (0, n.jsx)("div", {
                  className: A.profileEffectPreview,
                  children: (0, n.jsx)(y.Z, {
                    skuId: _.skuId,
                    isHovering: L,
                    isPurchased: false,
                    removeSetHeight: true
                  })
                });
              case a.Z.AVATAR_DECORATION:
                return (0, n.jsx)("div", {
                  className: A.avatarDecorationPreview,
                  children: (0, n.jsx)(p.R, {
                    item: _,
                    user: r,
                    isHighlighted: L,
                    isPurchased: false,
                    avatarSize: c.EFr.SIZE_80
                  })
                });
              case a.Z.NAMEPLATE:
                return (0, n.jsxs)("div", {
                  className: A.nameplatePreview,
                  children: [(0, n.jsx)("div", {
                    className: A.nameplateTopLeft,
                    children: (0, n.jsx)(m.Z, {
                      user: r,
                      nameplate: _,
                      isHighlighted: L,
                      showPlaceholderUser: true,
                      showStatus: true,
                      isPurchased: false,
                      nameplatePreviewSize: "default",
                      width: 200
                    })
                  }), (0, n.jsx)("div", {
                    className: A.nameplateBottomRight,
                    "aria-hidden": true,
                    children: (0, n.jsx)(m.Z, {
                      user: r,
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
        }), (0, n.jsx)("div", {
          className: A.overlay,
          children: (0, n.jsx)(c.zxk, {
            focusProps: {
              ringTarget: D
            },
            variant: "primary",
            size: "sm",
            text: T.intl.string(Z ? T.t.FdGl5O : T.t.ilhtIS),
            icon: Z ? true : c.OgN,
            onClick: e => {
              e.stopPropagation(), F()
            },
            fullWidth: true
          })
        })]
      })
    }), Z && (0, n.jsx)(x.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: k,
      className: A.removeItemButton
    })]
  })
}