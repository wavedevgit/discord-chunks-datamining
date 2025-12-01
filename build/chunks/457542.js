/** Chunk was on web.js **/
/** chunk id: 457542, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk511696 = require("./511696.js"),
  Chunk630489 = require("./630489.js"),
  Chunk621523 = require("./621523.js"),
  Chunk154028 = require("./154028.js"),
  Chunk880181 = require("./880181.js"),
  Chunk733375 = require("./733375.js"),
  Chunk423582 = require("./423582.js"),
  Chunk556585 = require("./556585.js"),
  f = Chunk630489 && Chunk630489.prototype;
if (Chunk98405({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!Chunk630489 && Chunk621523(function() {
      f.finally.call({
        then: function() {}
      }, function() {})
    })
  }, {
    finally: function(e) {
      var t = c(this, s("Promise")),
        n = l(e);
      return this.then(n ? function(n) {
        return u(t, e()).then(function() {
          return n
        })
      } : e, n ? function(n) {
        return u(t, e()).then(function() {
          throw n
        })
      } : e)
    }
  }), !Chunk511696 && Chunk880181(Chunk630489)) {
  var p = Chunk154028("Promise").prototype.finally;
  f.finally !== p && Chunk556585(f, "finally", p, {
    unsafe: true
  })
}