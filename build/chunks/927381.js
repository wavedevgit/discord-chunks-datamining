/** Chunk was on 23357 **/
/** chunk id: 927381, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk253462 = require("./253462.js"),
  Chunk57100 = require("./57100.js"),
  Chunk779688 = require("./779688.js"),
  Chunk178476 = require("./178476.js"),
  Chunk971428 = require("./971428.js"),
  Chunk444529 = require("./444529.js"),
  Chunk933958 = require("./933958.js"),
  Chunk342930 = require("./342930.js"),
  p = Chunk57100 && Chunk57100.prototype;
if (Chunk220159({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!Chunk57100 && Chunk779688(function() {
      p.finally.call({
        then: function() {}
      }, function() {})
    })
  }, {
    finally: function(e) {
      var t = l(this, s("Promise")),
        n = c(e);
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
  }), !Chunk253462 && Chunk971428(Chunk57100)) {
  var h = Chunk178476("Promise").prototype.finally;
  p.finally !== h && Chunk342930(p, "finally", h, {
    unsafe: true
  })
}