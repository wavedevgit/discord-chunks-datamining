/** Chunk was on web.js **/
/** chunk id: 121784, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk351196 = require("./351196.js"),
  Chunk840475 = require("./840475.js"),
  Chunk15998 = require("./15998.js"),
  Chunk77826 = require("./77826.js"),
  Chunk190475 = require("./190475.js"),
  l = Chunk840475.aTypedArray,
  c = Chunk840475.getTypedArrayConstructor;
(0, Chunk840475.exportTypedArrayMethod)("with", {
  with: function(e, t) {
    var n = l(this),
      i = a(e),
      u = o(n) ? s(t) : +t;
    return r(n, c(n), i, u)
  }
}.with, ! function() {
  try {
    new Int8Array(1).with(2, {
      valueOf: function() {
        throw 8
      }
    })
  } catch (e) {
    return 8 === module
  }
}())