/** Chunk was on 96413 **/
/** chunk id: 221300, original params: e,t,r (module,exports,require) **/
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
  Chunk988388 = require("./988388.js");

function u(e) {
  let {
    item: t,
    profileOwner: r,
    isHighlighted: u,
    surface: f = c.Y.PROFILE_MODAL
  } = e, p = t.collectiblesItem;
  switch (p.type) {
    case s.Z.PROFILE_EFFECT:
      return (0, i.jsx)("div", {
        className: d.profileEffectPreview,
        children: (0, i.jsx)(o.Z, {
          skuId: p.skuId,
          isHighlighted: u,
          isPurchased: false,
          removeSetHeight: true
        })
      });
    case s.Z.AVATAR_DECORATION:
      return (0, i.jsx)("div", {
        className: d.avatarDecorationPreview,
        children: (0, i.jsx)(l.R, {
          item: p,
          user: r,
          isHighlighted: u,
          isPurchased: false,
          avatarSize: a.EFr.SIZE_80
        })
      });
    case s.Z.NAMEPLATE:
      return (0, i.jsxs)("div", {
        className: d.nameplatePreview,
        children: [(0, i.jsx)("div", {
          className: d.nameplateTopLeft,
          children: (0, i.jsx)(n.Z, {
            user: r,
            nameplate: p,
            isHighlighted: u,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: f === c.Y.GIFTING_FLOW ? 136 : 200
          })
        }), (0, i.jsx)("div", {
          className: d.nameplateBottomRight,
          "aria-hidden": true,
          children: (0, i.jsx)(n.Z, {
            user: r,
            nameplate: p,
            isHighlighted: u,
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