/** Chunk was on 46592 **/
/** chunk id: 753436, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk594174 = require("./594174.js"),
  Chunk747101 = require("./747101.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk279280 = require("./279280.js"),
  Chunk436136 = require("./436136.js");

function p(e) {
  let {
    game: t,
    userId: r,
    widgetType: i,
    guildId: p,
    channelId: b,
    disableInteraction: m = false
  } = e, O = (0, d.Z)(t.applicationId).length > 0, y = o.default.getCurrentUser(), j = (null == y ? true : y.id) === r;
  return (0, l.kO)(t.applicationId) ? (0, n.jsx)("div", {
    className: f.loadingCover
  }) : (0, n.jsxs)("div", {
    className: g.container,
    children: [(0, n.jsx)(c.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: r,
      disableInteraction: m,
      className: a()(O ? g.socialProofBackdrop : true, (null == t ? true : t.imageSrc) == null || m ? true : f.hoverActiveEffect)
    }), !m && j && (0, n.jsx)(s.Z, {
      game: t,
      widgetType: i,
      className: g.removeGameButton,
      iconSize: "xs"
    }), !m && (0, n.jsx)(u.Z, {
      className: g.socialProof,
      applicationId: t.applicationId,
      guildId: p,
      channelId: b,
      visuallyHideLabel: true
    })]
  })
}