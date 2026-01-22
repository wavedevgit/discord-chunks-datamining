/** Chunk was on 35511 **/
/** chunk id: 608039, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk664886 = require("./664886.js"),
  Chunk999843 = require("./999843.js"),
  Chunk309270 = require("./309270.js"),
  Chunk155084 = require("./155084.js"),
  s = TypeError;
module.exports = function(e, t) {
  var n, l = i(this),
    c = a(l.get),
    u = a(l.has),
    d = a(l.set),
    p = arguments.length > 2 ? arguments[2] : true;
  if (!o(t) && !o(p)) throw new s("At least one callback required");
  return r(u, l, e) ? (n = r(c, l, e), o(t) && r(d, l, e, n = t(n))) : o(p) && r(d, l, e, n = p()), n
}