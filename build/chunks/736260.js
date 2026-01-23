/** Chunk was on web.js **/
/** chunk id: 736260, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, a, s, o, Chunk860511 = require("./860511.js"),
  Chunk745730 = require("./745730.js"),
  Chunk221015 = require("./221015.js"),
  d = require("./314144.js").set,
  Chunk246202 = require("./246202.js"),
  Chunk705333 = require("./705333.js"),
  Chunk633006 = require("./633006.js"),
  Chunk78235 = require("./78235.js"),
  Chunk13570 = require("./13570.js"),
  g = Chunk860511.MutationObserver || Chunk860511.WebKitMutationObserver,
  E = Chunk860511.document,
  y = Chunk860511.process,
  b = Chunk860511.Promise,
  O = Chunk745730("queueMicrotask");
if (!O) {
  var v = new Chunk246202,
    A = function() {
      var e, t;
      for (m && (e = y.domain) && e.exit(); t = v.get();) try {
        t()
      } catch (e) {
        throw v.head && r(), e
      }
      e && e.enter()
    };
  Chunk705333 || Chunk13570 || Chunk78235 || !g || !E ? !Chunk633006 && b && b.resolve ? ((s = b.resolve(true)).constructor = b, o = Chunk221015(s.then, s), r = function() {
    o(A)
  }) : Chunk13570 ? r = function() {
    y.nextTick(A)
  } : (d = Chunk221015(d, Chunk860511), r = function() {
    d(A)
  }) : (i = true, a = E.createTextNode(""), new g(A).observe(a, {
    characterData: true
  }), r = function() {
    a.data = i = !i
  }), O = function(e) {
    v.head || r(), v.add(e)
  }
}
module.exports = O