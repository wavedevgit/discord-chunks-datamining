/** Chunk was on web.js **/
/** chunk id: 806246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js"),
  Chunk607567 = require("./607567.js");

function o(e) {
  var t;
  return null == e ? {
    channel_id: true,
    guild_id: true,
    media_session_id: i.A.getMediaSessionId(),
    call_num_participants: 0
  } : {
    channel_id: e,
    guild_id: null == (t = r.A.getChannel(e)) ? true : t.guild_id,
    media_session_id: i.A.getMediaSessionId(),
    call_num_participants: a.Ay.countVoiceStatesForChannel(e)
  }
}