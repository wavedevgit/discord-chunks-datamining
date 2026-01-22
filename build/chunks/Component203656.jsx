/** Chunk was on 63379 **/
/** chunk id: 203656, original params: A,t,e (module,exports,require) **/
require.d(exports, {
  M: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk534400 = require("./534400.jsx"),
  Chunk81461 = require("./81461.jsx"),
  Chunk743981 = require("./743981.js"),
  Chunk197827 = require("./197827.js");

function h(A) {
  let t = null === A.tag || 0 === A.tag.length ? "WUMP" : A.tag;
  return (0, g.jsx)("div", {
    className: B.fC,
    children: (0, g.jsx)(r.o9, {
      guildId: A.guildId,
      textClassName: B.em,
      guildTag: t,
      guildBadge: "string" == typeof A.badge ? A.badge : (0, g.jsx)(v.J, {
        className: B.i6,
        badge: A.badge,
        width: f.Sl.SIZE_12,
        height: f.Sl.SIZE_12,
        primaryTintColor: A.primaryColor,
        secondaryTintColor: A.secondaryColor
      })
    })
  })
}