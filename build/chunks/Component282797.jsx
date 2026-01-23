/** Chunk was on web.js **/
/** chunk id: 282797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk47167 = require("./47167.js"),
  Chunk71393 = require("./71393.js"),
  Chunk798031 = require("./798031.js"),
  Chunk575731 = require("./575731.js"),
  Chunk92240 = require("./92240.js"),
  Chunk257367 = require("./257367.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk584904 = require("./584904.jsx"),
  Chunk351638 = require("./351638.jsx"),
  Chunk316770 = require("./316770.jsx"),
  Chunk42002 = require("./42002.jsx"),
  Chunk560859 = require("./560859.jsx"),
  Chunk70963 = require("./70963.jsx"),
  Chunk8738 = require("./8738.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk380297 = require("./380297.js");

function N(e) {
  let {
    user: t,
    currentUser: n,
    voiceChannel: i,
    className: N,
    onClose: R
  } = e, {
    themeType: w
  } = (0, g.E)(), {
    analyticsLocations: P
  } = (0, u.Ay)(c.A.USER_PROFILE_VOICE_ACTIVITY_CARD), D = (0, h.A)({
    display: "voice",
    activity: {
      type: "VOICE"
    },
    voiceChannelId: i.id,
    user: t,
    analyticsLocations: P
  }), x = (0, m.A)({
    userId: t.id,
    onAction: D
  }), L = (0, s.bG)([f.A], () => f.A.getGuild(i.guild_id)), j = (0, _.A)(i), M = (0, d.Ay)(i), {
    channelStatusEnabled: k
  } = (0, p.e)({
    location: "UserProfileVoiceActivityCard"
  }), U = () => {
    if (t.id !== n.id) return null;
    let e = i.isDM() || i.isGroupDM() ? T.intl.string(T.t["+DsWbX"]) : T.intl.string(T.t.xOVEjc);
    return (0, r.jsx)(o.m, {
      text: e,
      children: (0, r.jsx)(l.mir, {
        size: "xxs"
      })
    })
  }, G = () => (0, r.jsx)("div", {
    className: C.o1,
    children: (0, r.jsx)(A.A, {
      channel: i,
      onAction: D,
      onClose: R
    })
  }), V = i.isDM() || i.isGroupDM() ? T.intl.string(T.t["9FaEzi"]) : i.isGuildStageVoice() ? T.intl.string(T.t.QygGCN) : T.intl.string(T.t.msxteM);
  return (0, r.jsx)(u.f5, {
    value: P,
    children: (0, r.jsxs)(E.A, {
      ref: x,
      className: a()(C.Nr, N),
      onAction: D,
      onClose: R,
      "aria-label": "".concat(V, ", ").concat(M),
      children: [(0, r.jsx)(y.A, {
        text: V,
        tags: U(),
        contextMenu: (0, r.jsx)(I.A, {
          display: "voice",
          user: t,
          onClose: R
        })
      }), (0, r.jsx)("div", {
        className: C.rf,
        children: (0, r.jsxs)("div", {
          className: C.Qs,
          children: [(0, r.jsx)(O.A, {
            users: j,
            channel: i
          }), (0, r.jsxs)("div", {
            className: C.zH,
            children: [(0, r.jsx)(b.A, {
              channel: i,
              guild: L,
              onAction: D,
              onClose: R
            }), k && i.isGuildVoice() && (0, r.jsx)(v.A, {
              voiceChannel: i,
              onAction: D,
              onClose: R
            }), w === S.d.MODAL_V2 && G()]
          }), w === S.d.MODAL && G()]
        })
      }), w !== S.d.MODAL && w !== S.d.MODAL_V2 && G()]
    })
  })
}