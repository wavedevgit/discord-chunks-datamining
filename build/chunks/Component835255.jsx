/** Chunk was on 74477 **/
/** chunk id: 835255, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
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
  Chunk988388 = require("./988388.js");

function y(e) {
  let {
    item: t,
    profileOwner: r,
    wishlistId: y,
    isOwner: O
  } = e, j = i.useRef(null), x = (0, o.Z)(j), P = t.collectiblesItem, {
    analyticsLocations: S
  } = (0, u.ZP)();
  return (0, n.jsxs)("div", {
    className: b.container,
    children: [(0, n.jsx)(s.ua7, {
      text: t.skuName,
      children: e => {
        var i, o;
        return (0, n.jsx)(s.P3F, (i = function(e) {
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
        }({}, e), o = o = {
          className: b.card,
          innerRef: j,
          onClick: () => {
            O ? ((0, s.pTH)(), (0, d.mK)({
              analyticsLocations: S,
              analyticsSource: c.Z.USER_PROFILE_WISHLIST,
              openInLayer: false,
              initialProductSkuId: t.skuId
            })) : (0, h.Z)({
              skuId: t.skuId,
              isGift: true,
              giftingOrigin: v.Wt.USER_PROFILE_WISHLIST,
              analyticsLocations: S,
              giftRecipient: r,
              variantsReturnStyle: a.v.VARIANTS_GROUP
            })
          },
          "aria-label": t.skuName,
          children: (0, n.jsx)("div", {
            className: b.cardPreview,
            children: (() => {
              switch (P.type) {
                case l.Z.PROFILE_EFFECT:
                  return (0, n.jsx)("div", {
                    className: b.profileEffectPreview,
                    children: (0, n.jsx)(p.Z, {
                      profileEffectId: P.id,
                      isHovering: x,
                      isPurchased: false,
                      removeSetHeight: true
                    })
                  });
                case l.Z.AVATAR_DECORATION:
                  return (0, n.jsx)("div", {
                    className: b.avatarDecorationPreview,
                    children: (0, n.jsx)(f.R, {
                      item: P,
                      user: r,
                      isHighlighted: x,
                      isPurchased: false,
                      avatarSize: s.EFr.SIZE_80
                    })
                  });
                case l.Z.NAMEPLATE:
                  return (0, n.jsxs)("div", {
                    className: b.nameplatePreview,
                    children: [(0, n.jsx)("div", {
                      className: b.nameplateTopLeft,
                      children: (0, n.jsx)(g.Z, {
                        user: r,
                        nameplate: P,
                        isHighlighted: x,
                        showPlaceholderUser: true,
                        showStatus: true,
                        isPurchased: false,
                        nameplatePreviewSize: "default",
                        width: 200
                      })
                    }), (0, n.jsx)("div", {
                      className: b.nameplateBottomRight,
                      children: (0, n.jsx)(g.Z, {
                        user: r,
                        nameplate: P,
                        isHighlighted: x,
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
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
      }
    }), O && (0, n.jsx)(m.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: y,
      className: b.removeItemButton
    })]
  })
}