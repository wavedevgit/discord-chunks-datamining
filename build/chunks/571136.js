/** Chunk was on web.js **/
/** chunk id: 571136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => a
});
var Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js");

function a(e, t) {
  (0, i.A)(2, arguments);
  var n = (0, r.default)(e).getTime(),
    a = (0, r.default)(t.start).getTime(),
    o = (0, r.default)(t.end).getTime();
  if (!(a <= o)) throw RangeError("Invalid interval");
  return n >= a && n <= o
}