/** Chunk was on web.js **/
/** chunk id: 660216, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk570140 = require("./570140.js");
let i = {
  addKeybind(e) {
    r.Z.dispatch({
      type: "KEYBINDS_ADD_KEYBIND",
      keybind: e
    })
  },
  setKeybind(e) {
    r.Z.dispatch({
      type: "KEYBINDS_SET_KEYBIND",
      keybind: e
    })
  },
  deleteKeybind(e) {
    r.Z.dispatch({
      type: "KEYBINDS_DELETE_KEYBIND",
      id: e
    })
  },
  enableAll(e) {
    r.Z.dispatch({
      type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
      enable: e
    })
  }
}