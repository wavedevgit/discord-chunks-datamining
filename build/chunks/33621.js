/** Chunk was on 9753 **/
/** chunk id: 33621, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => l
}), require("./896048.js");
var Chunk945810 = require("./945810.js"),
  Chunk79545 = require("./79545.js");
let l = (0, Chunk945810.mj)({
  name: "2025-12-quest-cta-refactor-rollout",
  kind: "user",
  defaultConfig: {
    enabled: false,
    enabledQuestStates: new Set
  },
  variations: {
    1: {
      enabled: true,
      enabledQuestStates: new Set([Chunk79545.U.UNENROLLED])
    },
    2: {
      enabled: true,
      enabledQuestStates: new Set([Chunk79545.U.UNENROLLED, Chunk79545.U.ENROLLED])
    }
  }
})