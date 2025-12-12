/** Chunk was on web.js **/
/** chunk id: 381538, original params: e (module,exports,re quire) **/
"use strict";
var t = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable;

function i(e) {
  if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
  return Object(e)
}
module.exports = ! function() {
  try {
    if (!Object.assign) returnfalse;
    var e = new String("abc");
    if (module[5] = "de", "5" === Object.getOwnPropertyNames(module)[0]) returnfalse;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function(e) {
      return t[e]
    });
    if ("0123456789" !== r.join("")) returnfalse;
    var i = {};
    if ("abcdefghijklmnopqrst".split("").forEach(function(e) {
        i[e] = e
      }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, i)).join("")) returnfalse;
    returntrue
  } catch (e) {
    returnfalse
  }
}() ? function(e, a) {
  for (var o, s, l = i(e), c = 1; c < arguments.length; c++) {
    for (var u in o = Object(arguments[c])) n.call(o, u) && (l[u] = o[u]);
    if (t) {
      s = t(o);
      for (var d = 0; d < s.length; d++) r.call(o, s[d]) && (l[s[d]] = o[s[d]])
    }
  }
  return l
} : Object.assign