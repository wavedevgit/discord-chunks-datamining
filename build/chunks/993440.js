/** Chunk was on 85668 **/
n.d(e, {
  c: () => r,
  p: () => l
});
var a = n(818083),
  i = n(987338);
let r = (0, a.B)({
    id: "2025-07_nitro_perk_private_browsing_survey",
    kind: "user",
    label: "Nitro Perk Private Browsing Survey",
    defaultConfig: {
      enabled: !1
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Enables the Nitro Perk Private Browsing Survey",
      config: {
        enabled: !0
      }
    }]
  }),
  l = t => {
    let {
      location: e
    } = t;
    return r.useExperiment({
      location: e
    })
  }