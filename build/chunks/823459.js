/** Chunk was on web.js **/
/** chunk id: 823459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Py: () => a,
  S8: () => o,
  bc: () => i
});
var Chunk73153 = require("./73153.js");
let i = e => {
    r.h.dispatch({
      type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
      presetId: e
    })
  },
  a = () => {
    r.h.dispatch({
      type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
      presetId: null
    })
  },
  o = () => {
    r.h.dispatch({
      type: "RESET_PREVIEW_CLIENT_THEME"
    })
  }