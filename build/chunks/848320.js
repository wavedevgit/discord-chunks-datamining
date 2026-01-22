/** Chunk was on 35511 **/
/** chunk id: 848320, original params: e,t,n (module,exports,require) **/
"use strict";
var r, a, o, i, s, Chunk308227 = require("./308227.js"),
  Chunk126726 = require("./126726.js"),
  Chunk241091 = require("./241091.js"),
  d = require("./282532.js").set,
  Chunk74414 = require("./74414.js"),
  Chunk124673 = require("./124673.js"),
  Chunk610594 = require("./610594.js"),
  Chunk748415 = require("./748415.js"),
  Chunk184110 = require("./184110.js"),
  v = Chunk308227.MutationObserver || Chunk308227.WebKitMutationObserver,
  g = Chunk308227.document,
  b = Chunk308227.process,
  A = Chunk308227.Promise,
  _ = Chunk126726("queueMicrotask");
if (!_) {
  var k = new Chunk74414,
    C = function() {
      var e, t;
      for (y && (e = b.domain) && e.exit(); t = k.get();) try {
        t()
      } catch (e) {
        throw k.head && r(), e
      }
      e && e.enter()
    };
  Chunk124673 || Chunk184110 || Chunk748415 || !v || !g ? !Chunk610594 && A && A.resolve ? ((i = A.resolve(true)).constructor = A, s = Chunk241091(i.then, i), r = function() {
    s(C)
  }) : Chunk184110 ? r = function() {
    b.nextTick(C)
  } : (d = Chunk241091(d, Chunk308227), r = function() {
    d(C)
  }) : (a = true, o = g.createTextNode(""), new v(C).observe(o, {
    characterData: true
  }), r = function() {
    o.data = a = !a
  }), _ = function(e) {
    k.head || r(), k.add(e)
  }
}
module.exports = _