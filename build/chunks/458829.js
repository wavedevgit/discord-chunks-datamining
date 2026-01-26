/** Chunk was on 89209 **/
/** chunk id: 458829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => d
});
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk827343 = require("./827343.js"),
  Chunk956793 = require("./956793.js"),
  Chunk430452 = require("./430452.js"),
  Chunk108713 = require("./108713.js"),
  Chunk350701 = require("./350701.js");

function d(e, t) {
  var n;
  let r = null != (n = e.sessionId) ? n : "";
  (0, o.Fc)(r), (0, o.ZG)();
  let d = null != t ? t : e.channelId;
  l()(null != d, "attempted to transfer to unknown channel"), e.selfMute !== a.A.isSelfMute() && i.A.toggleSelfMute(), e.selfDeaf !== a.A.isSelfDeaf() && i.A.toggleSelfDeaf(), (0, c.A)(d, "discord_client", r), u.default.selectVoiceChannel(d, false)
}