/** Chunk was on web.js **/
/** chunk id: 97260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk73153 = require("./73153.js");
let i = {
  addKeybind: e => r.h.dispatch({
    type: "KEYBINDS_ADD_KEYBIND",
    keybind: e
  }),
  setKeybind: e => r.h.dispatch({
    type: "KEYBINDS_SET_KEYBIND",
    keybind: e
  }),
  deleteKeybind: e => r.h.dispatch({
    type: "KEYBINDS_DELETE_KEYBIND",
    id: e
  }),
  enableAll: e => r.h.dispatch({
    type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
    enable: e
  })
}