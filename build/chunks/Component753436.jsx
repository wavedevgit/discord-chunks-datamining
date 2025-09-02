/** Chunk was on 8188 **/
/** chunk id: 753436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => b
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

function b(e) {
  let {
    game: t,
    userId: n,
    widgetType: i,
    guildId: b,
    channelId: p,
    loading: m = false,
    disableInteraction: O = false
  } = e, j = (0, u.Z)(t.applicationId), y = j.length > 0, x = a.default.getCurrentUser(), v = (null == x ? true : x.id) === n;
  return m ? (0, r.jsx)("div", {
    className: f.loadingCover
  }) : (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(c.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: n,
      disableInteraction: O,
      className: l()(y ? g.socialProofBackdrop : true, (null == t ? true : t.imageSrc) == null || O ? true : f.hoverActiveEffect)
    }), !O && v && (0, r.jsx)(s.Z, {
      game: t,
      widgetType: i,
      className: g.removeGameButton,
      iconSize: "xs"
    }), !O && y && (0, r.jsx)(o.Z, {
      label: d.intl.formatToPlainString(d.t.ujhJdH, {
        numFriends: j.length
      }),
      className: g.socialProof,
      users: j,
      guildId: b,
      channelId: p,
      visuallyHideLabel: true
    })]
  })
}