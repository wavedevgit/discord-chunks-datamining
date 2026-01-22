/** Chunk was on web.js **/
/** chunk id: 788409, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk741623 = require("./741623.js"),
  Chunk315646 = require("./315646.js"),
  Chunk363364 = require("./363364.js"),
  Chunk12161 = require("./12161.js"),
  o = require("./158056.js") || Chunk12161 || Chunk363364;
module.exports = function() {
  var e, t = {
    assert: function(e) {
      if (!t.has(e)) throw new r("Side channel does not contain " + i(e))
    },
    delete: function(t) {
      return !!e && e.delete(t)
    },
    get: function(t) {
      return e && e.get(t)
    },
    has: function(t) {
      return !!e && e.has(t)
    },
    set: function(t, n) {
      e || (e = o()), e.set(t, n)
    }
  };
  return t
}