/** Chunk was on web.js **/
/** chunk id: 91520, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, a, o, s, Chunk127849 = require("./127849.js"),
  Chunk242606 = require("./242606.js"),
  Chunk48657 = require("./48657.js"),
  d = require("./390827.js").set,
  Chunk557655 = require("./557655.js"),
  Chunk266782 = require("./266782.js"),
  Chunk225991 = require("./225991.js"),
  Chunk787898 = require("./787898.js"),
  Chunk426625 = require("./426625.js"),
  g = Chunk127849.MutationObserver || Chunk127849.WebKitMutationObserver,
  E = Chunk127849.document,
  b = Chunk127849.process,
  y = Chunk127849.Promise,
  O = Chunk242606("queueMicrotask");
if (!O) {
  var v = new Chunk557655,
    S = function() {
      var e, t;
      for (h && (e = b.domain) && e.exit(); t = v.get();) try {
        t()
      } catch (e) {
        throw v.head && r(), e
      }
      e && e.enter()
    };
  Chunk266782 || Chunk426625 || Chunk787898 || !g || !E ? !Chunk225991 && y && y.resolve ? ((o = y.resolve(true)).constructor = y, s = Chunk48657(o.then, o), r = function() {
    s(S)
  }) : Chunk426625 ? r = function() {
    b.nextTick(S)
  } : (d = Chunk48657(d, Chunk127849), r = function() {
    d(S)
  }) : (i = true, a = E.createTextNode(""), new g(S).observe(a, {
    characterData: true
  }), r = function() {
    a.data = i = !i
  }), O = function(e) {
    v.head || r(), v.add(e)
  }
}
module.exports = O