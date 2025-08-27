/** Chunk was on web.js **/
/** chunk id: 984181, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js");

function a(e) {
  (0, i.Z)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getFullYear(),
    a = t.getMonth(),
    o = new Date(0);
  return o.setFullYear(n, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
}