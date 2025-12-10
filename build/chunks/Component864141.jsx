/** Chunk was on web.js **/
/** chunk id: 864141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    onClose: P
  } = e, {
    themeType: R
  } = (0, g.z)(), {
    analyticsLocations: D
  } = (0, u.ZP)(c.Z.USER_PROFILE_VOICE_ACTIVITY_CARD), w = (0, m.Z)({
    display: "voice",
    activity: {
      type: "VOICE"
    },
    voiceChannelId: i.id,
    user: t,
    analyticsLocations: D
  }), x = (0, h.Z)({
    userId: t.id,
    onAction: w
  }), L = (0, o.e7)([f.Z], () => f.Z.getGuild(i.guild_id)), j = (0, _.Z)(i), M = (0, d.ZP)(i), {
    channelStatusEnabled: k
  } = (0, p.D)({
    location: "UserProfileVoiceActivityCard"
  }), U = () => {
    if (t.id !== n.id) return null;
    let e = i.isDM() || i.isGroupDM() ? C.intl.string(C.t["+DsWbX"]) : C.intl.string(C.t.xOVEjc);
    return (0, r.jsx)(s.u, {
      text: e,
      children: (0, r.jsx)(l.d3s, {
        size: "xxs"
      })
    })
  }, G = () => (0, r.jsx)("div", {
    className: A.actions,
    children: (0, r.jsx)(S.Z, {
      channel: i,
      onAction: w,
      onClose: P
    })
  }), Z = i.isDM() || i.isGroupDM() ? C.intl.string(C.t["9FaEzi"]) : i.isGuildStageVoice() ? C.intl.string(C.t.QygGCN) : C.intl.string(C.t.msxteM);
  return (0, r.jsx)(u.Gt, {
    value: D,
    children: (0, r.jsxs)(E.Z, {
      ref: x,
      className: a()(A.card, N),
      onAction: w,
      onClose: P,
      "aria-label": "".concat(Z, ", ").concat(M),
      children: [(0, r.jsx)(b.Z, {
        text: Z,
        tags: U(),
        contextMenu: (0, r.jsx)(I.Z, {
          display: "voice",
          user: t,
          onClose: P
        })
      }), (0, r.jsx)("div", {
        className: A.body,
        children: (0, r.jsxs)("div", {
          className: A.content,
          children: [(0, r.jsx)(O.Z, {
            users: j,
            channel: i
          }), (0, r.jsxs)("div", {
            className: A.details,
            children: [(0, r.jsx)(y.Z, {
              channel: i,
              guild: L,
              onAction: w,
              onClose: P
            }), k && i.isGuildVoice() && (0, r.jsx)(v.Z, {
              voiceChannel: i,
              onAction: w,
              onClose: P
            }), R === T.l.MODAL_V2 && G()]
          }), R === T.l.MODAL && G()]
        })
      }), R !== T.l.MODAL && R !== T.l.MODAL_V2 && G()]
    })
  })
}