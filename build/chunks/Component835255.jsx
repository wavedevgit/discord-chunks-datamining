/** Chunk was on 74477 **/
/** chunk id: 835255, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk461631 = require("./461631.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk988388 = require("./988388.js");

function O(e) {
  let {
    item: t,
    profileOwner: r,
    wishlistId: O,
    isOwner: j
  } = e, x = i.useRef(null), P = (0, o.Z)(x), S = t.collectiblesItem, {
    analyticsLocations: I
  } = (0, u.ZP)(), w = () => {
    j ? ((0, s.pTH)(), (0, d.mK)({
      analyticsLocations: I,
      analyticsSource: c.Z.USER_PROFILE_WISHLIST,
      openInLayer: false,
      initialProductSkuId: t.skuId
    })) : (0, h.Z)({
      skuId: t.skuId,
      isGift: true,
      giftingOrigin: v.Wt.USER_PROFILE_WISHLIST,
      analyticsLocations: I,
      giftRecipient: r,
      variantsReturnStyle: a.v.VARIANTS_GROUP
    })
  };
  return (0, n.jsxs)("div", {
    className: y.container,
    children: [(0, n.jsx)(s.ua7, {
      text: t.skuName,
      children: e => {
        var i, a;
        return (0, n.jsxs)(s.P3F, (i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, e), a = a = {
          className: y.card,
          innerRef: x,
          onClick: w,
          "aria-label": t.skuName,
          children: [(0, n.jsx)("div", {
            className: y.cardPreview,
            children: (() => {
              switch (S.type) {
                case l.Z.PROFILE_EFFECT:
                  return (0, n.jsx)("div", {
                    className: y.profileEffectPreview,
                    children: (0, n.jsx)(p.Z, {
                      profileEffectId: S.id,
                      isHovering: P,
                      isPurchased: false,
                      removeSetHeight: true
                    })
                  });
                case l.Z.AVATAR_DECORATION:
                  return (0, n.jsx)("div", {
                    className: y.avatarDecorationPreview,
                    children: (0, n.jsx)(f.R, {
                      item: S,
                      user: r,
                      isHighlighted: P,
                      isPurchased: false,
                      avatarSize: s.EFr.SIZE_80
                    })
                  });
                case l.Z.NAMEPLATE:
                  return (0, n.jsxs)("div", {
                    className: y.nameplatePreview,
                    children: [(0, n.jsx)("div", {
                      className: y.nameplateTopLeft,
                      children: (0, n.jsx)(g.Z, {
                        user: r,
                        nameplate: S,
                        isHighlighted: P,
                        showPlaceholderUser: true,
                        showStatus: true,
                        isPurchased: false,
                        nameplatePreviewSize: "default",
                        width: 200
                      })
                    }), (0, n.jsx)("div", {
                      className: y.nameplateBottomRight,
                      children: (0, n.jsx)(g.Z, {
                        user: r,
                        nameplate: S,
                        isHighlighted: P,
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
          }), P && (0, n.jsx)("div", {
            className: y.overlay,
            children: (0, n.jsx)(s.zxk, {
              variant: "primary",
              size: "sm",
              text: b.intl.string(j ? b.t.FdGl5O : b.t.ilhtIS),
              icon: j ? true : s.OgN,
              onClick: e => {
                e.stopPropagation(), w()
              },
              fullWidth: true
            })
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }), i))
      }
    }), j && (0, n.jsx)(m.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: O,
      className: y.removeItemButton
    })]
  })
}