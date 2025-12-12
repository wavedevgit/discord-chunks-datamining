/** Chunk was on web.js **/
/** chunk id: 894149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js"),
  Chunk217224 = require("./217224.js");

function a(e, t) {
  (0, i.Z)(2, arguments);
  var n = (0, o.Z)(t);
  n % 7 == 0 && (n -= 7);
  var a = 1,
    s = (0, r.default)(e),
    l = 7 * ((n % 7 + 7) % 7 < a) + n - s.getUTCDay();
  return s.setUTCDate(s.getUTCDate() + l), s
}