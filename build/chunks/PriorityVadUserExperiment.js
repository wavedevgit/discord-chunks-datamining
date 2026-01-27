/** Chunk was on 60667 **/
/** chunk id: 541185, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
let r = (0, require("./600975.js").C)({
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