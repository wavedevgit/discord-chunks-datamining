/** Chunk was on 23357 **/
/** chunk id: 672606, original params: e,t,n (module,exports,require) **/
"use strict";
var r, o, a, i, s, Chunk424353 = require("./424353.js"),
  Chunk236264 = require("./236264.js"),
  Chunk324474 = require("./324474.js"),
  d = require("./430805.js").set,
  Chunk61189 = require("./61189.js"),
  Chunk179156 = require("./179156.js"),
  Chunk470892 = require("./470892.js"),
  Chunk883343 = require("./883343.js"),
  Chunk270301 = require("./270301.js"),
  v = Chunk424353.MutationObserver || Chunk424353.WebKitMutationObserver,
  g = Chunk424353.document,
  b = Chunk424353.process,
  _ = Chunk424353.Promise,
  k = Chunk236264("queueMicrotask");
if (!k) {
  var C = new Chunk61189,
    Z = function() {
      var e, t;
      for (y && (e = b.domain) && e.exit(); t = C.get();) try {
        t()
      } catch (e) {
        throw C.head && r(), e
      }
      e && e.enter()
    };
  Chunk179156 || Chunk270301 || Chunk883343 || !v || !g ? !Chunk470892 && _ && _.resolve ? ((i = _.resolve(true)).constructor = _, s = Chunk324474(i.then, i), r = function() {
    s(Z)
  }) : Chunk270301 ? r = function() {
    b.nextTick(Z)
  } : (d = Chunk324474(d, Chunk424353), r = function() {
    d(Z)
  }) : (o = true, a = g.createTextNode(""), new v(Z).observe(a, {
    characterData: true
  }), r = function() {
    a.data = o = !o
  }), k = function(e) {
    C.head || r(), C.add(e)
  }
}
module.exports = k