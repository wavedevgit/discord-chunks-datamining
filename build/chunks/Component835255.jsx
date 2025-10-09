/** Chunk was on 84071 **/
/** chunk id: 835255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
    profileOwner: n,
    wishlistId: a,
    isOwner: N,
    size: M = "lg"
  } = e, R = i.useRef(null), B = i.useRef(null), {
    isHoveringOrFocusing: F
  } = (0, j.Z)(B), G = t.collectiblesItem, {
    analyticsLocations: H
  } = (0, _.ZP)(), U = (0, o.TH)(), [D] = (0, c.Wu)([S.Z], () => [S.Z.hasSentGift(t.skuId, n.id)], [t.skuId, n.id]), z = !D && F, W = D ? true : t.skuName, K = N ? Z.t.FdGl5O : Z.t.ilhtIS, V = N ? true : u.OgN, Y = (0, r.jsx)("div", {
    className: A.cardStateIconWrapper,
    children: (0, r.jsx)(u.sV5, {
      size: "custom",
      color: u.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: l()(A.cardStateIcon, A.checkmark)
    })
  }), q = (0, r.jsx)("div", {
    className: A.overlay,
    children: (0, r.jsx)(u.zxk, {
      focusProps: {
        ringTarget: B
      },
      variant: "primary",
      size: "sm",
      text: Z.intl.string(K),
      icon: V,
      onClick: e => {
        e.stopPropagation(), Q()
      },
      fullWidth: true
    })
  }), X = i.useCallback(() => {
    if (U.pathname.startsWith(E.Z5c.COLLECTIBLES_SHOP)) {
      let e = h.Z.getProduct(t.skuId),
        n = h.Z.getCategoryForProduct(t.skuId);
      if (null != e && null != n) {
        (0, w.closeUserProfileModal)(), (0, f.T)({
          product: e,
          category: n,
          shouldCheckoutWithOrbs: (0, g.oQ)({
            product: e
          }),
          analyticsLocations: H,
          analyticsSource: p.Z.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true,
          variantType: k.Ch.DEFAULT
        });
        return
      }
    }(0, w.closeUserProfileModal)(), (0, y.uL)("".concat(E.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))
  }, [U.pathname, t.skuId, H]), Q = () => {
    if ((0, I.Er)({
        wishlistId: a,
        action: O.NW.WISHLIST_ITEM_CLICKED,
        skuId: t.skuId,
        analyticsLocations: H
      }), N) X();
    else {
      if (D) return;
      (0, b.Z)({
        skuId: t.skuId,
        isGift: true,
        giftingOrigin: T.Wt.USER_PROFILE_WISHLIST,
        analyticsLocations: H,
        giftRecipient: n,
        variantsReturnStyle: d.v.VARIANTS_GROUP
      })
    }
  };
  return (0, r.jsxs)("div", {
    ref: R,
    className: A.container,
    children: [(0, r.jsx)(C.u, {
      asContainer: true,
      text: W,
      children: (0, r.jsxs)("div", {
        ref: B,
        className: l()(A.card, {
          [A.giftSent]: D,
          [A.smallCard]: "sm" === M,
          [A.largeCard]: "lg" === M
        }),
        onClick: Q,
        children: [(0, r.jsx)(u.nn4, {
          children: (0, r.jsx)(u.H, {
            children: (() => {
              let e = G.type;
              switch (e) {
                case s.Z.AVATAR_DECORATION:
                  return Z.intl.formatToPlainString(Z.t.IQQYeX, {
                    itemName: t.skuName
                  });
                case s.Z.PROFILE_EFFECT:
                  return Z.intl.formatToPlainString(Z.t["x/MGW1"], {
                    itemName: t.skuName
                  });
                case s.Z.NAMEPLATE:
                  return Z.intl.formatToPlainString(Z.t.eVNt6O, {
                    itemName: t.skuName
                  });
                default:
                  (0, L.vE)(e)
              }
            })()
          })
        }), (0, r.jsx)("div", {
          className: A.cardPreview,
          children: (() => {
            switch (G.type) {
              case s.Z.PROFILE_EFFECT:
                return (0, r.jsx)("div", {
                  className: A.profileEffectPreview,
                  children: (0, r.jsx)(v.Z, {
                    skuId: G.skuId,
                    isHighlighted: z,
                    isPurchased: false,
                    removeSetHeight: true
                  })
                });
              case s.Z.AVATAR_DECORATION:
                return (0, r.jsx)("div", {
                  className: A.avatarDecorationPreview,
                  children: (0, r.jsx)(m.R, {
                    item: G,
                    user: n,
                    isHighlighted: z,
                    isPurchased: false,
                    avatarSize: u.EFr.SIZE_80
                  })
                });
              case s.Z.NAMEPLATE:
                return (0, r.jsxs)("div", {
                  className: A.nameplatePreview,
                  children: [(0, r.jsx)("div", {
                    className: A.nameplateTopLeft,
                    children: (0, r.jsx)(x.Z, {
                      user: n,
                      nameplate: G,
                      isHighlighted: z,
                      showPlaceholderUser: true,
                      showStatus: true,
                      isPurchased: false,
                      nameplatePreviewSize: "default",
                      width: "sm" === M ? 136 : 200
                    })
                  }), (0, r.jsx)("div", {
                    className: A.nameplateBottomRight,
                    "aria-hidden": true,
                    children: (0, r.jsx)(x.Z, {
                      user: n,
                      nameplate: G,
                      isHighlighted: z,
                      showPlaceholderUser: true,
                      showStatus: true,
                      isPurchased: false,
                      nameplatePreviewSize: "default",
                      width: "sm" === M ? 136 : 200
                    })
                  })]
                });
              default:
                return null
            }
          })()
        }), D && Y, !D && q]
      })
    }), N && (0, r.jsx)(P.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: a,
      className: A.removeItemButton
    })]
  })
}