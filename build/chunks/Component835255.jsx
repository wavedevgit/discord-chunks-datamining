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

function A(e) {
  let {
    item: t,
    profileOwner: n,
    wishlistId: A,
    isOwner: C
  } = e, k = i.useRef(null), Z = i.useRef(null), D = t.collectiblesItem, {
    analyticsLocations: _
  } = (0, d.ZP)(), L = (0, c.Z)(k), R = (0, l.TH)(), U = i.useCallback(() => {
    if (R.pathname.startsWith(S.Z5c.COLLECTIBLES_SHOP)) {
      let e = f.Z.getProduct(t.skuId),
        n = f.Z.getCategoryForProduct(t.skuId);
      if (null != e && null != n) {
        (0, x.closeUserProfileModal)(), (0, g.T)({
          product: e,
          category: n,
          shouldCheckoutWithOrbs: (0, m.oQ)({
            product: e
          }),
          analyticsLocations: _,
          analyticsSource: u.Z.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true,
          variantType: w.Ch.DEFAULT
        });
        return
      }
    }(0, x.closeUserProfileModal)(), (0, j.uL)("".concat(S.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))
  }, [R.pathname, t.skuId, _]), G = () => {
    (0, O.Er)({
      wishlistId: A,
      action: I.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: _
    }), C ? U() : (0, v.Z)({
      skuId: t.skuId,
      isGift: true,
      giftingOrigin: E.Wt.USER_PROFILE_WISHLIST,
      analyticsLocations: _,
      giftRecipient: n,
      variantsReturnStyle: s.v.VARIANTS_GROUP
    })
  };
  return (0, r.jsxs)("div", {
    ref: k,
    className: N.container,
    children: [(0, r.jsxs)("div", {
      ref: Z,
      className: N.card,
      onClick: G,
      children: [(0, r.jsx)(o.nn4, {
        children: (0, r.jsx)(o.H, {
          children: (() => {
            let e = D.type;
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
                (0, b.vE)(e)
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
                children: (0, r.jsx)(y.Z, {
                  skuId: D.skuId,
                  isHovering: L,
                  isPurchased: false,
                  removeSetHeight: true
                })
              });
            case a.Z.AVATAR_DECORATION:
              return (0, r.jsx)("div", {
                className: N.avatarDecorationPreview,
                children: (0, r.jsx)(p.R, {
                  item: D,
                  user: n,
                  isHighlighted: L,
                  isPurchased: false,
                  avatarSize: o.EFr.SIZE_80
                })
              });
            case a.Z.NAMEPLATE:
              return (0, r.jsxs)("div", {
                className: N.nameplatePreview,
                children: [(0, r.jsx)("div", {
                  className: N.nameplateTopLeft,
                  children: (0, r.jsx)(h.Z, {
                    user: n,
                    nameplate: D,
                    isHighlighted: L,
                    showPlaceholderUser: true,
                    showStatus: true,
                    isPurchased: false,
                    nameplatePreviewSize: "default",
                    width: 200
                  })
                }), (0, r.jsx)("div", {
                  className: N.nameplateBottomRight,
                  "aria-hidden": true,
                  children: (0, r.jsx)(h.Z, {
                    user: n,
                    nameplate: D,
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
        className: N.overlay,
        children: (0, r.jsx)(o.zxk, {
          focusProps: {
            ringTarget: Z
          },
          variant: "primary",
          size: "sm",
          text: T.intl.string(C ? T.t.FdGl5O : T.t.ilhtIS),
          icon: C ? true : o.OgN,
          onClick: e => {
            e.stopPropagation(), G()
          },
          fullWidth: true
        })
      })]
    }), C && (0, r.jsx)(P.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: A,
      className: N.removeItemButton
    })]
  })
}