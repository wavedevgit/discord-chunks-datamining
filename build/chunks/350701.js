/** Chunk was on web.js **/
/** chunk id: 350701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js"),
  Chunk528767 = require("./528767.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  var l, c;
  s.default.track(o.HAw.VOICE_CALL_TRANSFER, {
    source_platform: null != n ? null == (l = a.A.getSessionById(n)) ? true : l.clientInfo.os : "discord_client",
    guild_id: null == (c = r.A.getChannel(e)) ? true : c.guild_id,
    channel_id: e,
    rtc_connection_id: i.A.getRTCConnectionId(),
    target_platform: t
  })
}