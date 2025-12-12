/** Chunk was on web.js **/
/** chunk id: 984181, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js");

function o(e) {
  (0, i.Z)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getFullYear(),
    o = t.getMonth(),
    a = new Date(0);
  return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
}