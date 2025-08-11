/** Chunk was on web.js **/
/** chunk id: 238302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  kj: () => a,
  xs: () => o,
  zO: () => i
});
var Chunk570140 = require("./570140.js");
let i = e => {
    r.Z.dispatch({
      type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
      presetId: e
    })
  },
  o = () => {
    Chunk570140.Z.dispatch({
      type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
      presetId: null
    })
  },
  a = () => {
    Chunk570140.Z.dispatch({
      type: "RESET_PREVIEW_CLIENT_THEME"
    })
  }