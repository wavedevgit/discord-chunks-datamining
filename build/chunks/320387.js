/** Chunk was on web.js **/
/** chunk id: 320387, original params: e (module,exports,re quire) **/
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
var o = /^\s*class\b/,
  a = function(e) {
    try {
      var t = r.call(e);
      return o.test(t)
    } catch (e) {
      returnfalse
    }
  },
  s = function(e) {
    try {
      if (a(e)) returnfalse;
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
  m = "function" == typeof Symbol && !!Symbol.toStringTag,
  h = !(0 in [, ]),
  g = function() {
    returnfalse
  };
if ("object" == typeof document) {
  var E = document.all;
  l.call(E) === l.call(document.all) && (g = function(e) {
    if ((h || !e) && (true === e || "object" == typeof e)) try {
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
  return !a(e) && s(e)
} : function(e) {
  if (g(e)) returntrue;
  if (!e || "function" != typeof e && "object" != typeof e) returnfalse;
  if (m) return s(e);
  if (a(e)) returnfalse;
  var t = l.call(e);
  return (t === u || t === d || !!/^\[object HTML/.test(t)) && s(e)
}