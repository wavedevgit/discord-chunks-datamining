/** Chunk was on 12756 **/
/** chunk id: 753436, original params: e,t,n (module,exports,require) **/
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
    userId: n,
    widgetType: f,
    guildId: p,
    channelId: m,
    loading: g = false,
    disableInteraction: b = false
  } = e, j = (0, c.Z)(t.applicationId), y = j.length > 0, O = i.default.getCurrentUser(), h = (null == O ? true : O.id) === n;
  return g ? (0, r.jsx)("div", {
    className: d.loadingCover
  }) : (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)(o.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: n,
      disableInteraction: b,
      className: y ? u.socialProofBackdrop : true
    }), !b && h && (0, r.jsx)(a.Z, {
      game: t,
      widgetType: f,
      className: u.removeGameButton,
      iconSize: "xs"
    }), !b && y && (0, r.jsx)(l.Z, {
      label: s.intl.formatToPlainString(s.t.ujhJdH, {
        numFriends: j.length
      }),
      className: u.socialProof,
      users: j,
      guildId: p,
      channelId: m,
      visuallyHideLabel: true
    })]
  })
}