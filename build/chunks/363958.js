/** Chunk was on 35511 **/
/** chunk id: 363958, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk780940 = require("./780940.js"),
  Chunk145595 = require("./145595.js"),
  Chunk486816 = require("./486816.js"),
  Chunk683570 = require("./683570.js"),
  Chunk309270 = require("./309270.js"),
  Chunk304334 = require("./304334.js"),
  Chunk961549 = require("./961549.js"),
  Chunk735811 = require("./735811.js"),
  p = Chunk145595 && Chunk145595.prototype;
if (Chunk834647({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!Chunk145595 && Chunk486816(function() {
      p.finally.call({
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
  }), !Chunk780940 && Chunk309270(Chunk145595)) {
  var h = Chunk683570("Promise").prototype.finally;
  p.finally !== h && Chunk735811(p, "finally", h, {
    unsafe: true
  })
}