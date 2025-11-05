/** Chunk was on 1272 **/
/** chunk id: 853385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NR: () => l,
  Ob: () => o,
  ZI: () => a,
  m1: () => c,
  uc: () => s
});
var Chunk987170 = require("./987170.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk987170.Z)({
    kind: "user",
    id: "2025-09_ctp_quest_home_open_vanilla",
    label: "CTP quest home open - A/A test - Vanilla",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.QUEST_HOME_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: true
      }
    }]
  }),
  a = (0, Chunk987170.Z)({
    kind: "user",
    id: "2025-09_ctp_quest_home_open_filters",
    label: "CTP quest home open - A/A test - Filters",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.QUEST_HOME_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: true
      }
    }]
  }),
  s = (0, Chunk987170.Z)({
    kind: "user",
    id: "2025-09_ctp_quest_home_open_multiple_buckets",
    label: "CTP quest home open - A/A test - Multiple buckets",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.QUEST_HOME_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment 1",
      config: {
        doSomething: true
      }
    }, {
      id: 2,
      label: "Treatment 2",
      config: {
        doSomething: true
      }
    }]
  }),
  o = (0, Chunk987170.Z)({
    kind: "user",
    id: "2025-09_ctp_quest_home_open_everyone",
    label: "CTP quest home open - A/A test - Everyone",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.QUEST_HOME_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: true
      }
    }]
  }),
  c = (0, Chunk987170.Z)({
    kind: "user",
    id: "2025-09_ctp_quest_home_open_uneven_buckets",
    label: "CTP quest home open - A/A test - Uneven buckets",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.QUEST_HOME_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: true
      }
    }]
  })