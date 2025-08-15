/** Chunk was on web.js **/
/** chunk id: 197084, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => a
});
var Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js");

function a(e, t) {
  (0, i.Z)(2, arguments);
  var n = (0, r.default)(e).getTime(),
    a = (0, r.default)(t.start).getTime(),
    o = (0, r.default)(t.end).getTime();
  if (!(a <= o)) throw RangeError("Invalid interval");
  return n >= a && n <= o
}