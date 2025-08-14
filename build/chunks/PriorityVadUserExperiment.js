/** Chunk was on 7384 **/
/** chunk id: 577153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
let i = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-05_priority_vad",
  label: "Priority PTT keybind in VAD mode",
  defaultConfig: {
    onPTTKeybind: false,
    separateKeybind: false
  },
  treatments: [{
    id: 1,
    label: "Priority PTT keybind affects VAD as well",
    config: {
      onPTTKeybind: true,
      separateKeybind: false
    }
  }, {
    id: 2,
    label: "Separate keybind for priority VAD",
    config: {
      onPTTKeybind: false,
      separateKeybind: true
    }
  }]
})