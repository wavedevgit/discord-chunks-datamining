/** Chunk was on web.js **/
/** chunk id: 517110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk594190 = require("./594190.js");

function a(e) {
  i.ZP.getInputServiceStatus().state !== e.state && r.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    inputServiceStatus: e,
    modules: ["input-service"]
  })
}