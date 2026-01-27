/** Chunk was on web.js **/
/** chunk id: 95944, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js");

function a(e) {
  (0, i.A)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getFullYear(),
    a = t.getMonth(),
    o = new Date(0);
  return o.setFullYear(n, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
}