/** Chunk was on web.js **/
/** chunk id: 894149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js"),
  Chunk217224 = require("./217224.js");

function o(e, t) {
  (0, i.Z)(2, arguments);
  var n = (0, a.Z)(t);
  n % 7 == 0 && (n -= 7);
  var o = 1,
    s = (0, r.default)(e),
    l = 7 * ((n % 7 + 7) % 7 < o) + n - s.getUTCDay();
  return s.setUTCDate(s.getUTCDate() + l), s
}