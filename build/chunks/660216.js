/** Chunk was on 75708 **/
/** chunk id: 660216, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk570140 = require("./570140.js");
let r = {
  addKeybind(e) {
    i.Z.dispatch({
      type: "KEYBINDS_ADD_KEYBIND",
      keybind: e
    })
  },
  setKeybind(e) {
    i.Z.dispatch({
      type: "KEYBINDS_SET_KEYBIND",
      keybind: e
    })
  },
  deleteKeybind(e) {
    i.Z.dispatch({
      type: "KEYBINDS_DELETE_KEYBIND",
      id: e
    })
  },
  enableAll(e) {
    i.Z.dispatch({
      type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
      enable: e
    })
  }
}