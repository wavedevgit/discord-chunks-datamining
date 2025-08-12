/** Chunk was on 29458 **/
/** chunk id: 753436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk971082 = require("./971082.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk896270 = require("./896270.js"),
  Chunk598439 = require("./598439.js");

function d(e) {
  let {
    game: t,
    userId: n,
    guildId: d,
    channelId: u,
    loading: f = false,
    disableInteraction: p = false
  } = e, m = (0, o.Z)(t.applicationId), b = m.length > 0;
  return f ? (0, r.jsx)("div", {
    className: c.loadingCover
  }) : (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsx)(i.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: n,
      disableInteraction: p,
      className: b ? s.socialProofBackdrop : true
    }), !p && b && (0, r.jsx)(l.Z, {
      label: a.intl.formatToPlainString(a.t.ujhJdH, {
        numFriends: m.length
      }),
      className: s.socialProof,
      users: m,
      guildId: d,
      channelId: u,
      visuallyHideLabel: true
    })]
  })
}