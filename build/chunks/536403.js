/** Chunk was on web.js **/
/** chunk id: 536403, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk528734 = require("./528734.js"),
  Chunk352187 = require("./352187.js"),
  Chunk991656 = require("./991656.js"),
  Chunk951516 = require("./951516.js"),
  Chunk21231 = require("./21231.js");

function l(e, t) {
  (0, a.Z)(2, arguments);
  var n, l = (0, r.default)(e),
    c = (0, r.default)(t),
    u = (0, o.Z)(l, c),
    d = Math.abs((0, i.default)(l, c));
  if (d < 1) n = 0;
  else {
    1 === l.getMonth() && l.getDate() > 27 && l.setDate(30), l.setMonth(l.getMonth() - u * d);
    var f = (0, o.Z)(l, c) === -u;
    (0, s.Z)((0, r.default)(e)) && 1 === d && 1 === (0, o.Z)(e, c) && (f = false), n = u * (d - Number(f))
  }
  return 0 === n ? 0 : n
}