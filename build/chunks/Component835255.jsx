/** Chunk was on 56848 **/
/** chunk id: 835255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk988388 = require("./988388.js");

function _(e) {
  let {
    item: t,
    profileOwner: n,
    wishlistId: l,
    isOwner: _
  } = e, R = i.useRef(null), L = i.useRef(null), {
    isHoveringOrFocusing: G
  } = (0, j.Z)(L), U = t.collectiblesItem, {
    analyticsLocations: M
  } = (0, p.ZP)(), W = (0, s.TH)(), [F] = (0, u.Wu)([I.Z], () => [I.Z.hasSentGift(t.skuId, n.id)], [t.skuId, n.id]), B = !F && G, z = F ? true : t.skuName, H = _ ? D.t.FdGl5O : D.t.ilhtIS, V = _ ? true : f.OgN, Y = (0, r.jsx)("div", {
    className: Z.cardStateIconWrapper,
    children: (0, r.jsx)(f.sV5, {
      size: "custom",
      color: f.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: a()(Z.cardStateIcon, Z.checkmark)
    })
  }), q = (0, r.jsx)("div", {
    className: Z.overlay,
    children: (0, r.jsx)(f.zxk, {
      focusProps: {
        ringTarget: L
      },
      variant: "primary",
      size: "sm",
      text: D.intl.string(H),
      icon: V,
      onClick: e => {
        e.stopPropagation(), K()
      },
      fullWidth: true
    })
  }), X = i.useCallback(() => {
    if (W.pathname.startsWith(N.Z5c.COLLECTIBLES_SHOP)) {
      let e = m.Z.getProduct(t.skuId),
        n = m.Z.getCategoryForProduct(t.skuId);
      if (null != e && null != n) {
        (0, E.closeUserProfileModal)(), (0, h.T)({
          product: e,
          category: n,
          shouldCheckoutWithOrbs: (0, b.oQ)({
            product: e
          }),
          analyticsLocations: M,
          analyticsSource: g.Z.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true,
          variantType: C.Ch.DEFAULT
        });
        return
      }
    }(0, E.closeUserProfileModal)(), (0, P.uL)("".concat(N.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))
  }, [W.pathname, t.skuId, M]), K = () => {
    if ((0, w.Er)({
        wishlistId: l,
        action: A.NW.WISHLIST_ITEM_CLICKED,
        skuId: t.skuId,
        analyticsLocations: M
      }), _) X();
    else {
      if (F) return;
      (0, O.Z)({
        skuId: t.skuId,
        isGift: true,
        giftingOrigin: k.Wt.USER_PROFILE_WISHLIST,
        analyticsLocations: M,
        giftRecipient: n,
        variantsReturnStyle: c.v.VARIANTS_GROUP
      })
    }
  };
  return (0, r.jsxs)("div", {
    ref: R,
    className: Z.container,
    children: [(0, r.jsx)(d.u, {
      asContainer: true,
      text: z,
      children: (0, r.jsxs)("div", {
        ref: L,
        className: a()(Z.card, {
          [Z.giftSent]: F
        }),
        onClick: K,
        children: [(0, r.jsx)(f.nn4, {
          children: (0, r.jsx)(f.H, {
            children: (() => {
              let e = U.type;
              switch (e) {
                case o.Z.AVATAR_DECORATION:
                  return D.intl.formatToPlainString(D.t.IQQYeX, {
                    itemName: t.skuName
                  });
                case o.Z.PROFILE_EFFECT:
                  return D.intl.formatToPlainString(D.t["x/MGW1"], {
                    itemName: t.skuName
                  });
                case o.Z.NAMEPLATE:
                  return D.intl.formatToPlainString(D.t.eVNt6O, {
                    itemName: t.skuName
                  });
                default:
                  (0, S.vE)(e)
              }
            })()
          })
        }), (0, r.jsx)("div", {
          className: Z.cardPreview,
          children: (() => {
            switch (U.type) {
              case o.Z.PROFILE_EFFECT:
                return (0, r.jsx)("div", {
                  className: Z.profileEffectPreview,
                  children: (0, r.jsx)(x.Z, {
                    skuId: U.skuId,
                    isHighlighted: B,
                    isPurchased: false,
                    removeSetHeight: true
                  })
                });
              case o.Z.AVATAR_DECORATION:
                return (0, r.jsx)("div", {
                  className: Z.avatarDecorationPreview,
                  children: (0, r.jsx)(v.R, {
                    item: U,
                    user: n,
                    isHighlighted: B,
                    isPurchased: false,
                    avatarSize: f.EFr.SIZE_80
                  })
                });
              case o.Z.NAMEPLATE:
                return (0, r.jsxs)("div", {
                  className: Z.nameplatePreview,
                  children: [(0, r.jsx)("div", {
                    className: Z.nameplateTopLeft,
                    children: (0, r.jsx)(y.Z, {
                      user: n,
                      nameplate: U,
                      isHighlighted: B,
                      showPlaceholderUser: true,
                      showStatus: true,
                      isPurchased: false,
                      nameplatePreviewSize: "default",
                      width: 200
                    })
                  }), (0, r.jsx)("div", {
                    className: Z.nameplateBottomRight,
                    "aria-hidden": true,
                    children: (0, r.jsx)(y.Z, {
                      user: n,
                      nameplate: U,
                      isHighlighted: B,
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
        }), F && Y, !F && q]
      })
    }), _ && (0, r.jsx)(T.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: l,
      className: Z.removeItemButton
    })]
  })
}