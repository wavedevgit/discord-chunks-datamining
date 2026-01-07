/** Chunk was on web.js **/
/** chunk id: 260674, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk815329 = require("./815329.js"),
  Chunk48511 = require("./48511.js"),
  Chunk323240 = require("./323240.js"),
  Chunk579040 = require("./579040.js"),
  s = require("./594077.js") || Chunk579040 || Chunk323240;
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
      e || (e = s()), e.set(t, n)
    }
  };
  return t
}