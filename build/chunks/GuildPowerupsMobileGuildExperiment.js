/** Chunk was on 67000 **/
/** chunk id: 13439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "guild",
  id: "2025-11_guild_powerups_mobile",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  label: "Guild Powerups Mobile",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Guild Powerups Mobile",
    config: {
      enabled: true
    }
  }]
});

function a(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return l.useExperiment({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: false,
    disable: n
  }).enabled
}