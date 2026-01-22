/** Chunk was on web.js **/
/** chunk id: 885973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => a
});
var Chunk287809 = require("./287809.js"),
  Chunk827152 = require("./827152.js");
let a = e => {
  let t = r.default.getCurrentUser();
  return !(null != t && t.isStaff()) && !i.A.getCurrentConfig(e).enabled
}