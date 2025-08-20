/** Chunk was on 7318 **/
/** chunk id: 369509, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  S: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk172751 = require("./172751.jsx"),
  Chunk510918 = require("./510918.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk215486 = require("./215486.js");

function a(A) {
  let e = null === A.tag || 0 === A.tag.length ? "WUMP" : A.tag;
  return (0, n.jsx)("div", {
    className: s.badgeContainer,
    children: (0, n.jsx)(r.m0, {
      guildId: A.guildId,
      textClassName: s.tagText,
      guildTag: e,
      guildBadge: "string" == typeof A.badge ? A.badge : (0, n.jsx)(l.v, {
        className: s.badgePreview,
        badge: A.badge,
        width: i.Gg.SIZE_12,
        height: i.Gg.SIZE_12,
        primaryTintColor: A.primaryColor,
        secondaryTintColor: A.secondaryColor
      })
    })
  })
}