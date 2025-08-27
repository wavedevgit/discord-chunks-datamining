/** Chunk was on web.js **/
/** chunk id: 788613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => o
});
var Chunk217224 = require("./217224.js"),
  Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js");

function o(e, t) {
  (0, a.Z)(2, arguments);
  var n = (0, i.default)(e),
    o = (0, r.Z)(t);
  if (isNaN(o)) return new Date(NaN);
  if (!o) return n;
  var s = n.getDate(),
    l = new Date(n.getTime());
  return (l.setMonth(n.getMonth() + o + 1, 0), s >= l.getDate()) ? l : (n.setFullYear(l.getFullYear(), l.getMonth(), s), n)
}