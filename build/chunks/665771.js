/** Chunk was on web.js **/
/** chunk id: 665771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js"),
  Chunk964415 = require("./964415.js");

function o(e) {
  (0, i.Z)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getUTCFullYear(),
    o = new Date(0);
  o.setUTCFullYear(n + 1, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var s = (0, a.Z)(o),
    l = new Date(0);
  l.setUTCFullYear(n, 0, 4), l.setUTCHours(0, 0, 0, 0);
  var c = (0, a.Z)(l);
  return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1
}