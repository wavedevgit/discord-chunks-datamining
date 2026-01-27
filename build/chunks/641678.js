/** Chunk was on web.js **/
/** chunk id: 641678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk29583 = require("./29583.js"),
  Chunk452420 = require("./452420.js"),
  Chunk618027 = require("./618027.js");

function o(e) {
  (0, a.A)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getFullYear(),
    o = new Date(0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  var s = (0, i.A)(o),
    l = new Date(0);
  l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
  var c = (0, i.A)(l);
  return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1
}