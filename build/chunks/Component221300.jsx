/** Chunk was on 93582 **/
/** chunk id: 221300, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
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

function u(e) {
  let {
    item: i,
    profileOwner: t,
    isHighlighted: u,
    surface: m = c.Y.PROFILE_MODAL
  } = e, h = i.collectiblesItem;
  switch (h.type) {
    case r.Z.PROFILE_EFFECT:
      return (0, n.jsx)("div", {
        className: d.profileEffectPreview,
        children: (0, n.jsx)(o.Z, {
          skuId: h.skuId,
          isHighlighted: u,
          isPurchased: false,
          removeSetHeight: true
        })
      });
    case r.Z.AVATAR_DECORATION:
      return (0, n.jsx)("div", {
        className: d.avatarDecorationPreview,
        children: (0, n.jsx)(a.R, {
          item: h,
          user: t,
          isHighlighted: u,
          isPurchased: false,
          avatarSize: s.EFr.SIZE_80
        })
      });
    case r.Z.NAMEPLATE:
      return (0, n.jsxs)("div", {
        className: d.nameplatePreview,
        children: [(0, n.jsx)("div", {
          className: d.nameplateTopLeft,
          children: (0, n.jsx)(l.Z, {
            user: t,
            nameplate: h,
            isHighlighted: u,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: m === c.Y.GIFTING_FLOW ? 136 : 200
          })
        }), (0, n.jsx)("div", {
          className: d.nameplateBottomRight,
          "aria-hidden": true,
          children: (0, n.jsx)(l.Z, {
            user: t,
            nameplate: h,
            isHighlighted: u,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: m === c.Y.GIFTING_FLOW ? 136 : 200
          })
        })]
      });
    default:
      return null
  }
}