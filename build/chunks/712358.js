/** Chunk was on 624 (51273709882b01ef.js) **/
n.d(t, {
  U: () => i
});
let r = (0, n(818083).B)({
  id: "2021-08_user_initiated_refunds",
  label: "User Initiated Refunds",
  kind: "user",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      enabled: !1
    }
  }, {
    id: 1,
    label: "Can refund",
    config: {
      enabled: !0
    }
  }]
});

function i() {
  let {
    enabled: e
  } = r.getCurrentConfig({
    location: "70b634_1"
  }, {
    autoTrackExposure: !1
  });
  return r.trackExposure({
    location: "70b634_2"
  }), e
}