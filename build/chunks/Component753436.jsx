/** Chunk was on 61149 **/
/** chunk id: 753436, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk594174 = require("./594174.js"),
  Chunk971082 = require("./971082.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk133458 = require("./133458.js");

function b(e) {
  let {
    game: t,
    userId: r,
    widgetType: a,
    guildId: b,
    channelId: p,
    loading: m = false,
    disableInteraction: y = false
  } = e, O = (0, u.Z)(t.applicationId), j = O.length > 0, v = i.default.getCurrentUser(), x = (null == v ? true : v.id) === r;
  return m ? (0, n.jsx)("div", {
    className: f.loadingCover
  }) : (0, n.jsxs)("div", {
    className: g.container,
    children: [(0, n.jsx)(c.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: r,
      disableInteraction: y,
      className: o()(j ? g.socialProofBackdrop : true, (null == t ? true : t.imageSrc) == null || y ? true : f.hoverActiveEffect)
    }), !y && x && (0, n.jsx)(s.Z, {
      game: t,
      widgetType: a,
      className: g.removeGameButton,
      iconSize: "xs"
    }), !y && j && (0, n.jsx)(l.Z, {
      label: d.intl.formatToPlainString(d.t.ujhJdH, {
        numFriends: O.length
      }),
      className: g.socialProof,
      users: O,
      guildId: b,
      channelId: p,
      visuallyHideLabel: true
    })]
  })
}