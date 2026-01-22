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
  b = Chunk860511.process,
  y = Chunk860511.Promise,
  O = Chunk745730("queueMicrotask");
if (!O) {
  var A = new Chunk246202,
    v = function() {
      var e, t;
      for (m && (e = b.domain) && e.exit(); t = A.get();) try {
        t()
      } catch (e) {
        throw A.head && r(), e
      }
      e && e.enter()
    };
  Chunk705333 || Chunk13570 || Chunk78235 || !g || !E ? !Chunk633006 && y && y.resolve ? ((s = y.resolve(true)).constructor = y, o = Chunk221015(s.then, s), r = function() {
    o(v)
  }) : Chunk13570 ? r = function() {
    b.nextTick(v)
  } : (d = Chunk221015(d, Chunk860511), r = function() {
    d(v)
  }) : (i = true, a = E.createTextNode(""), new g(v).observe(a, {
    characterData: true
  }), r = function() {
    a.data = i = !i
  }), O = function(e) {
    A.head || r(), A.add(e)
  }
}
module.exports = O