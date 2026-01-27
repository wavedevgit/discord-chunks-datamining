/** Chunk was on web.js **/
/** chunk id: 216803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js"),
  Chunk576103 = require("./576103.js");

function o(e) {
  (0, i.A)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getUTCFullYear(),
    o = new Date(0);
  o.setUTCFullYear(n + 1, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var s = (0, a.A)(o),
    l = new Date(0);
  l.setUTCFullYear(n, 0, 4), l.setUTCHours(0, 0, 0, 0);
  var c = (0, a.A)(l);
  return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1
}