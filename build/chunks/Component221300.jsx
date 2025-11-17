/** Chunk was on 65354 **/
/** chunk id: 221300, original params: e,t,n (module,exports,require) **/
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
    profileOwner: n,
    isHighlighted: d,
    cardSize: p = c.U.MEDIUM
  } = e, f = t.collectiblesItem;
  switch (f.type) {
    case i.Z.PROFILE_EFFECT:
      return (0, r.jsx)("div", {
        className: u.profileEffectPreview,
        children: (0, r.jsx)(s.Z, {
          skuId: f.skuId,
          isHighlighted: d,
          isPurchased: false,
          removeSetHeight: true
        })
      });
    case i.Z.AVATAR_DECORATION:
      return (0, r.jsx)("div", {
        className: u.avatarDecorationPreview,
        children: (0, r.jsx)(o.R, {
          item: f,
          user: n,
          isHighlighted: d,
          isPurchased: false,
          avatarSize: l.EFr.SIZE_80
        })
      });
    case i.Z.NAMEPLATE:
      return (0, r.jsxs)("div", {
        className: u.nameplatePreview,
        children: [(0, r.jsx)("div", {
          className: u.nameplateTopLeft,
          children: (0, r.jsx)(a.Z, {
            user: n,
            nameplate: f,
            isHighlighted: d,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: p === c.U.SMALL ? 136 : 200
          })
        }), (0, r.jsx)("div", {
          className: u.nameplateBottomRight,
          "aria-hidden": true,
          children: (0, r.jsx)(a.Z, {
            user: n,
            nameplate: f,
            isHighlighted: d,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: p === c.U.SMALL ? 136 : 200
          })
        })]
      });
    default:
      return null
  }
}