/** Chunk was on web.js **/
/** chunk id: 199350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => a
});
var Chunk594174 = require("./594174.js"),
  Chunk465493 = require("./465493.js");
let a = e => {
  let t = r.default.getCurrentUser();
  return !(null != t && t.isStaff()) && !i.Z.getCurrentConfig(e).enabled
}