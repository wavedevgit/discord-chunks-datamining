/** Chunk was on web.js **/
/** chunk id: 594077, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk745872 = require("./745872.js"),
  Chunk166691 = require("./166691.js"),
  Chunk48511 = require("./48511.js"),
  Chunk579040 = require("./579040.js"),
  Chunk815329 = require("./815329.js"),
  l = Chunk745872("%WeakMap%", true),
  c = Chunk166691("WeakMap.prototype.get", true),
  u = Chunk166691("WeakMap.prototype.set", true),
  d = Chunk166691("WeakMap.prototype.has", true),
  f = Chunk166691("WeakMap.prototype.delete", true);
module.exports = l ? function() {
  var e, t, n = {
    assert: function(e) {
      if (!n.has(e)) throw new s("Side channel does not contain " + a(e))
    },
    delete: function(n) {
      if (l && n && ("object" == typeof n || "function" == typeof n)) {
        if (e) return f(e, n)
      } else if (o && t) return t.delete(n);
      returnfalse
    },
    get: function(n) {
      return l && n && ("object" == typeof n || "function" == typeof n) && e ? c(e, n) : t && t.get(n)
    },
    has: function(n) {
      return l && n && ("object" == typeof n || "function" == typeof n) && e ? d(e, n) : !!t && t.has(n)
    },
    set: function(n, r) {
      l && n && ("object" == typeof n || "function" == typeof n) ? (e || (e = new l), u(e, n, r)) : o && (t || (t = o()), t.set(n, r))
    }
  };
  return n
} : Chunk579040