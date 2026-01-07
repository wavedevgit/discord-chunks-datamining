/** Chunk was on web.js **/
/** chunk id: 238302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  kj: () => o,
  xs: () => a,
  zO: () => i
});
var Chunk570140 = require("./570140.js");
let i = e => {
    r.Z.dispatch({
      type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
      presetId: e
    })
  },
  a = () => {
    r.Z.dispatch({
      type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
      presetId: null
    })
  },
  o = () => {
    r.Z.dispatch({
      type: "RESET_PREVIEW_CLIENT_THEME"
    })
  }