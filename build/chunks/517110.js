/** Chunk was on web.js **/
/** chunk id: 517110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk594190 = require("./594190.js");

function a(e) {
  i.ZP.isInputServiceInitialized() !== e && r.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    initialized: e,
    modules: ["input-service"]
  })
}