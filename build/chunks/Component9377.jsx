/** Chunk was on 76692 **/
/** chunk id: 9377, original params: A,t,g (module,exports,require) **/
require.d(exports, {
  S: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk172751 = require("./172751.jsx"),
  Chunk510918 = require("./510918.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk783385 = require("./783385.js");

function h(A) {
  let t = null === A.tag || 0 === A.tag.length ? "WUMP" : A.tag;
  return (0, v.jsx)("div", {
    className: B.badgeContainer,
    children: (0, v.jsx)(e.m0, {
      guildId: A.guildId,
      textClassName: B.tagText,
      guildTag: t,
      guildBadge: "string" == typeof A.badge ? A.badge : (0, v.jsx)(r.v, {
        className: B.badgePreview,
        badge: A.badge,
        width: f.Gg.SIZE_12,
        height: f.Gg.SIZE_12,
        primaryTintColor: A.primaryColor,
        secondaryTintColor: A.secondaryColor
      })
    })
  })
}