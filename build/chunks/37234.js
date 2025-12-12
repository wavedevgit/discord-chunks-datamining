/** Chunk was on web.js **/
/** chunk id: 37234, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ou: () => o,
  jN: () => i,
  xf: () => a
});
var Chunk570140 = require("./570140.js");

function i(e) {
  r.Z.dispatch({
    type: "LAYER_PUSH",
    component: e
  })
}

function a() {
  Chunk570140.Z.dispatch({
    type: "LAYER_POP"
  })
}

function o() {
  Chunk570140.Z.dispatch({
    type: "LAYER_POP_ALL"
  })
}