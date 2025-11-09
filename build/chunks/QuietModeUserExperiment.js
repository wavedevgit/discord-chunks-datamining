/** Chunk was on 22740 **/
/** chunk id: 29699, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => a
});
let a = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-01_quiet_mode",
  label: "Quiet Mode (dnd-equivalent) Experiment ",
  defaultConfig: {
    allowQuietMode: false
  },
  treatments: [{
    id: 1,
    label: "allow quiet mode",
    config: {
      allowQuietMode: true
    }
  }]
})