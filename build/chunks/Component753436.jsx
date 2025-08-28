/** Chunk was on 83789 **/
/** chunk id: 753436, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk594174 = require("./594174.js"),
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
    channelId: b,
    loading: m = false,
    disableInteraction: O = false
  } = e, j = (0, u.Z)(t.applicationId), y = j.length > 0, x = a.default.getCurrentUser(), v = (null == x ? true : x.id) === r;
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
      className: l()(y ? g.socialProofBackdrop : true, (null == t ? true : t.imageSrc) == null || O ? true : f.hoverActiveEffect)
    }), !O && v && (0, n.jsx)(s.Z, {
      game: t,
      widgetType: i,
      className: g.removeGameButton,
      iconSize: "xs"
    }), !O && y && (0, n.jsx)(o.Z, {
      label: d.intl.formatToPlainString(d.t.ujhJdH, {
        numFriends: j.length
      }),
      className: g.socialProof,
      users: j,
      guildId: p,
      channelId: b,
      visuallyHideLabel: true
    })]
  })
}