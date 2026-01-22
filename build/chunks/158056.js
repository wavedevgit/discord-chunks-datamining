/** Chunk was on web.js **/
/** chunk id: 158056, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk439619 = require("./439619.js"),
  Chunk906046 = require("./906046.js"),
  Chunk315646 = require("./315646.js"),
  Chunk12161 = require("./12161.js"),
  Chunk741623 = require("./741623.js"),
  l = Chunk439619("%WeakMap%", true),
  c = Chunk906046("WeakMap.prototype.get", true),
  u = Chunk906046("WeakMap.prototype.set", true),
  d = Chunk906046("WeakMap.prototype.has", true),
  f = Chunk906046("WeakMap.prototype.delete", true);
module.exports = l ? function() {
  var e, t, n = {
    assert: function(e) {
      if (!n.has(e)) throw new o("Side channel does not contain " + a(e))
    },
    delete: function(n) {
      if (l && n && ("object" == typeof n || "function" == typeof n)) {
        if (e) return f(e, n)
      } else if (s && t) return t.delete(n);
      returnfalse
    },
    get: function(n) {
      return l && n && ("object" == typeof n || "function" == typeof n) && e ? c(e, n) : t && t.get(n)
    },
    has: function(n) {
      return l && n && ("object" == typeof n || "function" == typeof n) && e ? d(e, n) : !!t && t.has(n)
    },
    set: function(n, r) {
      l && n && ("object" == typeof n || "function" == typeof n) ? (e || (e = new l), u(e, n, r)) : s && (t || (t = s()), t.set(n, r))
    }
  };
  return n
} : Chunk12161