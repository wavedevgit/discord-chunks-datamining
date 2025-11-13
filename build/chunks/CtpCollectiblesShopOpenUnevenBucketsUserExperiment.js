/** Chunk was on 45620 **/
/** chunk id: 166350, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  NR: () => i,
  Ob: () => s,
  ZI: () => a,
  m1: () => c,
  uc: () => o
});
var Chunk987170 = require("./987170.js"),
  Chunk987338 = require("./987338.js");
let i = (0, Chunk987170.Z)({
    kind: "user",
    id: "2024-07_ctp_collectibles_shop_open_vanilla",
    label: "CTP collectibles shop open - A/A test - Vanilla",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN,
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
    id: "2024-07_ctp_collectibles_shop_open_filters",
    label: "CTP collectibles shop open - A/A test - Filters",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN,
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
    id: "2024-07_ctp_collectibles_shop_open_multiple_buckets",
    label: "CTP collectibles shop open - A/A test - Multiple buckets",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN,
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
  s = (0, Chunk987170.Z)({
    kind: "user",
    id: "2024-07_ctp_collectibles_shop_open_everyone",
    label: "CTP collectibles shop open - A/A test - Everyone",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN,
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
    id: "2024-07_ctp_collectibles_shop_open_uneven_buckets",
    label: "CTP collectibles shop open - A/A test - Uneven buckets",
    defaultConfig: {
      doSomething: false
    },
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: true
      }
    }]
  })