/** Chunk was on 84071 **/
/** chunk id: 835255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H,
  w: () => F
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
  Chunk602733 = require("./602733.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
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
let B = e => {
  let {
    size: t = u.EFr.SIZE_80
  } = e;
  return (0, r.jsx)(u.qEK, {
    className: M.placeholderAvatar,
    src: R,
    size: t,
    "aria-label": Z.intl.string(Z.t.lqaIxM)
  })
};

function F(e) {
  let {
    size: t = "lg"
  } = e, n = i.useRef(null), a = i.useRef(null);
  return (0, r.jsx)("div", {
    ref: n,
    className: M.container,
    children: (0, r.jsx)("div", {
      ref: a,
      className: l()(M.card, M.placeholderCard, {
        [M.smallCard]: "sm" === t,
        [M.largeCard]: "lg" === t
      }),
      children: (0, r.jsx)("div", {
        className: M.cardPreview,
        children: (0, r.jsx)("div", {
          className: M.avatarDecorationPreview,
          children: (0, r.jsx)(B, {
            size: u.EFr.SIZE_80
          })
        })
      })
    })
  })
}

function H(e) {
  let {
    item: t,
    profileOwner: n,
    wishlistId: a,
    isOwner: R,
    size: B = "lg",
    showIcons: F = false,
    collectibleSource: H = y.lr.WISHLIST,
    disableHoverEffects: G = false,
    giftingOrigin: U = A.Wt.USER_PROFILE_WISHLIST
  } = e, D = i.useRef(null), z = i.useRef(null), {
    isHoveringOrFocusing: W
  } = (0, j.Z)(z), {
    analyticsLocations: K
  } = (0, h.ZP)(), V = (0, s.TH)(), Y = i.useCallback(() => {
    if (V.pathname.startsWith(k.Z5c.COLLECTIBLES_SHOP)) {
      let e = _.Z.getProduct(t.skuId),
        n = _.Z.getCategoryForProduct(t.skuId);
      if (null != e && null != n) {
        (0, E.closeUserProfileModal)(), (0, m.T)({
          product: e,
          category: n,
          shouldCheckoutWithOrbs: (0, g.oQ)({
            product: e
          }),
          analyticsLocations: K,
          analyticsSource: p.Z.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true,
          variantType: N.Ch.DEFAULT
        });
        return
      }
    }(0, E.closeUserProfileModal)(), (0, S.uL)("".concat(k.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))
  }, [V.pathname, t.skuId, K]), q = t.collectiblesItem, J = q.type, [Q] = (0, c.Wu)([L.Z], () => [L.Z.hasSentGift(t.skuId, n.id)], [t.skuId, n.id]), X = !Q && W, $ = R ? Z.t.FdGl5O : Z.t.ilhtIS, ee = R ? true : u.OgN, et = (0, r.jsx)("div", {
    className: M.cardStateIconWrapper,
    children: (0, r.jsx)(u.sV5, {
      size: "custom",
      color: u.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: l()(M.cardStateIcon, M.checkmark)
    })
  }), en = (0, r.jsx)("div", {
    className: M.overlay,
    children: (0, r.jsx)(u.Button, {
      focusProps: {
        ringTarget: z
      },
      variant: "primary",
      size: "sm",
      text: Z.intl.string($),
      icon: ee,
      onClick: e => {
        e.stopPropagation(), er()
      },
      fullWidth: true
    })
  }), er = () => {
    if (null != a && (0, P.Er)({
        wishlistId: a,
        action: T.NW.WISHLIST_ITEM_CLICKED,
        skuId: t.skuId,
        analyticsLocations: K
      }), R) Y();
    else {
      if (Q) return;
      (0, b.Z)({
        skuId: t.skuId,
        isGift: true,
        giftingOrigin: U,
        analyticsLocations: K,
        giftRecipient: n,
        variantsReturnStyle: d.v.VARIANTS_GROUP
      })
    }
  };
  return (0, r.jsxs)("div", {
    ref: D,
    className: M.container,
    children: [(0, r.jsxs)("div", {
      ref: z,
      className: l()(M.card, {
        [M.giftSent]: Q,
        [M.smallCard]: "sm" === B,
        [M.largeCard]: "lg" === B
      }),
      onClick: er,
      children: [(0, r.jsx)(u.nn4, {
        children: (0, r.jsx)(u.H, {
          children: (() => {
            switch (J) {
              case o.Z.AVATAR_DECORATION:
                return Z.intl.formatToPlainString(Z.t.IQQYeX, {
                  itemName: t.skuName
                });
              case o.Z.PROFILE_EFFECT:
                return Z.intl.formatToPlainString(Z.t["x/MGW1"], {
                  itemName: t.skuName
                });
              case o.Z.NAMEPLATE:
                return Z.intl.formatToPlainString(Z.t.eVNt6O, {
                  itemName: t.skuName
                });
              default:
                (0, I.vE)(J)
            }
          })()
        })
      }), (0, r.jsx)("div", {
        className: M.cardPreview,
        children: (() => {
          switch (q.type) {
            case o.Z.PROFILE_EFFECT:
              return (0, r.jsx)("div", {
                className: M.profileEffectPreview,
                children: (0, r.jsx)(v.Z, {
                  skuId: q.skuId,
                  isHighlighted: X,
                  isPurchased: false,
                  removeSetHeight: true
                })
              });
            case o.Z.AVATAR_DECORATION:
              return (0, r.jsx)("div", {
                className: M.avatarDecorationPreview,
                children: (0, r.jsx)(f.R, {
                  item: q,
                  user: n,
                  isHighlighted: X,
                  isPurchased: false,
                  avatarSize: u.EFr.SIZE_80
                })
              });
            case o.Z.NAMEPLATE:
              return (0, r.jsxs)("div", {
                className: M.nameplatePreview,
                children: [(0, r.jsx)("div", {
                  className: M.nameplateTopLeft,
                  children: (0, r.jsx)(x.Z, {
                    user: n,
                    nameplate: q,
                    isHighlighted: X,
                    showPlaceholderUser: true,
                    showStatus: true,
                    isPurchased: false,
                    nameplatePreviewSize: "default",
                    width: "sm" === B ? 136 : 200
                  })
                }), (0, r.jsx)("div", {
                  className: M.nameplateBottomRight,
                  "aria-hidden": true,
                  children: (0, r.jsx)(x.Z, {
                    user: n,
                    nameplate: q,
                    isHighlighted: X,
                    showPlaceholderUser: true,
                    showStatus: true,
                    isPurchased: false,
                    nameplatePreviewSize: "default",
                    width: "sm" === B ? 136 : 200
                  })
                })]
              });
            default:
              return null
          }
        })()
      }), Q && et, !Q && !G && en]
    }), F ? H === y.lr.WISHLIST ? (0, r.jsx)("div", {
      className: M.itemIcon,
      children: (0, r.jsx)(C.u, {
        text: Z.intl.formatToPlainString(Z.t.p3RmJC, {
          username: w.ZP.getName(n)
        }),
        position: "top",
        children: (0, r.jsx)(u.h_8, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          colorClass: M.itemIconHeart
        })
      })
    }) : H === y.lr.POPULAR ? (0, r.jsx)("div", {
      className: M.itemIcon,
      children: (0, r.jsx)(C.u, {
        text: Z.intl.string(Z.t.Ig6VDA),
        position: "top",
        children: (0, r.jsx)(u.EOn, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          colorClass: M.itemIconShop
        })
      })
    }) : null : null, R && null != a && (0, r.jsx)(O.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: a,
      className: M.removeItemButton
    })]
  })
}