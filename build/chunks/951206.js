/** Chunk was on 19899 **/
/** chunk id: 951206, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => s
});
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk846027 = require("./846027.js"),
  Chunk287734 = require("./287734.js"),
  Chunk131951 = require("./131951.js"),
  Chunk254238 = require("./254238.js"),
  Chunk893387 = require("./893387.js");

function s(e, t) {
  var n;
  let i = null != (n = e.sessionId) ? n : "";
  (0, o._)(i), (0, o.s6)();
  let s = null != t ? t : e.channelId;
  l()(null != s, "attempted to transfer to unknown channel"), e.selfMute !== u.Z.isSelfMute() && r.Z.toggleSelfMute(), e.selfDeaf !== u.Z.isSelfDeaf() && r.Z.toggleSelfDeaf(), (0, c.Z)(s, "discord_client", i), a.default.selectVoiceChannel(s, false)
}