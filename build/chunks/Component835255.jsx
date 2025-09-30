/** Chunk was on 49902 **/
/** chunk id: 835255, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk221292 = require("./221292.js"),
  Chunk461631 = require("./461631.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk232644 = require("./232644.js");

function x(e) {
  let {
    item: t,
    profileOwner: r,
    wishlistId: x,
    isOwner: P
  } = e, S = i.useRef(null), I = (0, o.Z)(S), w = t.collectiblesItem, {
    analyticsLocations: E
  } = (0, u.ZP)(), C = () => {
    (0, m.Er)({
      wishlistId: x,
      action: b.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: E
    }), P ? ((0, s.pTH)(), (0, d.mK)({
      analyticsLocations: E,
      analyticsSource: c.Z.USER_PROFILE_WISHLIST,
      openInLayer: false,
      initialProductSkuId: t.skuId
    })) : (0, h.Z)({
      skuId: t.skuId,
      isGift: true,
      giftingOrigin: y.Wt.USER_PROFILE_WISHLIST,
      analyticsLocations: E,
      giftRecipient: r,
      variantsReturnStyle: a.v.VARIANTS_GROUP
    })
  };
  return (0, n.jsxs)("div", {
    className: j.container,
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
          className: j.card,
          innerRef: S,
          onClick: C,
          "aria-label": t.skuName,
          children: [(0, n.jsx)("div", {
            className: j.cardPreview,
            children: (() => {
              switch (w.type) {
                case l.Z.PROFILE_EFFECT:
                  return (0, n.jsx)("div", {
                    className: j.profileEffectPreview,
                    children: (0, n.jsx)(p.Z, {
                      profileEffectId: w.id,
                      isHovering: I,
                      isPurchased: false,
                      removeSetHeight: true
                    })
                  });
                case l.Z.AVATAR_DECORATION:
                  return (0, n.jsx)("div", {
                    className: j.avatarDecorationPreview,
                    children: (0, n.jsx)(f.R, {
                      item: w,
                      user: r,
                      isHighlighted: I,
                      isPurchased: false,
                      avatarSize: s.EFr.SIZE_80
                    })
                  });
                case l.Z.NAMEPLATE:
                  return (0, n.jsxs)("div", {
                    className: j.nameplatePreview,
                    children: [(0, n.jsx)("div", {
                      className: j.nameplateTopLeft,
                      children: (0, n.jsx)(g.Z, {
                        user: r,
                        nameplate: w,
                        isHighlighted: I,
                        showPlaceholderUser: true,
                        showStatus: true,
                        isPurchased: false,
                        nameplatePreviewSize: "default",
                        width: 200
                      })
                    }), (0, n.jsx)("div", {
                      className: j.nameplateBottomRight,
                      children: (0, n.jsx)(g.Z, {
                        user: r,
                        nameplate: w,
                        isHighlighted: I,
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
          }), I && (0, n.jsx)("div", {
            className: j.overlay,
            children: (0, n.jsx)(s.zxk, {
              variant: "primary",
              size: "sm",
              text: O.intl.string(P ? O.t.FdGl5O : O.t.ilhtIS),
              icon: P ? true : s.OgN,
              onClick: e => {
                e.stopPropagation(), C()
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
    }), P && (0, n.jsx)(v.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: x,
      className: j.removeItemButton
    })]
  })
}