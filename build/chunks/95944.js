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
    s = new Date(0);
  return s.setFullYear(n, a + 1, 0), s.setHours(0, 0, 0, 0), s.getDate()
}