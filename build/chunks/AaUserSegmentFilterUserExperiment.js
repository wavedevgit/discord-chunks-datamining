/** Chunk was on 67878 **/
/** chunk id: 247901, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
let i = (0, require("./143770.js").A)({
  kind: "user",
  id: "2023-03_aa_user_segment_filter",
  label: "AA test to validate segmentation filter",
  defaultConfig: {
    isEnabled: false
  },
  treatments: [{
    id: 1,
    label: "AA test enabled. Noop on UI effect.",
    config: {
      isEnabled: true
    }
  }]
})