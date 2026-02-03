/** Chunk was on 21905 **/
/** chunk id: 769192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk886393 = require("./886393.jsx"),
  Chunk475777 = require("./475777.js"),
  Chunk848977 = require("./848977.jsx"),
  Chunk995102 = require("./995102.jsx"),
  Chunk288104 = require("./288104.jsx"),
  Chunk661504 = require("./661504.jsx"),
  Chunk304694 = require("./304694.jsx"),
  Chunk671483 = require("./671483.jsx"),
  Chunk217563 = require("./217563.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk769591 = require("./769591.js"),
  Chunk446600 = require("./446600.js"),
  Chunk914853 = require("./914853.js"),
  Chunk708653 = require("./708653.jsx"),
  Chunk297460 = require("./297460.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let S = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    channel: t,
    guild: n,
    onSelect: o,
    widgetType: c
  } = e, u = t.isGuildStageVoice(), N = (0, i.bG)([h.A], () => u ? h.A.getStageInstanceByChannel(t.id) : true, [u, t.id]), S = (0, A.A)(t), _ = (0, s.A)(t), {
    toggleFavoriteItem: m
  } = (0, D.Ay)(j.x.VOICE, t, c), x = (0, f.Ay)(t), M = (0, b.A)(t), P = (0, d.A)(t, n, N), w = (0, I.A)({
    kind: "CHANNEL",
    channel: t,
    guildId: n.id
  }, c), U = (0, v.A)({
    id: t.id,
    label: C.intl.string(C.t.gFHI3k)
  }), k = (0, E.A)(t), G = (0, p.A)(t, n), L = (0, g.A)(t, n.id), T = (0, O.os)("OverlayChannelListVoiceChannelContextMenu"), R = (0, y.Ay)(t);
  return (0, r.jsxs)(l.W1t, {
    navId: "overlay-channel-context",
    onClose: a.Z_,
    "aria-label": C.intl.string(C.t.Xm41aV),
    onSelect: o,
    children: [(0, r.jsxs)(l.rXV, {
      children: [w, m, P, _]
    }, "primary-actions"), (0, r.jsxs)(l.rXV, {
      children: [L, S, G, k]
    }, "voice-actions"), (0, r.jsxs)(l.rXV, {
      children: [x, T ? R : M]
    }, "notifications"), (0, r.jsx)(l.rXV, {
      children: U
    }, "developer-actions")]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.OVERLAY, Chunk793574.A.CHANNEL_LIST_VOICE_CHANNEL_MENU])