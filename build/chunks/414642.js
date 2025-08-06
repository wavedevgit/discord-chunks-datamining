/** Chunk was on 81709 **/
n.d(t, {
  K: () => a,
  S: () => s
});
var i = n(818083),
  r = n(987338);
let a = (0, i.B)({
    id: "2025-07_nitro_rebrand_churn_modal",
    kind: "user",
    label: "Nitro Rebrand Churn Modal",
    defaultConfig: {
      enabled: !1,
      discountPrimary: !1
    },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Enables rebranded churn modal w/ secondary discount CTA",
      config: {
        enabled: !0,
        discountPrimary: !1
      }
    }, {
      id: 2,
      label: "Enables rebranded churn modal w/ primary discount CTA",
      config: {
        enabled: !0,
        discountPrimary: !0
      }
    }]
  }),
  s = e => {
    let {
      location: t
    } = e;
    return a.useExperiment({
      location: t
    })
  }