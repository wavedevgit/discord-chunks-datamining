/** Chunk was on web.js **/
/** chunk id: 221300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
let d = 136,
  f = 200;

function p(e) {
  let {
    item: t,
    profileOwner: n,
    isHighlighted: p,
    cardSize: _ = c.U.MEDIUM
  } = e, m = t.collectiblesItem;
  switch (m.type) {
    case i.Z.PROFILE_EFFECT:
      return (0, r.jsx)("div", {
        className: u.profileEffectPreview,
        children: (0, r.jsx)(l.Z, {
          skuId: m.skuId,
          isHighlighted: p,
          isPurchased: false,
          removeSetHeight: true
        })
      });
    case i.Z.AVATAR_DECORATION:
      return (0, r.jsx)("div", {
        className: u.avatarDecorationPreview,
        children: (0, r.jsx)(o.R, {
          item: m,
          user: n,
          isHighlighted: p,
          isPurchased: false,
          avatarSize: a.EFr.SIZE_80
        })
      });
    case i.Z.NAMEPLATE:
      return (0, r.jsxs)("div", {
        className: u.nameplatePreview,
        children: [(0, r.jsx)("div", {
          className: u.nameplateTopLeft,
          children: (0, r.jsx)(s.Z, {
            user: n,
            nameplate: m,
            isHighlighted: p,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: _ === c.U.SMALL ? d : f
          })
        }), (0, r.jsx)("div", {
          className: u.nameplateBottomRight,
          "aria-hidden": true,
          children: (0, r.jsx)(s.Z, {
            user: n,
            nameplate: m,
            isHighlighted: p,
            showPlaceholderUser: true,
            showStatus: true,
            isPurchased: false,
            nameplatePreviewSize: "default",
            width: _ === c.U.SMALL ? d : f
          })
        })]
      });
    default:
      return null
  }
}