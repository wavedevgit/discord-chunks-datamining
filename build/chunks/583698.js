/** Chunk was on web.js **/
/** chunk id: 583698, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
  Chunk733 = require("./733.js"),
  Chunk320387 = require("./320387.js"),
  Chunk387584 = require("./387584.js"),
  Chunk830690 = require("./830690.js"),
  l = function(e, t) {
    if (null == e) throw TypeError("Cannot call method on " + e);
    if ("string" != typeof t || "number" !== t && "string" !== t) throw TypeError('hint must be "string" or "number"');
    var n, r, a, s = "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"];
    for (a = 0; a < s.length; ++a)
      if (o(n = e[s[a]]) && i(r = n.call(e))) return r;
    throw TypeError("No default value")
  },
  c = function(e, t) {
    var n = e[t];
    if (null != n) {
      if (!o(n)) throw TypeError(n + " returned for property " + String(t) + " of object " + e + " is not a function");
      return n
    }
  };
module.exports = function(e) {
  if (i(e)) return e;
  var t, n = "default";
  if (arguments.length > 1 && (arguments[1] === String ? n = "string" : arguments[1] === Number && (n = "number")), r && (Symbol.toPrimitive ? t = c(e, Symbol.toPrimitive) : s(e) && (t = Symbol.prototype.valueOf)), true !== t) {
    var o = t.call(e, n);
    if (i(o)) return o;
    throw TypeError("unable to convert exotic object to primitive")
  }
  return "default" === n && (a(e) || s(e)) && (n = "string"), l(e, "default" === n ? "number" : n)
}