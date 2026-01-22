/** Chunk was on web.js **/
/** chunk id: 983529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => a
});
var Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js");

function a(e) {
  (0, i.A)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getMonth(),
    a = n - n % 3;
  return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t
}