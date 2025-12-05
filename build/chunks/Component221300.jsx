/** Chunk was on 84608 **/
/** chunk id: 221300, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk688192 = require("./688192.jsx"),
  Chunk232644 = require("./232644.js");

function d(e) {
  let {
    item: t,
    profileOwner: r,
    isHighlighted: d,
    cardSize: v = c.U.MEDIUM
  } = e, f = t.collectiblesItem;
  switch (f.type) {
    case n.Z.PROFILE_EFFECT:
      return (0, i.jsx)("div", {
        className: u.profileEffectPreview,
        children: (0, i.jsx)(o.Z, {
          skuId: f.skuId,
          isHighlighted: d,
          isPurchased: false,
          removeSetHeight: true
        })
      });
    case n.Z.AVATAR_DECORATION:
      return (0, i.jsx)("div", {
        className: u.avatarDecorationPreview,
        children: (0, i.jsx)(s.R, {
          item: f,
          user: r,
          isHighlighted: d,
          isPurchased: false,
          avatarSize: a.EFr.SIZE_80
        })
      });
    case n.Z.NAMEPLATE:
      return (0, i.jsxs)("div", {
        className: u.nameplatePreview,
        children: [(0, i.jsx)("div", {
          className: u.nameplateTopLeft,
          children: (0, i.jsx)(l.Z, {
            user: r,
            nameplate: f,
            isHighlighted: d,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: v === c.U.SMALL ? 136 : 200
          })
        }), (0, i.jsx)("div", {
          className: u.nameplateBottomRight,
          "aria-hidden": true,
          children: (0, i.jsx)(l.Z, {
            user: r,
            nameplate: f,
            isHighlighted: d,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: v === c.U.SMALL ? 136 : 200
          })
        })]
      });
    default:
      return null
  }
}