/** Chunk was on 86642 **/
/** chunk id: 951206, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => u
});
var Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk846027 = require("./846027.js"),
  Chunk287734 = require("./287734.js"),
  Chunk131951 = require("./131951.js"),
  Chunk254238 = require("./254238.js"),
  Chunk893387 = require("./893387.js");

function u(e, t) {
  var n;
  let i = null != (n = e.sessionId) ? n : "";
  (0, s._)(i), (0, s.s6)();
  let u = null != t ? t : e.channelId;
  r()(null != u, "attempted to transfer to unknown channel"), e.selfMute !== o.Z.isSelfMute() && l.Z.toggleSelfMute(), e.selfDeaf !== o.Z.isSelfDeaf() && l.Z.toggleSelfDeaf(), (0, c.Z)(u, "discord_client", i), a.default.selectVoiceChannel(u, false)
}