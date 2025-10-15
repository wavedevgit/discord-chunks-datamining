/** Chunk was on 52974 **/
/** chunk id: 835255, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => O,
  w: () => U
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
  Chunk232644 = require("./232644.js"),
  Chunk660097 = require("./660097.js");
let R = e => {
  let {
    size: t = o.EFr.SIZE_80
  } = e;
  return (0, l.jsx)(o.qEK, {
    className: H.placeholderAvatar,
    src: j,
    size: t,
    "aria-label": A.intl.string(A.t.lqaIxM)
  })
};

function U(e) {
  let {
    size: t = "lg"
  } = e, i = s.useRef(null), r = s.useRef(null);
  return (0, l.jsx)("div", {
    ref: i,
    className: H.container,
    children: (0, l.jsx)("div", {
      ref: r,
      className: n()(H.card, H.placeholderCard, {
        [H.smallCard]: "sm" === t,
        [H.largeCard]: "lg" === t
      }),
      children: (0, l.jsx)("div", {
        className: H.cardPreview,
        children: (0, l.jsx)("div", {
          className: H.avatarDecorationPreview,
          children: (0, l.jsx)(R, {
            size: o.EFr.SIZE_80
          })
        })
      })
    })
  })
}

function O(e) {
  let {
    item: t,
    profileOwner: i,
    wishlistId: r,
    isOwner: j,
    size: R = "lg",
    showIcons: U = false,
    collectibleSource: O = k.lr.WISHLIST,
    giftingOrigin: D = C.Wt.USER_PROFILE_WISHLIST
  } = e, F = s.useRef(null), M = s.useRef(null), {
    isHoveringOrFocusing: b
  } = (0, T.Z)(M), {
    analyticsLocations: G
  } = (0, I.ZP)(), z = (0, a.TH)(), V = s.useCallback(() => {
    if (z.pathname.startsWith(x.Z5c.COLLECTIBLES_SHOP)) {
      let e = S.Z.getProduct(t.skuId),
        i = S.Z.getCategoryForProduct(t.skuId);
      if (null != e && null != i) {
        (0, P.closeUserProfileModal)(), (0, f.T)({
          product: e,
          category: i,
          shouldCheckoutWithOrbs: (0, E.oQ)({
            product: e
          }),
          analyticsLocations: G,
          analyticsSource: h.Z.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true,
          variantType: N.Ch.DEFAULT
        });
        return
      }
    }(0, P.closeUserProfileModal)(), (0, v.uL)("".concat(x.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))
  }, [z.pathname, t.skuId, G]), B = t.collectiblesItem, K = B.type, [Q] = (0, d.Wu)([Z.Z], () => [Z.Z.hasSentGift(t.skuId, i.id)], [t.skuId, i.id]), q = !Q && b, Y = j ? A.t.FdGl5O : A.t.ilhtIS, J = j ? true : o.OgN, X = (0, l.jsx)("div", {
    className: H.cardStateIconWrapper,
    children: (0, l.jsx)(o.sV5, {
      size: "custom",
      color: o.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: n()(H.cardStateIcon, H.checkmark)
    })
  }), $ = (0, l.jsx)("div", {
    className: H.overlay,
    children: (0, l.jsx)(o.Button, {
      focusProps: {
        ringTarget: M
      },
      variant: "primary",
      size: "sm",
      text: A.intl.string(Y),
      icon: J,
      onClick: e => {
        e.stopPropagation(), ee()
      },
      fullWidth: true
    })
  }), ee = () => {
    if ((0, L.Er)({
        wishlistId: r,
        action: y.NW.WISHLIST_ITEM_CLICKED,
        skuId: t.skuId,
        analyticsLocations: G
      }), j) V();
    else {
      if (Q) return;
      (0, _.Z)({
        skuId: t.skuId,
        isGift: true,
        giftingOrigin: D,
        analyticsLocations: G,
        giftRecipient: i,
        variantsReturnStyle: c.v.VARIANTS_GROUP
      })
    }
  };
  return (0, l.jsxs)("div", {
    ref: F,
    className: H.container,
    children: [(0, l.jsxs)("div", {
      ref: M,
      className: n()(H.card, {
        [H.giftSent]: Q,
        [H.smallCard]: "sm" === R,
        [H.largeCard]: "lg" === R
      }),
      onClick: ee,
      children: [(0, l.jsx)(o.nn4, {
        children: (0, l.jsx)(o.H, {
          children: (() => {
            switch (K) {
              case u.Z.AVATAR_DECORATION:
                return A.intl.formatToPlainString(A.t.IQQYeX, {
                  itemName: t.skuName
                });
              case u.Z.PROFILE_EFFECT:
                return A.intl.formatToPlainString(A.t["x/MGW1"], {
                  itemName: t.skuName
                });
              case u.Z.NAMEPLATE:
                return A.intl.formatToPlainString(A.t.eVNt6O, {
                  itemName: t.skuName
                });
              default:
                (0, w.vE)(K)
            }
          })()
        })
      }), (0, l.jsx)("div", {
        className: H.cardPreview,
        children: (() => {
          switch (B.type) {
            case u.Z.PROFILE_EFFECT:
              return (0, l.jsx)("div", {
                className: H.profileEffectPreview,
                children: (0, l.jsx)(g.Z, {
                  skuId: B.skuId,
                  isHighlighted: q,
                  isPurchased: false,
                  removeSetHeight: true
                })
              });
            case u.Z.AVATAR_DECORATION:
              return (0, l.jsx)("div", {
                className: H.avatarDecorationPreview,
                children: (0, l.jsx)(m.R, {
                  item: B,
                  user: i,
                  isHighlighted: q,
                  isPurchased: false,
                  avatarSize: o.EFr.SIZE_80
                })
              });
            case u.Z.NAMEPLATE:
              return (0, l.jsxs)("div", {
                className: H.nameplatePreview,
                children: [(0, l.jsx)("div", {
                  className: H.nameplateTopLeft,
                  children: (0, l.jsx)(p.Z, {
                    user: i,
                    nameplate: B,
                    isHighlighted: q,
                    showPlaceholderUser: true,
                    showStatus: true,
                    isPurchased: false,
                    nameplatePreviewSize: "default",
                    width: "sm" === R ? 136 : 200
                  })
                }), (0, l.jsx)("div", {
                  className: H.nameplateBottomRight,
                  "aria-hidden": true,
                  children: (0, l.jsx)(p.Z, {
                    user: i,
                    nameplate: B,
                    isHighlighted: q,
                    showPlaceholderUser: true,
                    showStatus: true,
                    isPurchased: false,
                    nameplatePreviewSize: "default",
                    width: "sm" === R ? 136 : 200
                  })
                })]
              });
            default:
              return null
          }
        })()
      }), Q && X, !Q && $]
    }), U ? O === k.lr.WISHLIST ? (0, l.jsx)("div", {
      className: H.itemIcon,
      children: (0, l.jsx)(o.h_8, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: H.itemIconHeart
      })
    }) : O === k.lr.POPULAR ? (0, l.jsx)("div", {
      className: H.itemIcon,
      children: (0, l.jsx)(o.EOn, {
        size: "custom",
        width: 20,
        height: 20,
        color: "white"
      })
    }) : null : null, j && (0, l.jsx)(W.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: H.removeItemButton
    })]
  })
}