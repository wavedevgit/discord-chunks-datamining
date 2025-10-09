/** Chunk was on 22173 **/
/** chunk id: 360004, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => r
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let s = (0, Chunk818083.B)({
  kind: "guild",
  id: "2025-06_thread_search_partial_name_match",
  label: "Partial search term matching for thread titles",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Partial search term matching for thread titles",
    config: {
      enabled: true
    }
  }]
});

function r(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    {
      enabled: a
    } = s.useExperiment({
      guildId: e,
      location: t
    }, {
      autoTrackExposure: n
    });
  return a
}