/** Chunk was on web.js **/
/** chunk id: 682404, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js"),
  o = 864e5;

function a(e) {
  (0, i.Z)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getTime();
  return t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0), Math.floor((n - t.getTime()) / o) + 1
}