/** Chunk was on web.js **/
/** chunk id: 699263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk938475 = require("./938475.js");

function o(e) {
  var t;
  return null == e ? {
    channel_id: true,
    guild_id: true,
    media_session_id: i.Z.getMediaSessionId(),
    call_num_participants: 0
  } : {
    channel_id: e,
    guild_id: null == (t = r.Z.getChannel(e)) ? true : t.guild_id,
    media_session_id: i.Z.getMediaSessionId(),
    call_num_participants: a.ZP.countVoiceStatesForChannel(e)
  }
}