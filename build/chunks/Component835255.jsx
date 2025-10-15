/** Chunk was on 88874 **/
/** chunk id: 835255, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => O,
  w: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let U = e => {
  let {
    size: t = o.EFr.SIZE_80
  } = e;
  return (0, l.jsx)(o.qEK, {
    className: A.placeholderAvatar,
    src: R,
    size: t,
    "aria-label": N.intl.string(N.t.lqaIxM)
  })
};

function j(e) {
  let {
    size: t = "lg"
  } = e, i = r.useRef(null), s = r.useRef(null);
  return (0, l.jsx)("div", {
    ref: i,
    className: A.container,
    children: (0, l.jsx)("div", {
      ref: s,
      className: a()(A.card, A.placeholderCard, {
        [A.smallCard]: "sm" === t,
        [A.largeCard]: "lg" === t
      }),
      children: (0, l.jsx)("div", {
        className: A.cardPreview,
        children: (0, l.jsx)("div", {
          className: A.avatarDecorationPreview,
          children: (0, l.jsx)(U, {
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
    wishlistId: s,
    isOwner: R,
    size: U = "lg",
    showIcons: j = false,
    collectibleSource: O = k.lr.WISHLIST,
    giftingOrigin: F = x.Wt.USER_PROFILE_WISHLIST
  } = e, M = r.useRef(null), D = r.useRef(null), {
    isHoveringOrFocusing: b
  } = (0, T.Z)(D), {
    analyticsLocations: z
  } = (0, I.ZP)(), V = (0, n.TH)(), B = r.useCallback(() => {
    if (V.pathname.startsWith(H.Z5c.COLLECTIBLES_SHOP)) {
      let e = S.Z.getProduct(t.skuId),
        i = S.Z.getCategoryForProduct(t.skuId);
      if (null != e && null != i) {
        (0, w.closeUserProfileModal)(), (0, m.T)({
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
    }(0, w.closeUserProfileModal)(), (0, v.uL)("".concat(H.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))
  }, [V.pathname, t.skuId, z]), K = t.collectiblesItem, G = K.type, [Q] = (0, d.Wu)([Z.Z], () => [Z.Z.hasSentGift(t.skuId, i.id)], [t.skuId, i.id]), Y = !Q && b, q = R ? N.t.FdGl5O : N.t.ilhtIS, J = R ? true : o.OgN, X = (0, l.jsx)("div", {
    className: A.cardStateIconWrapper,
    children: (0, l.jsx)(o.sV5, {
      size: "custom",
      color: o.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: a()(A.cardStateIcon, A.checkmark)
    })
  }), $ = (0, l.jsx)("div", {
    className: A.overlay,
    children: (0, l.jsx)(o.Button, {
      focusProps: {
        ringTarget: D
      },
      variant: "primary",
      size: "sm",
      text: N.intl.string(q),
      icon: J,
      onClick: e => {
        e.stopPropagation(), ee()
      },
      fullWidth: true
    })
  }), ee = () => {
    if ((0, P.Er)({
        wishlistId: s,
        action: W.NW.WISHLIST_ITEM_CLICKED,
        skuId: t.skuId,
        analyticsLocations: z
      }), R) B();
    else {
      if (Q) return;
      (0, _.Z)({
        skuId: t.skuId,
        isGift: true,
        giftingOrigin: F,
        analyticsLocations: z,
        giftRecipient: i,
        variantsReturnStyle: c.v.VARIANTS_GROUP
      })
    }
  };
  return (0, l.jsxs)("div", {
    ref: M,
    className: A.container,
    children: [(0, l.jsxs)("div", {
      ref: D,
      className: a()(A.card, {
        [A.giftSent]: Q,
        [A.smallCard]: "sm" === U,
        [A.largeCard]: "lg" === U
      }),
      onClick: ee,
      children: [(0, l.jsx)(o.nn4, {
        children: (0, l.jsx)(o.H, {
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
                (0, L.vE)(G)
            }
          })()
        })
      }), (0, l.jsx)("div", {
        className: A.cardPreview,
        children: (() => {
          switch (K.type) {
            case u.Z.PROFILE_EFFECT:
              return (0, l.jsx)("div", {
                className: A.profileEffectPreview,
                children: (0, l.jsx)(g.Z, {
                  skuId: K.skuId,
                  isHighlighted: Y,
                  isPurchased: false,
                  removeSetHeight: true
                })
              });
            case u.Z.AVATAR_DECORATION:
              return (0, l.jsx)("div", {
                className: A.avatarDecorationPreview,
                children: (0, l.jsx)(f.R, {
                  item: K,
                  user: i,
                  isHighlighted: Y,
                  isPurchased: false,
                  avatarSize: o.EFr.SIZE_80
                })
              });
            case u.Z.NAMEPLATE:
              return (0, l.jsxs)("div", {
                className: A.nameplatePreview,
                children: [(0, l.jsx)("div", {
                  className: A.nameplateTopLeft,
                  children: (0, l.jsx)(p.Z, {
                    user: i,
                    nameplate: K,
                    isHighlighted: Y,
                    showPlaceholderUser: true,
                    showStatus: true,
                    isPurchased: false,
                    nameplatePreviewSize: "default",
                    width: "sm" === U ? 136 : 200
                  })
                }), (0, l.jsx)("div", {
                  className: A.nameplateBottomRight,
                  "aria-hidden": true,
                  children: (0, l.jsx)(p.Z, {
                    user: i,
                    nameplate: K,
                    isHighlighted: Y,
                    showPlaceholderUser: true,
                    showStatus: true,
                    isPurchased: false,
                    nameplatePreviewSize: "default",
                    width: "sm" === U ? 136 : 200
                  })
                })]
              });
            default:
              return null
          }
        })()
      }), Q && X, !Q && $]
    }), j ? O === k.lr.WISHLIST ? (0, l.jsx)("div", {
      className: A.itemIcon,
      children: (0, l.jsx)(o.h_8, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: A.itemIconHeart
      })
    }) : O === k.lr.POPULAR ? (0, l.jsx)("div", {
      className: A.itemIcon,
      children: (0, l.jsx)(o.EOn, {
        size: "custom",
        width: 20,
        height: 20,
        color: "white"
      })
    }) : null : null, R && (0, l.jsx)(y.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: s,
      className: A.removeItemButton
    })]
  })
}