/** Chunk was on 56848 **/
/** chunk id: 835255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk232644 = require("./232644.js");

function C(e) {
  let {
    item: t,
    profileOwner: n,
    wishlistId: C,
    isOwner: k
  } = e, Z = i.useRef(null), _ = i.useRef(null), D = t.collectiblesItem, {
    analyticsLocations: L
  } = (0, f.ZP)(), R = (0, u.Z)(Z), U = (0, l.TH)(), M = i.useCallback(() => {
    if (U.pathname.startsWith(w.Z5c.COLLECTIBLES_SHOP)) {
      let e = g.Z.getProduct(t.skuId),
        n = g.Z.getCategoryForProduct(t.skuId);
      if (null != e && null != n) {
        (0, P.closeUserProfileModal)(), (0, p.T)({
          product: e,
          category: n,
          shouldCheckoutWithOrbs: (0, v.oQ)({
            product: e
          }),
          analyticsLocations: L,
          analyticsSource: d.Z.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true,
          variantType: E.Ch.DEFAULT
        });
        return
      }
    }(0, P.closeUserProfileModal)(), (0, j.uL)("".concat(w.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))
  }, [U.pathname, t.skuId, L]), W = () => {
    (0, x.Er)({
      wishlistId: C,
      action: I.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: L
    }), k ? M() : (0, y.Z)({
      skuId: t.skuId,
      isGift: true,
      giftingOrigin: T.Wt.USER_PROFILE_WISHLIST,
      analyticsLocations: L,
      giftRecipient: n,
      variantsReturnStyle: s.v.VARIANTS_GROUP
    })
  };
  return (0, r.jsxs)("div", {
    ref: Z,
    className: N.container,
    children: [(0, r.jsx)(o.u, {
      asContainer: true,
      text: t.skuName,
      children: (0, r.jsxs)("div", {
        ref: _,
        className: N.card,
        onClick: W,
        children: [(0, r.jsx)(c.nn4, {
          children: (0, r.jsx)(c.H, {
            children: (() => {
              let e = D.type;
              switch (e) {
                case a.Z.AVATAR_DECORATION:
                  return A.intl.formatToPlainString(A.t.IQQYeX, {
                    itemName: t.skuName
                  });
                case a.Z.PROFILE_EFFECT:
                  return A.intl.formatToPlainString(A.t["x/MGW1"], {
                    itemName: t.skuName
                  });
                case a.Z.NAMEPLATE:
                  return A.intl.formatToPlainString(A.t.eVNt6O, {
                    itemName: t.skuName
                  });
                default:
                  (0, O.vE)(e)
              }
            })()
          })
        }), (0, r.jsx)("div", {
          className: N.cardPreview,
          children: (() => {
            switch (D.type) {
              case a.Z.PROFILE_EFFECT:
                return (0, r.jsx)("div", {
                  className: N.profileEffectPreview,
                  children: (0, r.jsx)(b.Z, {
                    skuId: D.skuId,
                    isHovering: R,
                    isPurchased: false,
                    removeSetHeight: true
                  })
                });
              case a.Z.AVATAR_DECORATION:
                return (0, r.jsx)("div", {
                  className: N.avatarDecorationPreview,
                  children: (0, r.jsx)(h.R, {
                    item: D,
                    user: n,
                    isHighlighted: R,
                    isPurchased: false,
                    avatarSize: c.EFr.SIZE_80
                  })
                });
              case a.Z.NAMEPLATE:
                return (0, r.jsxs)("div", {
                  className: N.nameplatePreview,
                  children: [(0, r.jsx)("div", {
                    className: N.nameplateTopLeft,
                    children: (0, r.jsx)(m.Z, {
                      user: n,
                      nameplate: D,
                      isHighlighted: R,
                      showPlaceholderUser: true,
                      showStatus: true,
                      isPurchased: false,
                      nameplatePreviewSize: "default",
                      width: 200
                    })
                  }), (0, r.jsx)("div", {
                    className: N.nameplateBottomRight,
                    "aria-hidden": true,
                    children: (0, r.jsx)(m.Z, {
                      user: n,
                      nameplate: D,
                      isHighlighted: R,
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
          className: N.overlay,
          children: (0, r.jsx)(c.zxk, {
            focusProps: {
              ringTarget: _
            },
            variant: "primary",
            size: "sm",
            text: A.intl.string(k ? A.t.FdGl5O : A.t.ilhtIS),
            icon: k ? true : c.OgN,
            onClick: e => {
              e.stopPropagation(), W()
            },
            fullWidth: true
          })
        })]
      })
    }), k && (0, r.jsx)(S.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: C,
      className: N.removeItemButton
    })]
  })
}