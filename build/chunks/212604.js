/** Chunk was on web.js **/
/** chunk id: 212604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => s
});
var Chunk998280 = require("./998280.js"),
  Chunk29583 = require("./29583.js"),
  Chunk95944 = require("./95944.js"),
  Chunk618027 = require("./618027.js");

function s(e, t) {
  (0, o.A)(2, arguments);
  var n = (0, i.default)(e),
    s = (0, r.A)(t),
    l = n.getFullYear(),
    c = n.getDate(),
    u = new Date(0);
  u.setFullYear(l, s, 15), u.setHours(0, 0, 0, 0);
  var d = (0, a.A)(u);
  return n.setMonth(s, Math.min(c, d)), n
}