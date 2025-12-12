/** Chunk was on web.js **/
/** chunk id: 964415, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js");

function a(e) {
  (0, i.Z)(1, arguments);
  var t = 1,
    n = (0, r.default)(e),
    a = n.getUTCDay(),
    o = 7 * (a < t) + a - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n
}