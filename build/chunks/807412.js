/** Chunk was on 23357 **/
/** chunk id: 807412, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk517522 = require("./517522.js"),
  Chunk691593 = require("./691593.js"),
  Chunk971428 = require("./971428.js"),
  Chunk921413 = require("./921413.js"),
  s = TypeError;
module.exports = function(e, t) {
  var n, c = i(this),
    l = o(c.get),
    u = o(c.has),
    d = o(c.set),
    p = arguments.length > 2 ? arguments[2] : true;
  if (!a(t) && !a(p)) throw new s("At least one callback required");
  return r(u, c, e) ? (n = r(l, c, e), a(t) && r(d, c, e, n = t(n))) : a(p) && r(d, c, e, n = p()), n
}