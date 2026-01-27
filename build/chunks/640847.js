/** Chunk was on web.js **/
/** chunk id: 640847, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function() {
  if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) returnfalse;
  if ("symbol" == typeof Symbol.iterator) returntrue;
  var e = {},
    t = Symbol("test"),
    n = Object(t);
  if ("string" == typeof t || "[object Symbol]" !== Object.prototype.toString.call(t) || "[object Symbol]" !== Object.prototype.toString.call(n)) returnfalse;
  var r = 42;
  for (var i in e[t] = r, e) returnfalse;
  if ("function" == typeof Object.keys && 0 !== Object.keys(e).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) returnfalse;
  var a = Object.getOwnPropertySymbols(e);
  if (1 !== a.length || a[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) returnfalse;
  if ("function" == typeof Object.getOwnPropertyDescriptor) {
    var o = Object.getOwnPropertyDescriptor(e, t);
    if (o.value !== r || true !== o.enumerable) returnfalse
  }
  returntrue
}