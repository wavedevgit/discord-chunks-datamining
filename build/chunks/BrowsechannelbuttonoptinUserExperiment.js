/** Chunk was on 97492 **/
/** chunk id: 590877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => i,
  w: () => s
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let i = (0, Chunk600975.C)({
  kind: "user",
  id: "2024-09_browsechannelbuttonoptin",
  label: "Don't show guild Browse Channels when all channels are already visible",
  defaultConfig: {
    alwaysShowDirectory: true
  },
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Hide Browse Channels when all channels are visible",
    config: {
      alwaysShowDirectory: false
    }
  }]
});

function s(e) {
  let {
    alwaysShowDirectory: t
  } = i.useExperiment({
    location: "useShowBrowseChannelsExperiment"
  });
  return t || !e
}