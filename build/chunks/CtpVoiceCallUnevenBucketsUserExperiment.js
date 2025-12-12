/** Chunk was on web.js **/
/** chunk id: 895536, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NR: () => o,
  Ob: () => l,
  ZI: () => a,
  m1: () => c,
  uc: () => s
});
var Chunk987170 = require("./987170.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk987170.Z)({
    kind: "user",
    id: "2024-06_ctp_voice_call_vanilla",
    label: "CTP voice call - A/A test - Vanilla",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.VOICE_CALL,
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
    id: "2024-06_ctp_voice_call_filters",
    label: "CTP voice call - A/A test - Filters",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.VOICE_CALL,
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
    id: "2024-06_ctp_voice_call_multiple_buckets",
    label: "CTP voice call - A/A test - Multiple buckets",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.VOICE_CALL,
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
  l = (0, Chunk987170.Z)({
    kind: "user",
    id: "2024-06_ctp_voice_call_everyone",
    label: "CTP voice call - A/A test - Everyone",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.VOICE_CALL,
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
    id: "2024-06_ctp_voice_call_uneven_buckets",
    label: "CTP voice call - A/A test - Uneven buckets",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.VOICE_CALL,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: true
      }
    }]
  })