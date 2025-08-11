/** Chunk was on 23357 **/
/** chunk id: 268163, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk253462 = require("./253462.js"),
  a = require("./296004.js").CONSTRUCTOR,
  Chunk57100 = require("./57100.js"),
  Chunk178476 = require("./178476.js"),
  Chunk971428 = require("./971428.js"),
  Chunk342930 = require("./342930.js"),
  u = Chunk57100 && Chunk57100.prototype;
if (Chunk220159({
    target: "Promise",
    proto: true,
    forced: a,
    real: true
  }, {
    catch: function(e) {
      return this.then(true, e)
    }
  }), !Chunk253462 && Chunk971428(Chunk57100)) {
  var d = Chunk178476("Promise").prototype.catch;
  u.catch !== d && Chunk342930(u, "catch", d, {
    unsafe: true
  })
}