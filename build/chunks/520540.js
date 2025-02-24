/** Chunk was on 40580 **/
"use strict";
r.d(t, {
  g: () => o,
  p: () => i
});
var n, s = r(818083),
  i = ((n = {})[n.VARIANT_1 = 0] = "VARIANT_1", n[n.VARIANT_2 = 1] = "VARIANT_2", n);
let o = (0, s.B)({
  kind: "user",
  id: "2024-03_referral_program_sender",
  label: "Referral Program Sender Experience",
  defaultConfig: {
    enabled: !1,
    subscriberHomeVariant: null,
    eligibleToFetch: !1
  },
  treatments: [{
    id: 0,
    label: "Disabled",
    config: {
      enabled: !1,
      subscriberHomeVariant: null,
      eligibleToFetch: !0
    }
  }, {
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0,
      subscriberHomeVariant: 0,
      eligibleToFetch: !0
    }
  }, {
    id: 2,
    label: "Enabled",
    config: {
      enabled: !0,
      subscriberHomeVariant: 1,
      eligibleToFetch: !0
    }
  }]
})