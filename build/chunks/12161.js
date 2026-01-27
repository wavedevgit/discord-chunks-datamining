/** Chunk was on web.js **/
/** chunk id: 12161, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk439619 = require("./439619.js"),
  Chunk906046 = require("./906046.js"),
  Chunk315646 = require("./315646.js"),
  Chunk741623 = require("./741623.js"),
  s = Chunk439619("%Map%", true),
  l = Chunk906046("Map.prototype.get", true),
  c = Chunk906046("Map.prototype.set", true),
  u = Chunk906046("Map.prototype.has", true),
  d = Chunk906046("Map.prototype.delete", true),
  f = Chunk906046("Map.prototype.size", true);
module.exports = !!s && function() {
  var e, t = {
    assert: function(e) {
      if (!t.has(e)) throw new o("Side channel does not contain " + a(e))
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
  return t
}