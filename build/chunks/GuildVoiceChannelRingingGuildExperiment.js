/** Chunk was on web.js **/
/** chunk id: 164891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let a = (0, Chunk600975.C)({
  kind: "guild",
  id: "2024-12_guild_voice_channel_ringing",
  label: "Guild Voice Ringing",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk688151.$G.VOICE_CALL,
  treatments: [{
    id: 1,
    label: "Allow users to ring each other in Guild Voice Channels",
    config: {
      enabled: true
    }
  }]
})