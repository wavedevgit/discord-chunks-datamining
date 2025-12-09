/** Chunk was on 58493 **/
/** chunk id: 481637, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => n
});
let n = (0, require("./818083.js").B)({
  kind: "user",
  id: "2021-10_runtime_accessibility_system",
  label: "Runtime Accessibility System",
  defaultConfig: {
    enabled: false,
    reporting: false
  },
  treatments: [{
    id: 1,
    label: "Enabled but silent",
    config: {
      enabled: true,
      reporting: false
    }
  }, {
    id: 2,
    label: "Enabled and reporting",
    config: {
      enabled: true,
      reporting: true
    }
  }]
})