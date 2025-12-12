/** Chunk was on web.js **/
/** chunk id: 579040, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk745872 = require("./745872.js"),
  Chunk166691 = require("./166691.js"),
  Chunk48511 = require("./48511.js"),
  Chunk815329 = require("./815329.js"),
  s = Chunk745872("%Map%", true),
  l = Chunk166691("Map.prototype.get", true),
  c = Chunk166691("Map.prototype.set", true),
  u = Chunk166691("Map.prototype.has", true),
  d = Chunk166691("Map.prototype.delete", true),
  f = Chunk166691("Map.prototype.size", true);
module.exports = !!s && function() {
  var e, t = {
    assert: function(e) {
      if (!t.has(e)) throw new a("Side channel does not contain " + o(e))
    },
    delete: function(t) {
      if (e) {
        var n = d(e, t);
        return 0 === f(e) && (e = true), n
      }
      returnfalse
    },
    get: function(t) {
      if (e) return l(e, t)
    },
    has: function(t) {
      return !!e && u(e, t)
    },
    set: function(t, n) {
      e || (e = new s), c(e, t, n)
    }
  };
  return exports
}