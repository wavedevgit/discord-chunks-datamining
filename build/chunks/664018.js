/** Chunk was on 74329 **/
n.d(t, {
  D: () => o,
  E: () => a
});
var r, i = n(818083),
  o = ((r = {})[r.CONTROL = 0] = "CONTROL", r[r.TRANSFORMATION = 1] = "TRANSFORMATION", r[r.NO_MOVEMENT = 2] = "NO_MOVEMENT", r);
let l = (0, i.B)({
    kind: "user",
    id: "2024-03_shop_card_hover_animation",
    label: "Shop card hover animation experiment",
    defaultConfig: {
      hoverVariant: 0
    },
    treatments: [{
      id: 1,
      label: "Use CSS Transformation",
      config: {
        hoverVariant: 1
      }
    }, {
      id: 2,
      label: "No hover movement",
      config: {
        hoverVariant: 2
      }
    }]
  }),
  a = e => l.useExperiment({
    location: e
  })