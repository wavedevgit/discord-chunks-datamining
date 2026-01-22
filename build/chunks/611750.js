/** Chunk was on 35511 **/
/** chunk id: 611750, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk780940 = require("./780940.js"),
  o = require("./976467.js").CONSTRUCTOR,
  Chunk145595 = require("./145595.js"),
  Chunk683570 = require("./683570.js"),
  Chunk309270 = require("./309270.js"),
  Chunk735811 = require("./735811.js"),
  u = Chunk145595 && Chunk145595.prototype;
if (Chunk834647({
    target: "Promise",
    proto: true,
    forced: o,
    real: true
  }, {
    catch: function(e) {
      return this.then(true, e)
    }
  }), !Chunk780940 && Chunk309270(Chunk145595)) {
  var d = Chunk683570("Promise").prototype.catch;
  u.catch !== d && Chunk735811(u, "catch", d, {
    unsafe: true
  })
}