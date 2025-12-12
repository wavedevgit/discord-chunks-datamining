/** Chunk was on web.js **/
/** chunk id: 163612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "guild",
  id: "2024-12_guild_voice_channel_ringing",
  label: "Guild Voice Ringing",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.VOICE_CALL,
  treatments: [{
    id: 1,
    label: "Allow users to ring each other in Guild Voice Channels",
    config: {
      enabled: true
    }
  }]
})