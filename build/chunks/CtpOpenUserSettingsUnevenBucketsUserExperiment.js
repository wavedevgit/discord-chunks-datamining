/** Chunk was on web.js **/
/** chunk id: 89805, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NR: () => a,
  Ob: () => l,
  ZI: () => o,
  m1: () => c,
  uc: () => s
});
var Chunk987170 = require("./987170.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk987170.Z)({
    kind: "user",
    id: "2024-07_ctp_open_user_settings_vanilla",
    label: "CTP open user settings - A/A test - Vanilla",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.OPEN_USER_SETTINGS,
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
    id: "2024-07_ctp_open_user_settings_filters",
    label: "CTP open user settings - A/A test - Filters",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.OPEN_USER_SETTINGS,
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
    id: "2024-07_ctp_open_user_settings_multiple_buckets",
    label: "CTP open user settings - A/A test - Multiple buckets",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.OPEN_USER_SETTINGS,
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
    id: "2024-07_ctp_open_user_settings_everyone",
    label: "CTP open user settings - A/A test - Everyone",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.OPEN_USER_SETTINGS,
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
    id: "2024-07_ctp_open_user_settings_uneven_buckets",
    label: "CTP open user settings - A/A test - Uneven buckets",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.OPEN_USER_SETTINGS,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: true
      }
    }]
  })