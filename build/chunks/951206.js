/** Chunk was on web.js **/
/** chunk id: 951206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk846027 = require("./846027.js"),
  Chunk287734 = require("./287734.js"),
  Chunk131951 = require("./131951.js"),
  Chunk254238 = require("./254238.js"),
  Chunk893387 = require("./893387.js");

function u(e, t) {
  var n;
  let r = null != (n = e.sessionId) ? n : "";
  (0, l._)(r), (0, l.s6)();
  let u = null != t ? t : e.channelId;
  i()(null != u, "attempted to transfer to unknown channel"), e.selfMute !== s.Z.isSelfMute() && o.Z.toggleSelfMute(), e.selfDeaf !== s.Z.isSelfDeaf() && o.Z.toggleSelfDeaf(), (0, c.Z)(u, "discord_client", r), a.default.selectVoiceChannel(u, false)
}