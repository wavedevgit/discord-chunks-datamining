/** Chunk was on web.js **/
/** chunk id: 517110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk594190 = require("./594190.js");

function a(e, t) {
  i.ZP.getSystemServiceStatus(e).state !== t.state && r.Z.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    status: t,
    modules: [e]
  })
}