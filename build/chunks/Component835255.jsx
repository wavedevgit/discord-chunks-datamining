/** Chunk was on 49902 **/
/** chunk id: 835255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
  Chunk474936 = require("./474936.js"),
  Chunk988388 = require("./988388.js");

function m(e) {
  let {
    item: t,
    user: n,
    profileOwner: m
  } = e, v = i.useRef(null), b = (0, s.Z)(v), y = t.collectiblesItem, {
    analyticsLocations: j
  } = (0, c.ZP)(), O = y.type === l.Z.PROFILE_EFFECT ? y.title : y.label;
  return (0, r.jsx)(o.kL8, {
    className: p.card,
    ref: v,
    onClick: () => {
      (0, f.Z)({
        skuId: t.skuId,
        isGift: true,
        giftingOrigin: h.Wt.USER_PROFILE_WISHLIST,
        analyticsLocations: j,
        giftRecipient: m,
        variantsReturnStyle: a.v.VARIANTS_GROUP
      })
    },
    "aria-label": O,
    children: (0, r.jsx)("div", {
      className: p.cardPreview,
      children: (() => {
        switch (y.type) {
          case l.Z.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
              className: p.profileEffectPreview,
              children: (0, r.jsx)(g.Z, {
                profileEffectId: y.id,
                isHovering: b,
                isPurchased: false,
                removeSetHeight: true
              })
            });
          case l.Z.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
              className: p.avatarDecorationPreview,
              children: (0, r.jsx)(u.R, {
                item: y,
                user: n,
                isHighlighted: b,
                isPurchased: false,
                avatarSize: o.EFr.SIZE_80
              })
            });
          case l.Z.NAMEPLATE:
            return (0, r.jsxs)("div", {
              className: p.nameplatePreview,
              children: [(0, r.jsx)("div", {
                className: p.nameplateTopLeft,
                children: (0, r.jsx)(d.Z, {
                  user: n,
                  nameplate: y,
                  isHighlighted: b,
                  showPlaceholderUser: true,
                  showStatus: true,
                  isPurchased: false,
                  nameplatePreviewSize: "default",
                  width: 200
                })
              }), (0, r.jsx)("div", {
                className: p.nameplateBottomRight,
                children: (0, r.jsx)(d.Z, {
                  user: n,
                  nameplate: y,
                  isHighlighted: b,
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
  })
}