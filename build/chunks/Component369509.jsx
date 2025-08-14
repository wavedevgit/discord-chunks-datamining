/** Chunk was on 87137 **/
/** chunk id: 369509, original params: A,t,e (module,exports,require) **/
require.d(exports, {
  S: () => B
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk172751 = require("./172751.jsx"),
  Chunk510918 = require("./510918.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk215486 = require("./215486.js");

function B(A) {
  let t = null === A.tag || 0 === A.tag.length ? "WUMP" : A.tag;
  return (0, r.jsx)("div", {
    className: f.badgeContainer,
    children: (0, r.jsx)(g.m0, {
      guildId: A.guildId,
      textClassName: f.tagText,
      guildTag: t,
      guildBadge: "string" == typeof A.badge ? A.badge : (0, r.jsx)(v.v, {
        className: f.badgePreview,
        badge: A.badge,
        width: n.Gg.SIZE_12,
        height: n.Gg.SIZE_12,
        primaryTintColor: A.primaryColor,
        secondaryTintColor: A.secondaryColor
      })
    })
  })
}