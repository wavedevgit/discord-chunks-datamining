/** Chunk was on web.js **/
/** chunk id: 598984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NR: () => a,
  Ob: () => l,
  Vx: () => u,
  ZI: () => o,
  m1: () => c,
  uc: () => s
});
var Chunk987170 = require("./987170.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk987170.Z)({
    kind: "user",
    id: "2024-06_ctp_app_open_vanilla",
    label: "CTP app open - A/A test - Vanilla",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: true
      }
    }]
  }),
  o = (0, Chunk987170.Z)({
    kind: "user",
    id: "2024-06_ctp_app_open_filters",
    label: "CTP app open - A/A test - Filters",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
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
    id: "2024-06_ctp_app_open_multiple_buckets",
    label: "CTP app open - A/A test - Multiple buckets",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
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
    id: "2024-06_ctp_app_open_everyone",
    label: "CTP app open - A/A test - Everyone",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
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
    id: "2024-06_ctp_app_open_uneven_buckets",
    label: "CTP app open - A/A test - Uneven buckets",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: true
      }
    }]
  }),
  u = (0, Chunk987170.Z)({
    kind: "user",
    id: "2024-06_ctp_delta_vanilla",
    label: "CTP Delta Vanilla - A/A test",
    defaultConfig: {
      doSomething: false
    },
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: true
      }
    }]
  })