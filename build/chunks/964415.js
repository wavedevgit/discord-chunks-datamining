/** Chunk was on web.js **/
/** chunk id: 964415, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js");

function o(e) {
  (0, i.Z)(1, arguments);
  var t = 1,
    n = (0, r.default)(e),
    o = n.getUTCDay(),
    a = 7 * (o < t) + o - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n
}