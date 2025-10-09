/** Chunk was on 88874 **/
/** chunk id: 835255, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk843611 = require("./843611.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk237031 = require("./237031.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk956472 = require("./956472.js"),
  Chunk104505 = require("./104505.js"),
  Chunk333867 = require("./333867.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk89196 = require("./89196.js"),
  Chunk602733 = require("./602733.js"),
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

function x(e) {
  let {
    item: t,
    profileOwner: i,
    wishlistId: r,
    isOwner: x,
    size: O = "lg",
    showIcons: j = false,
    collectibleSource: M = L.lr.WISHLIST
  } = e, F = s.useRef(null), D = s.useRef(null), {
    isHoveringOrFocusing: b
  } = (0, _.Z)(D), V = t.collectiblesItem, {
    analyticsLocations: z
  } = (0, I.ZP)(), B = (0, a.TH)(), G = V.type, [K] = (0, d.Wu)([Z.Z], () => [Z.Z.hasSentGift(t.skuId, i.id)], [t.skuId, i.id]), Q = !K && b, Y = K ? true : t.skuName, J = x ? N.t.FdGl5O : N.t.ilhtIS, X = x ? true : h.OgN, $ = (0, l.jsx)("div", {
    className: R.cardStateIconWrapper,
    children: (0, l.jsx)(h.sV5, {
      size: "custom",
      color: h.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: n()(R.cardStateIcon, R.checkmark)
    })
  }), q = (0, l.jsx)("div", {
    className: R.overlay,
    children: (0, l.jsx)(h.zxk, {
      focusProps: {
        ringTarget: D
      },
      variant: "primary",
      size: "sm",
      text: N.intl.string(J),
      icon: X,
      onClick: e => {
        e.stopPropagation(), et()
      },
      fullWidth: true
    })
  }), ee = s.useCallback(() => {
    if (B.pathname.startsWith(C.Z5c.COLLECTIBLES_SHOP)) {
      let e = m.Z.getProduct(t.skuId),
        i = m.Z.getCategoryForProduct(t.skuId);
      if (null != e && null != i) {
        (0, W.closeUserProfileModal)(), (0, f.T)({
          product: e,
          category: i,
          shouldCheckoutWithOrbs: (0, T.oQ)({
            product: e
          }),
          analyticsLocations: z,
          analyticsSource: S.Z.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true,
          variantType: A.Ch.DEFAULT
        });
        return
      }
    }(0, W.closeUserProfileModal)(), (0, v.uL)("".concat(C.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))
  }, [B.pathname, t.skuId, z]), et = () => {
    if ((0, y.Er)({
        wishlistId: r,
        action: H.NW.WISHLIST_ITEM_CLICKED,
        skuId: t.skuId,
        analyticsLocations: z
      }), x) ee();
    else {
      if (K) return;
      (0, g.Z)({
        skuId: t.skuId,
        isGift: true,
        giftingOrigin: U.Wt.USER_PROFILE_WISHLIST,
        analyticsLocations: z,
        giftRecipient: i,
        variantsReturnStyle: c.v.VARIANTS_GROUP
      })
    }
  };
  return (0, l.jsxs)("div", {
    ref: F,
    className: R.container,
    children: [(0, l.jsxs)(o.u, {
      asContainer: true,
      text: Y,
      children: [(0, l.jsxs)("div", {
        ref: D,
        className: n()(R.card, {
          [R.giftSent]: K,
          [R.smallCard]: "sm" === O,
          [R.largeCard]: "lg" === O
        }),
        onClick: et,
        children: [(0, l.jsx)(h.nn4, {
          children: (0, l.jsx)(h.H, {
            children: (() => {
              switch (G) {
                case u.Z.AVATAR_DECORATION:
                  return N.intl.formatToPlainString(N.t.IQQYeX, {
                    itemName: t.skuName
                  });
                case u.Z.PROFILE_EFFECT:
                  return N.intl.formatToPlainString(N.t["x/MGW1"], {
                    itemName: t.skuName
                  });
                case u.Z.NAMEPLATE:
                  return N.intl.formatToPlainString(N.t.eVNt6O, {
                    itemName: t.skuName
                  });
                default:
                  (0, P.vE)(G)
              }
            })()
          })
        }), (0, l.jsx)("div", {
          className: R.cardPreview,
          children: (() => {
            switch (V.type) {
              case u.Z.PROFILE_EFFECT:
                return (0, l.jsx)("div", {
                  className: R.profileEffectPreview,
                  children: (0, l.jsx)(k.Z, {
                    skuId: V.skuId,
                    isHighlighted: Q,
                    isPurchased: false,
                    removeSetHeight: true
                  })
                });
              case u.Z.AVATAR_DECORATION:
                return (0, l.jsx)("div", {
                  className: R.avatarDecorationPreview,
                  children: (0, l.jsx)(p.R, {
                    item: V,
                    user: i,
                    isHighlighted: Q,
                    isPurchased: false,
                    avatarSize: h.EFr.SIZE_80
                  })
                });
              case u.Z.NAMEPLATE:
                return (0, l.jsxs)("div", {
                  className: R.nameplatePreview,
                  children: [(0, l.jsx)("div", {
                    className: R.nameplateTopLeft,
                    children: (0, l.jsx)(E.Z, {
                      user: i,
                      nameplate: V,
                      isHighlighted: Q,
                      showPlaceholderUser: true,
                      showStatus: true,
                      isPurchased: false,
                      nameplatePreviewSize: "default",
                      width: "sm" === O ? 136 : 200
                    })
                  }), (0, l.jsx)("div", {
                    className: R.nameplateBottomRight,
                    "aria-hidden": true,
                    children: (0, l.jsx)(E.Z, {
                      user: i,
                      nameplate: V,
                      isHighlighted: Q,
                      showPlaceholderUser: true,
                      showStatus: true,
                      isPurchased: false,
                      nameplatePreviewSize: "default",
                      width: "sm" === O ? 136 : 200
                    })
                  })]
                });
              default:
                return null
            }
          })()
        }), K && $, !K && q]
      }), j ? M === L.lr.WISHLIST ? (0, l.jsx)("div", {
        className: R.itemIcon,
        children: (0, l.jsx)(h.h_8, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          colorClass: R.itemIconHeart
        })
      }) : M === L.lr.POPULAR ? (0, l.jsx)("div", {
        className: R.itemIcon,
        children: (0, l.jsx)(h.EOn, {
          size: "custom",
          width: 20,
          height: 20,
          color: "white"
        })
      }) : null : null]
    }), x && (0, l.jsx)(w.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: R.removeItemButton
    })]
  })
}