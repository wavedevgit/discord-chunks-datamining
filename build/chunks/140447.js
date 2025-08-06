/** Chunk was on 81709 **/
n.d(t, {
  P: () => s,
  R: () => a
});
var i = n(818083),
  r = n(987338);
let a = (0, i.B)({
    id: "2025-08_nitro_rebrand_churn_modal_preview_invoice_step",
    kind: "user",
    label: "Nitro Rebrand Churn Modal Preview Invoice Step",
    defaultConfig: {
      enabled: !1
    },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Enables preview invoice step in rebranded churn modal",
      config: {
        enabled: !0
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