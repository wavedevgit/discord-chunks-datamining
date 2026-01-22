/** Chunk was on web.js **/
/** chunk id: 309576, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => a
});
var Chunk73153 = require("./73153.js"),
  Chunk15285 = require("./15285.js");

function a(e, t) {
  i.Ay.getSystemServiceStatus(e).state !== t.state && r.h.dispatch({
    type: "SYSTEM_SERVICE_INITIALIZE",
    status: t,
    modules: [e]
  })
}