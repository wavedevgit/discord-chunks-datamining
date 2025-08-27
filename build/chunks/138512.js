/** Chunk was on web.js **/
/** chunk id: 138512, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => s
});
var Chunk217224 = require("./217224.js"),
  Chunk528734 = require("./528734.js"),
  Chunk984181 = require("./984181.js"),
  Chunk951516 = require("./951516.js");

function s(e, t) {
  (0, o.Z)(2, arguments);
  var n = (0, i.default)(e),
    s = (0, r.Z)(t),
    l = n.getFullYear(),
    c = n.getDate(),
    u = new Date(0);
  u.setFullYear(l, s, 15), u.setHours(0, 0, 0, 0);
  var d = (0, a.Z)(u);
  return n.setMonth(s, Math.min(c, d)), n
}