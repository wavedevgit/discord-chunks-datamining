/** Chunk was on 74449 **/
/** chunk id: 753436, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk594174 = require("./594174.js"),
  Chunk747101 = require("./747101.js"),
  Chunk971082 = require("./971082.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk279280 = require("./279280.js"),
  Chunk436136 = require("./436136.js");

function g(e) {
  let {
    game: t,
    userId: r,
    widgetType: i,
    guildId: g,
    channelId: O,
    disableInteraction: y = false
  } = e, j = (0, d.Z)(t.applicationId), m = j.length > 0, v = o.default.getCurrentUser(), h = (null == v ? true : v.id) === r;
  return (0, a.kO)(t.applicationId) ? (0, n.jsx)("div", {
    className: b.loadingCover
  }) : (0, n.jsxs)("div", {
    className: p.container,
    children: [(0, n.jsx)(s.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: r,
      disableInteraction: y,
      className: l()(m ? p.socialProofBackdrop : true, (null == t ? true : t.imageSrc) == null || y ? true : b.hoverActiveEffect)
    }), !y && h && (0, n.jsx)(u.Z, {
      game: t,
      widgetType: i,
      className: p.removeGameButton,
      iconSize: "xs"
    }), !y && m && (0, n.jsx)(c.Z, {
      label: f.intl.formatToPlainString(f.t.ujhJdH, {
        numFriends: j.length
      }),
      className: p.socialProof,
      users: j,
      guildId: g,
      channelId: O,
      visuallyHideLabel: true
    })]
  })
}