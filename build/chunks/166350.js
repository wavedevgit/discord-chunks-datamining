/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  NR: () => l,
  Ob: () => s,
  ZI: () => o,
  m1: () => c,
  uc: () => a
});
var n = r(987170),
  i = r(987338);
let l = (0, n.Z)({
    kind: "user",
    id: "2024-07_ctp_collectibles_shop_open_vanilla",
    label: "CTP collectibles shop open - A/A test - Vanilla",
    defaultConfig: {
      doSomething: !1
    },
    commonTriggerPoint: i.$P.COLLECTIBLES_SHOP_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: !0
      }
    }]
  }),
  o = (0, n.Z)({
    kind: "user",
    id: "2024-07_ctp_collectibles_shop_open_filters",
    label: "CTP collectibles shop open - A/A test - Filters",
    defaultConfig: {
      doSomething: !1
    },
    commonTriggerPoint: i.$P.COLLECTIBLES_SHOP_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: !0
      }
    }]
  }),
  a = (0, n.Z)({
    kind: "user",
    id: "2024-07_ctp_collectibles_shop_open_multiple_buckets",
    label: "CTP collectibles shop open - A/A test - Multiple buckets",
    defaultConfig: {
      doSomething: !1
    },
    commonTriggerPoint: i.$P.COLLECTIBLES_SHOP_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment 1",
      config: {
        doSomething: !0
      }
    }, {
      id: 2,
      label: "Treatment 2",
      config: {
        doSomething: !0
      }
    }]
  }),
  s = (0, n.Z)({
    kind: "user",
    id: "2024-07_ctp_collectibles_shop_open_everyone",
    label: "CTP collectibles shop open - A/A test - Everyone",
    defaultConfig: {
      doSomething: !1
    },
    commonTriggerPoint: i.$P.COLLECTIBLES_SHOP_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: !0
      }
    }]
  }),
  c = (0, n.Z)({
    kind: "user",
    id: "2024-07_ctp_collectibles_shop_open_uneven_buckets",
    label: "CTP collectibles shop open - A/A test - Uneven buckets",
    defaultConfig: {
      doSomething: !1
    },
    commonTriggerPoint: i.$P.COLLECTIBLES_SHOP_OPEN,
    treatments: [{
      id: 1,
      label: "Treatment",
      config: {
        doSomething: !0
      }
    }]
  })