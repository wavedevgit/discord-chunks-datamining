/** Chunk was on 96413 **/
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
    surface: f = c.Y.PROFILE_MODAL
  } = e, h = t.collectiblesItem;
  switch (h.type) {
    case s.Z.PROFILE_EFFECT:
      return (0, i.jsx)("div", {
        className: u.profileEffectPreview,
        children: (0, i.jsx)(o.Z, {
          skuId: h.skuId,
          isHighlighted: d,
          isPurchased: false,
          removeSetHeight: true
        })
      });
    case s.Z.AVATAR_DECORATION:
      return (0, i.jsx)("div", {
        className: u.avatarDecorationPreview,
        children: (0, i.jsx)(l.R, {
          item: h,
          user: r,
          isHighlighted: d,
          isPurchased: false,
          avatarSize: a.EFr.SIZE_80
        })
      });
    case s.Z.NAMEPLATE:
      return (0, i.jsxs)("div", {
        className: u.nameplatePreview,
        children: [(0, i.jsx)("div", {
          className: u.nameplateTopLeft,
          children: (0, i.jsx)(n.Z, {
            user: r,
            nameplate: h,
            isHighlighted: d,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: f === c.Y.GIFTING_FLOW ? 136 : 200
          })
        }), (0, i.jsx)("div", {
          className: u.nameplateBottomRight,
          "aria-hidden": true,
          children: (0, i.jsx)(n.Z, {
            user: r,
            nameplate: h,
            isHighlighted: d,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: f === c.Y.GIFTING_FLOW ? 136 : 200
          })
        })]
      });
    default:
      return null
  }
}