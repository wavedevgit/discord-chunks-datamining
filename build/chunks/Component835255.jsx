/** Chunk was on 52974 **/
/** chunk id: 835255, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => F,
  w: () => D
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
let O = e => {
  let {
    size: t = h.EFr.SIZE_80
  } = e;
  return (0, l.jsx)(h.qEK, {
    className: R.placeholderAvatar,
    src: U,
    size: t,
    "aria-label": j.intl.string(j.t.lqaIxM)
  })
};

function D(e) {
  let {
    size: t = "lg"
  } = e, i = s.useRef(null), r = s.useRef(null);
  return (0, l.jsx)("div", {
    ref: i,
    className: R.container,
    children: (0, l.jsx)("div", {
      ref: r,
      className: n()(R.card, R.placeholderCard, {
        [R.smallCard]: "sm" === t,
        [R.largeCard]: "lg" === t
      }),
      children: (0, l.jsx)("div", {
        className: R.cardPreview,
        children: (0, l.jsx)("div", {
          className: R.avatarDecorationPreview,
          children: (0, l.jsx)(O, {
            size: h.EFr.SIZE_80
          })
        })
      })
    })
  })
}

function F(e) {
  let {
    item: t,
    profileOwner: i,
    wishlistId: r,
    isOwner: U,
    size: O = "lg",
    showIcons: D = false,
    collectibleSource: F = w.lr.WISHLIST,
    disableHoverEffects: M = false,
    giftingOrigin: b = H.Wt.USER_PROFILE_WISHLIST
  } = e, G = s.useRef(null), z = s.useRef(null), {
    isHoveringOrFocusing: V
  } = (0, _.Z)(z), {
    analyticsLocations: B
  } = (0, S.ZP)(), K = (0, a.TH)(), Q = s.useCallback(() => {
    if (K.pathname.startsWith(N.Z5c.COLLECTIBLES_SHOP)) {
      let e = f.Z.getProduct(t.skuId),
        i = f.Z.getCategoryForProduct(t.skuId);
      if (null != e && null != i) {
        (0, W.closeUserProfileModal)(), (0, m.T)({
          product: e,
          category: i,
          shouldCheckoutWithOrbs: (0, T.oQ)({
            product: e
          }),
          analyticsLocations: B,
          analyticsSource: I.Z.USER_PROFILE_WISHLIST,
          returnRef: true,
          tab: true,
          variantType: A.Ch.DEFAULT
        });
        return
      }
    }(0, W.closeUserProfileModal)(), (0, Z.uL)("".concat(N.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId))
  }, [K.pathname, t.skuId, B]), q = t.collectiblesItem, J = q.type, [Y] = (0, o.Wu)([k.Z], () => [k.Z.hasSentGift(t.skuId, i.id)], [t.skuId, i.id]), X = !Y && V, $ = U ? j.t.FdGl5O : j.t.ilhtIS, ee = U ? true : h.OgN, et = (0, l.jsx)("div", {
    className: R.cardStateIconWrapper,
    children: (0, l.jsx)(h.sV5, {
      size: "custom",
      color: h.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: n()(R.cardStateIcon, R.checkmark)
    })
  }), ei = (0, l.jsx)("div", {
    className: R.overlay,
    children: (0, l.jsx)(h.Button, {
      focusProps: {
        ringTarget: z
      },
      variant: "primary",
      size: "sm",
      text: j.intl.string($),
      icon: ee,
      onClick: e => {
        e.stopPropagation(), el()
      },
      fullWidth: true
    })
  }), el = () => {
    if ((0, L.Er)({
        wishlistId: r,
        action: C.NW.WISHLIST_ITEM_CLICKED,
        skuId: t.skuId,
        analyticsLocations: B
      }), U) Q();
    else {
      if (Y) return;
      (0, g.Z)({
        skuId: t.skuId,
        isGift: true,
        giftingOrigin: b,
        analyticsLocations: B,
        giftRecipient: i,
        variantsReturnStyle: c.v.VARIANTS_GROUP
      })
    }
  };
  return (0, l.jsxs)("div", {
    ref: G,
    className: R.container,
    children: [(0, l.jsxs)("div", {
      ref: z,
      className: n()(R.card, {
        [R.giftSent]: Y,
        [R.smallCard]: "sm" === O,
        [R.largeCard]: "lg" === O
      }),
      onClick: el,
      children: [(0, l.jsx)(h.nn4, {
        children: (0, l.jsx)(h.H, {
          children: (() => {
            switch (J) {
              case u.Z.AVATAR_DECORATION:
                return j.intl.formatToPlainString(j.t.IQQYeX, {
                  itemName: t.skuName
                });
              case u.Z.PROFILE_EFFECT:
                return j.intl.formatToPlainString(j.t["x/MGW1"], {
                  itemName: t.skuName
                });
              case u.Z.NAMEPLATE:
                return j.intl.formatToPlainString(j.t.eVNt6O, {
                  itemName: t.skuName
                });
              default:
                (0, P.vE)(J)
            }
          })()
        })
      }), (0, l.jsx)("div", {
        className: R.cardPreview,
        children: (() => {
          switch (q.type) {
            case u.Z.PROFILE_EFFECT:
              return (0, l.jsx)("div", {
                className: R.profileEffectPreview,
                children: (0, l.jsx)(v.Z, {
                  skuId: q.skuId,
                  isHighlighted: X,
                  isPurchased: false,
                  removeSetHeight: true
                })
              });
            case u.Z.AVATAR_DECORATION:
              return (0, l.jsx)("div", {
                className: R.avatarDecorationPreview,
                children: (0, l.jsx)(p.R, {
                  item: q,
                  user: i,
                  isHighlighted: X,
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
                    nameplate: q,
                    isHighlighted: X,
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
                    nameplate: q,
                    isHighlighted: X,
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
      }), Y && et, !Y && !M && ei]
    }), D ? F === w.lr.WISHLIST ? (0, l.jsx)("div", {
      className: R.itemIcon,
      children: (0, l.jsx)(d.u, {
        text: j.intl.formatToPlainString(j.t.p3RmJC, {
          username: x.ZP.getName(i)
        }),
        position: "top",
        children: (0, l.jsx)(h.h_8, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          colorClass: R.itemIconHeart
        })
      })
    }) : F === w.lr.POPULAR ? (0, l.jsx)("div", {
      className: R.itemIcon,
      children: (0, l.jsx)(d.u, {
        text: j.intl.string(j.t.Ig6VDA),
        position: "top",
        children: (0, l.jsx)(h.EOn, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          colorClass: R.itemIconShop
        })
      })
    }) : null : null, U && (0, l.jsx)(y.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: R.removeItemButton
    })]
  })
}