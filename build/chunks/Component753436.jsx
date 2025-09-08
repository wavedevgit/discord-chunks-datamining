/** Chunk was on 1267 **/
/** chunk id: 753436, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => p
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
  Chunk932366 = require("./932366.js"),
  Chunk133458 = require("./133458.js");

function p(e) {
  let {
    game: t,
    userId: r,
    widgetType: i,
    guildId: p,
    channelId: O,
    disableInteraction: y = false
  } = e, j = (0, d.Z)(t.applicationId), m = j.length > 0, v = o.default.getCurrentUser(), x = (null == v ? true : v.id) === r;
  return (0, a.kO)(t.applicationId) ? (0, n.jsx)("div", {
    className: f.loadingCover
  }) : (0, n.jsxs)("div", {
    className: b.container,
    children: [(0, n.jsx)(s.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: r,
      disableInteraction: y,
      className: l()(m ? b.socialProofBackdrop : true, (null == t ? true : t.imageSrc) == null || y ? true : f.hoverActiveEffect)
    }), !y && x && (0, n.jsx)(u.Z, {
      game: t,
      widgetType: i,
      className: b.removeGameButton,
      iconSize: "xs"
    }), !y && m && (0, n.jsx)(c.Z, {
      label: g.intl.formatToPlainString(g.t.ujhJdH, {
        numFriends: j.length
      }),
      className: b.socialProof,
      users: j,
      guildId: p,
      channelId: O,
      visuallyHideLabel: true
    })]
  })
}