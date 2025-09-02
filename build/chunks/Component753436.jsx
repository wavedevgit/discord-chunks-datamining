/** Chunk was on 61149 **/
/** chunk id: 753436, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    widgetType: i,
    guildId: b,
    channelId: p,
    loading: m = false,
    disableInteraction: O = false
  } = e, y = (0, u.Z)(t.applicationId), j = y.length > 0, x = o.default.getCurrentUser(), v = (null == x ? true : x.id) === r;
  return m ? (0, n.jsx)("div", {
    className: f.loadingCover
  }) : (0, n.jsxs)("div", {
    className: g.container,
    children: [(0, n.jsx)(c.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: r,
      disableInteraction: O,
      className: a()(j ? g.socialProofBackdrop : true, (null == t ? true : t.imageSrc) == null || O ? true : f.hoverActiveEffect)
    }), !O && v && (0, n.jsx)(s.Z, {
      game: t,
      widgetType: i,
      className: g.removeGameButton,
      iconSize: "xs"
    }), !O && j && (0, n.jsx)(l.Z, {
      label: d.intl.formatToPlainString(d.t.ujhJdH, {
        numFriends: y.length
      }),
      className: g.socialProof,
      users: y,
      guildId: b,
      channelId: p,
      visuallyHideLabel: true
    })]
  })
}