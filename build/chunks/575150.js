/** Chunk was on web.js **/
/** chunk id: 575150, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => o
});
var Chunk594174 = require("./594174.js"),
  Chunk603077 = require("./603077.js");
let o = e => {
  let t = r.default.getCurrentUser();
  return !(null != t && t.isStaff()) && !i.Z.getCurrentConfig(e).enabled
}