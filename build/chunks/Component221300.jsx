/** Chunk was on 57553 **/
/** chunk id: 221300, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk688192 = require("./688192.jsx"),
  Chunk988388 = require("./988388.js");

function u(e) {
  let {
    item: t,
    profileOwner: r,
    isHighlighted: u,
    cardSize: f = l.U.MEDIUM
  } = e, v = t.collectiblesItem;
  switch (v.type) {
    case a.Z.PROFILE_EFFECT:
      return (0, i.jsx)("div", {
        className: d.profileEffectPreview,
        children: (0, i.jsx)(c.Z, {
          skuId: v.skuId,
          isHighlighted: u,
          isPurchased: false,
          removeSetHeight: true
        })
      });
    case a.Z.AVATAR_DECORATION:
      return (0, i.jsx)("div", {
        className: d.avatarDecorationPreview,
        children: (0, i.jsx)(s.R, {
          item: v,
          user: r,
          isHighlighted: u,
          isPurchased: false,
          avatarSize: n.EFr.SIZE_80
        })
      });
    case a.Z.NAMEPLATE:
      return (0, i.jsxs)("div", {
        className: d.nameplatePreview,
        children: [(0, i.jsx)("div", {
          className: d.nameplateTopLeft,
          children: (0, i.jsx)(o.Z, {
            user: r,
            nameplate: v,
            isHighlighted: u,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: f === l.U.SMALL ? 136 : 200
          })
        }), (0, i.jsx)("div", {
          className: d.nameplateBottomRight,
          "aria-hidden": true,
          children: (0, i.jsx)(o.Z, {
            user: r,
            nameplate: v,
            isHighlighted: u,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: f === l.U.SMALL ? 136 : 200
          })
        })]
      });
    default:
      return null
  }
}