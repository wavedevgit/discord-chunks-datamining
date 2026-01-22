/** Chunk was on web.js **/
/** chunk id: 696219, original params: e (module,exports,re quire) **/
"use strict";
var t, n, r = Function.prototype.toString,
  i = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
if ("function" == typeof i && "function" == typeof Object.defineProperty) try {
  t = Object.defineProperty({}, "length", {
    get: function() {
      throw n
    }
  }), n = {}, i(function() {
    throw 42
  }, null, t)
} catch (e) {
  module !== n && (i = null)
} else i = null;
var a = /^\s*class\b/,
  s = function(e) {
    try {
      var t = r.call(e);
      return a.test(t)
    } catch (e) {
      returnfalse
    }
  },
  o = function(e) {
    try {
      if (s(e)) returnfalse;
      return r.call(e), true
    } catch (e) {
      returnfalse
    }
  },
  l = Object.prototype.toString,
  c = "[object Object]",
  u = "[object Function]",
  d = "[object GeneratorFunction]",
  f = "[object HTMLAllCollection]",
  p = "[object HTML document.all class]",
  _ = "[object HTMLCollection]",
  h = "function" == typeof Symbol && !!Symbol.toStringTag,
  m = !(0 in [, ]),
  g = function() {
    returnfalse
  };
if ("object" == typeof document) {
  var E = document.all;
  l.call(E) === l.call(document.all) && (g = function(e) {
    if ((m || !e) && (true === e || "object" == typeof e)) try {
      var t = l.call(e);
      return (t === f || t === p || t === _ || t === c) && null == e("")
    } catch (e) {}
    returnfalse
  })
}
module.exports = i ? function(e) {
  if (g(e)) returntrue;
  if (!e || "function" != typeof e && "object" != typeof e) returnfalse;
  try {
    i(e, null, t)
  } catch (e) {
    if (e !== n) returnfalse
  }
  return !s(e) && o(e)
} : function(e) {
  if (g(e)) returntrue;
  if (!e || "function" != typeof e && "object" != typeof e) returnfalse;
  if (h) return o(e);
  if (s(e)) returnfalse;
  var t = l.call(e);
  return (t === u || t === d || !!/^\[object HTML/.test(t)) && o(e)
}