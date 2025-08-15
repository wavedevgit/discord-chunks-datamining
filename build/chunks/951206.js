/** Chunk was on 67096 **/
/** chunk id: 951206, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  F: () => p
});
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk846027 = require("./846027.js"),
  Chunk287734 = require("./287734.js"),
  Chunk131951 = require("./131951.js"),
  Chunk254238 = require("./254238.js"),
  Chunk893387 = require("./893387.js");

function p(t, n) {
  var e;
  let i = null != (e = t.sessionId) ? e : "";
  (0, _._)(i), (0, _.s6)();
  let p = null != n ? n : t.channelId;
  l()(null != p, "attempted to transfer to unknown channel"), t.selfMute !== a.Z.isSelfMute() && d.Z.toggleSelfMute(), t.selfDeaf !== a.Z.isSelfDeaf() && d.Z.toggleSelfDeaf(), (0, s.Z)(p, "discord_client", i), r.default.selectVoiceChannel(p, false)
}