/** Chunk was on web.js **/
/** chunk id: 136818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk528734 = require("./528734.js"),
  Chunk780264 = require("./780264.js"),
  Chunk951516 = require("./951516.js");

function o(e) {
  (0, a.Z)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getFullYear(),
    o = new Date(0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  var s = (0, i.Z)(o),
    l = new Date(0);
  l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
  var c = (0, i.Z)(l);
  return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1
}