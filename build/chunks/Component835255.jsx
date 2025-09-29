/** Chunk was on 74477 **/
/** chunk id: 835255, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk461631 = require("./461631.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk988388 = require("./988388.js");

function v(e) {
  let {
    item: t,
    profileOwner: r,
    wishlistId: v,
    canEdit: b
  } = e, y = i.useRef(null), j = (0, o.Z)(y), O = t.collectiblesItem, {
    analyticsLocations: x
  } = (0, c.ZP)();
  return (0, n.jsxs)("div", {
    className: m.container,
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
          className: m.card,
          innerRef: y,
          onClick: () => {
            (0, f.Z)({
              skuId: t.skuId,
              isGift: true,
              giftingOrigin: p.Wt.USER_PROFILE_WISHLIST,
              analyticsLocations: x,
              giftRecipient: r,
              variantsReturnStyle: a.v.VARIANTS_GROUP
            })
          },
          "aria-label": t.skuName,
          children: (0, n.jsx)("div", {
            className: m.cardPreview,
            children: (() => {
              switch (O.type) {
                case l.Z.PROFILE_EFFECT:
                  return (0, n.jsx)("div", {
                    className: m.profileEffectPreview,
                    children: (0, n.jsx)(g.Z, {
                      profileEffectId: O.id,
                      isHovering: j,
                      isPurchased: false,
                      removeSetHeight: true
                    })
                  });
                case l.Z.AVATAR_DECORATION:
                  return (0, n.jsx)("div", {
                    className: m.avatarDecorationPreview,
                    children: (0, n.jsx)(u.R, {
                      item: O,
                      user: r,
                      isHighlighted: j,
                      isPurchased: false,
                      avatarSize: s.EFr.SIZE_80
                    })
                  });
                case l.Z.NAMEPLATE:
                  return (0, n.jsxs)("div", {
                    className: m.nameplatePreview,
                    children: [(0, n.jsx)("div", {
                      className: m.nameplateTopLeft,
                      children: (0, n.jsx)(d.Z, {
                        user: r,
                        nameplate: O,
                        isHighlighted: j,
                        showPlaceholderUser: true,
                        showStatus: true,
                        isPurchased: false,
                        nameplatePreviewSize: "default",
                        width: 200
                      })
                    }), (0, n.jsx)("div", {
                      className: m.nameplateBottomRight,
                      children: (0, n.jsx)(d.Z, {
                        user: r,
                        nameplate: O,
                        isHighlighted: j,
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
    }), b && (0, n.jsx)(h.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: v,
      className: m.removeItemButton
    })]
  })
}