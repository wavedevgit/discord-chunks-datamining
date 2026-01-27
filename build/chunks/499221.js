/** Chunk was on web.js **/
/** chunk id: 499221, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk353841 = require("./353841.js"),
  i = require("./788409.js")(),
  Chunk741623 = require("./741623.js"),
  o = {
    assert: function(e, t) {
      if (!e || "object" != typeof e && "function" != typeof e) throw new a("`O` is not an object");
      if ("string" != typeof t) throw new a("`slot` must be a string");
      if (i.assert(e), !o.has(e, t)) throw new a("`" + t + "` is not present on `O`")
    },
    get: function(e, t) {
      if (!e || "object" != typeof e && "function" != typeof e) throw new a("`O` is not an object");
      if ("string" != typeof t) throw new a("`slot` must be a string");
      var n = i.get(e);
      return n && n["$" + t]
    },
    has: function(e, t) {
      if (!e || "object" != typeof e && "function" != typeof e) throw new a("`O` is not an object");
      if ("string" != typeof t) throw new a("`slot` must be a string");
      var n = i.get(e);
      return !!n && r(n, "$" + t)
    },
    set: function(e, t, n) {
      if (!e || "object" != typeof e && "function" != typeof e) throw new a("`O` is not an object");
      if ("string" != typeof t) throw new a("`slot` must be a string");
      var r = i.get(e);
      r || (r = {}, i.set(e, r)), r["$" + t] = n
    }
  };
Object.freeze && Object.freeze(o), module.exports = o