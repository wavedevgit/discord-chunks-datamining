/** Chunk was on web.js **/
/** chunk id: 864141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk430824 = require("./430824.js"),
  Chunk957575 = require("./957575.js"),
  Chunk323038 = require("./323038.js"),
  Chunk960870 = require("./960870.js"),
  Chunk139793 = require("./139793.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk336383 = require("./336383.jsx"),
  Chunk194811 = require("./194811.jsx"),
  Chunk265386 = require("./265386.jsx"),
  Chunk340266 = require("./340266.jsx"),
  Chunk849755 = require("./849755.jsx"),
  Chunk384298 = require("./384298.jsx"),
  Chunk670451 = require("./670451.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704543 = require("./704543.js");

function N(e) {
  let {
    user: t,
    currentUser: n,
    voiceChannel: i,
    className: N,
    onClose: R
  } = e, {
    themeType: P
  } = (0, g.z)(), {
    analyticsLocations: w
  } = (0, u.ZP)(c.Z.USER_PROFILE_VOICE_ACTIVITY_CARD), D = (0, h.Z)({
    display: "voice",
    activity: {
      type: "VOICE"
    },
    voiceChannelId: i.id,
    user: t,
    analyticsLocations: w
  }), x = (0, m.Z)({
    userId: t.id,
    onAction: D
  }), L = (0, o.e7)([f.Z], () => f.Z.getGuild(i.guild_id)), M = (0, p.Z)(i), j = (0, d.ZP)(i), {
    channelStatusEnabled: k
  } = (0, _.D)({
    location: "UserProfileVoiceActivityCard"
  }), U = () => {
    if (t.id !== n.id) return null;
    let e = i.isDM() || i.isGroupDM() ? A.intl.string(A.t["+DsWbX"]) : A.intl.string(A.t.xOVEjc);
    return (0, r.jsx)(s.u, {
      text: e,
      children: (0, r.jsx)(l.d3s, {
        size: "xxs"
      })
    })
  }, G = () => (0, r.jsx)("div", {
    className: C.actions,
    children: (0, r.jsx)(I.Z, {
      channel: i,
      onAction: D,
      onClose: R
    })
  }), B = i.isDM() || i.isGroupDM() ? A.intl.string(A.t["9FaEzi"]) : i.isGuildStageVoice() ? A.intl.string(A.t.QygGCN) : A.intl.string(A.t.msxteM);
  return (0, r.jsx)(u.Gt, {
    value: w,
    children: (0, r.jsxs)(E.Z, {
      ref: x,
      className: a()(C.card, N),
      onAction: D,
      onClose: R,
      "aria-label": "".concat(B, ", ").concat(j),
      children: [(0, r.jsx)(b.Z, {
        text: B,
        tags: U(),
        contextMenu: (0, r.jsx)(T.Z, {
          display: "voice",
          user: t,
          onClose: R
        })
      }), (0, r.jsx)("div", {
        className: C.body,
        children: (0, r.jsxs)("div", {
          className: C.content,
          children: [(0, r.jsx)(O.Z, {
            users: M,
            channel: i
          }), (0, r.jsxs)("div", {
            className: C.details,
            children: [(0, r.jsx)(y.Z, {
              channel: i,
              guild: L,
              onAction: D,
              onClose: R
            }), k && i.isGuildVoice() && (0, r.jsx)(v.Z, {
              voiceChannel: i,
              onAction: D,
              onClose: R
            }), P === S.l.MODAL_V2 && G()]
          }), P === S.l.MODAL && G()]
        })
      }), P !== S.l.MODAL && P !== S.l.MODAL_V2 && G()]
    })
  })
}