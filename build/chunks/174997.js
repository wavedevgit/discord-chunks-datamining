/** Chunk was on web.js **/
/** chunk id: 174997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk29583 = require("./29583.js"),
  Chunk992663 = require("./992663.js"),
  Chunk683706 = require("./683706.js"),
  Chunk618027 = require("./618027.js"),
  Chunk333081 = require("./333081.js");

function l(e, t) {
  (0, o.A)(2, arguments);
  var n, l = (0, r.default)(e),
    c = (0, r.default)(t),
    u = (0, a.A)(l, c),
    d = Math.abs((0, i.default)(l, c));
  if (d < 1) n = 0;
  else {
    1 === l.getMonth() && l.getDate() > 27 && l.setDate(30), l.setMonth(l.getMonth() - u * d);
    var f = (0, a.A)(l, c) === -u;
    (0, s.A)((0, r.default)(e)) && 1 === d && 1 === (0, a.A)(e, c) && (f = false), n = u * (d - Number(f))
  }
  return 0 === n ? 0 : n
}