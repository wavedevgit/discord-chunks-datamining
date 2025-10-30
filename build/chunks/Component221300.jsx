/** Chunk was on 94758 **/
/** chunk id: 221300, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    surface: f = o.Y.PROFILE_MODAL
  } = e, m = t.collectiblesItem;
  switch (m.type) {
    case i.Z.PROFILE_EFFECT:
      return (0, n.jsx)("div", {
        className: u.profileEffectPreview,
        children: (0, n.jsx)(c.Z, {
          skuId: m.skuId,
          isHighlighted: d,
          isPurchased: false,
          removeSetHeight: true
        })
      });
    case i.Z.AVATAR_DECORATION:
      return (0, n.jsx)("div", {
        className: u.avatarDecorationPreview,
        children: (0, n.jsx)(s.R, {
          item: m,
          user: r,
          isHighlighted: d,
          isPurchased: false,
          avatarSize: l.EFr.SIZE_80
        })
      });
    case i.Z.NAMEPLATE:
      return (0, n.jsxs)("div", {
        className: u.nameplatePreview,
        children: [(0, n.jsx)("div", {
          className: u.nameplateTopLeft,
          children: (0, n.jsx)(a.Z, {
            user: r,
            nameplate: m,
            isHighlighted: d,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: f === o.Y.GIFTING_FLOW ? 136 : 200
          })
        }), (0, n.jsx)("div", {
          className: u.nameplateBottomRight,
          "aria-hidden": true,
          children: (0, n.jsx)(a.Z, {
            user: r,
            nameplate: m,
            isHighlighted: d,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: f === o.Y.GIFTING_FLOW ? 136 : 200
          })
        })]
      });
    default:
      return null
  }
}