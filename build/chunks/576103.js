/** Chunk was on web.js **/
/** chunk id: 576103, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js");

function a(e) {
  (0, i.A)(1, arguments);
  var t = 1,
    n = (0, r.default)(e),
    a = n.getUTCDay(),
    o = 7 * (a < t) + a - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n
}