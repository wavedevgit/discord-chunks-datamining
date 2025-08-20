/** Chunk was on 27069 **/
/** chunk id: 753436, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk594174 = require("./594174.js"),
  Chunk971082 = require("./971082.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk133458 = require("./133458.js");

function f(e) {
  let {
    game: t,
    userId: r,
    widgetType: f,
    guildId: g,
    channelId: b,
    loading: p = false,
    disableInteraction: O = false
  } = e, m = (0, c.Z)(t.applicationId), j = m.length > 0, y = l.default.getCurrentUser(), v = (null == y ? true : y.id) === r;
  return p ? (0, n.jsx)("div", {
    className: u.loadingCover
  }) : (0, n.jsxs)("div", {
    className: d.container,
    children: [(0, n.jsx)(a.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: r,
      disableInteraction: O,
      className: j ? d.socialProofBackdrop : true
    }), !O && v && (0, n.jsx)(o.Z, {
      game: t,
      widgetType: f,
      className: d.removeGameButton,
      iconSize: "xs"
    }), !O && j && (0, n.jsx)(i.Z, {
      label: s.intl.formatToPlainString(s.t.ujhJdH, {
        numFriends: m.length
      }),
      className: d.socialProof,
      users: m,
      guildId: g,
      channelId: b,
      visuallyHideLabel: true
    })]
  })
}