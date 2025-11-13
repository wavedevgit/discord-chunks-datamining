/** Chunk was on 11788 **/
/** chunk id: 330791, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => l,
  l: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-09_browsechannelbuttonoptin",
  label: "Don't show guild Browse Channels when all channels are already visible",
  defaultConfig: {
    alwaysShowDirectory: true
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Hide Browse Channels when all channels are visible",
    config: {
      alwaysShowDirectory: false
    }
  }]
});

function o(e) {
  let {
    alwaysShowDirectory: t
  } = l.useExperiment({
    location: "useShowBrowseChannelsExperiment"
  });
  return t || !e
}