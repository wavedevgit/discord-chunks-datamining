/** Chunk was on 88874 **/
/** chunk id: 835255, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk843611 = require("./843611.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk442837 = require("./442837.js"),
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

function N(e) {
  let {
    item: t,
    profileOwner: i,
    wishlistId: r,
    isOwner: N,
    size: x = "lg",
    showIcons: O = false,
    collectibleSource: j = L.lr.WISHLIST,
    giftingOrigin: M = A.Wt.USER_PROFILE_WISHLIST
  } = e, F = s.useRef(null), D = s.useRef(null), {
    isHoveringOrFocusing: b
  } = (0, T.Z)(D), V = t.collectiblesItem, {
    analyticsLocations: z
  } = (0, I.ZP)(), B = (0, a.TH)(), G = V.type, [K] = (0, o.Wu)([k.Z], () => [k.Z.hasSentGift(t.skuId, i.id)], [t.skuId, i.id]), Q = !K && b, Y = N ? U.t.FdGl5O : U.t.ilhtIS, J = N ? true : d.OgN, X = (0, l.jsx)("div", {
    className: R.cardStateIconWrapper,
    children: (0, l.jsx)(d.sV5, {
      size: "custom",
      color: d.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: n()(R.cardStateIcon, R.checkmark)
    })
  }), $ = (0, l.jsx)("div", {
    className: R.overlay,
    children: (0, l.jsx)(d.Button, {
      focusProps: {
        ringTarget: D
      },
      variant: "primary",
      size: "sm",
      text: U.intl.string(Y),
      icon: J,
      onClick: e => {
        e.stopPropagation(), ee()
      },
      fullWidth: true
    })
  }), q = s.useCallback(() => {
    if (B.pathname.startsWith(H.Z5c.COLLECTIBLES_SHOP)) {
      let e = S.Z.getProduct(t.skuId),
        i = S.Z.getCategoryForProduct(t.skuId);
      if (null != e && null != i) {
        (0, y.closeUserProfileModal)(), (0, m.T)({
          product: e,
          category: i,
          shouldCheckoutWithOrbs: (0, E.oQ)({
            product: e
          }),
          analyticsLocations: z,
          analyticsSource: h.Z.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true,
          variantType: C.Ch.DEFAULT
        });
        return
      }
    }(0, y.closeUserProfileModal)(), (0, Z.uL)("".concat(H.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))
  }, [B.pathname, t.skuId, z]), ee = () => {
    if ((0, P.Er)({
        wishlistId: r,
        action: w.NW.WISHLIST_ITEM_CLICKED,
        skuId: t.skuId,
        analyticsLocations: z
      }), N) q();
    else {
      if (K) return;
      (0, _.Z)({
        skuId: t.skuId,
        isGift: true,
        giftingOrigin: M,
        analyticsLocations: z,
        giftRecipient: i,
        variantsReturnStyle: c.v.VARIANTS_GROUP
      })
    }
  };
  return (0, l.jsxs)("div", {
    ref: F,
    className: R.container,
    children: [(0, l.jsxs)("div", {
      ref: D,
      className: n()(R.card, {
        [R.giftSent]: K,
        [R.smallCard]: "sm" === x,
        [R.largeCard]: "lg" === x
      }),
      onClick: ee,
      children: [(0, l.jsx)(d.nn4, {
        children: (0, l.jsx)(d.H, {
          children: (() => {
            switch (G) {
              case u.Z.AVATAR_DECORATION:
                return U.intl.formatToPlainString(U.t.IQQYeX, {
                  itemName: t.skuName
                });
              case u.Z.PROFILE_EFFECT:
                return U.intl.formatToPlainString(U.t["x/MGW1"], {
                  itemName: t.skuName
                });
              case u.Z.NAMEPLATE:
                return U.intl.formatToPlainString(U.t.eVNt6O, {
                  itemName: t.skuName
                });
              default:
                (0, v.vE)(G)
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
                children: (0, l.jsx)(g.Z, {
                  skuId: V.skuId,
                  isHighlighted: Q,
                  isPurchased: false,
                  removeSetHeight: true
                })
              });
            case u.Z.AVATAR_DECORATION:
              return (0, l.jsx)("div", {
                className: R.avatarDecorationPreview,
                children: (0, l.jsx)(f.R, {
                  item: V,
                  user: i,
                  isHighlighted: Q,
                  isPurchased: false,
                  avatarSize: d.EFr.SIZE_80
                })
              });
            case u.Z.NAMEPLATE:
              return (0, l.jsxs)("div", {
                className: R.nameplatePreview,
                children: [(0, l.jsx)("div", {
                  className: R.nameplateTopLeft,
                  children: (0, l.jsx)(p.Z, {
                    user: i,
                    nameplate: V,
                    isHighlighted: Q,
                    showPlaceholderUser: true,
                    showStatus: true,
                    isPurchased: false,
                    nameplatePreviewSize: "default",
                    width: "sm" === x ? 136 : 200
                  })
                }), (0, l.jsx)("div", {
                  className: R.nameplateBottomRight,
                  "aria-hidden": true,
                  children: (0, l.jsx)(p.Z, {
                    user: i,
                    nameplate: V,
                    isHighlighted: Q,
                    showPlaceholderUser: true,
                    showStatus: true,
                    isPurchased: false,
                    nameplatePreviewSize: "default",
                    width: "sm" === x ? 136 : 200
                  })
                })]
              });
            default:
              return null
          }
        })()
      }), K && X, !K && $]
    }), O ? j === L.lr.WISHLIST ? (0, l.jsx)("div", {
      className: R.itemIcon,
      children: (0, l.jsx)(d.h_8, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: R.itemIconHeart
      })
    }) : j === L.lr.POPULAR ? (0, l.jsx)("div", {
      className: R.itemIcon,
      children: (0, l.jsx)(d.EOn, {
        size: "custom",
        width: 20,
        height: 20,
        color: "white"
      })
    }) : null : null, N && (0, l.jsx)(W.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: R.removeItemButton
    })]
  })
}