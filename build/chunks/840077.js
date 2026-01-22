/** Chunk was on 94678 **/
/** chunk id: 840077, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk308227 = require("./308227.js"),
  Chunk740456 = require("./740456.js"),
  Chunk486816 = require("./486816.js"),
  Chunk180734 = require("./180734.js"),
  Chunk554987 = require("./554987.js"),
  Chunk443216 = require("./443216.js"),
  Chunk309270 = require("./309270.js"),
  Chunk407057 = require("./407057.js"),
  Chunk421212 = require("./421212.js"),
  Chunk469516 = require("./469516.js"),
  y = require("./164336.js").f,
  h = require("./673162.js").forEach,
  Chunk414123 = require("./414123.js"),
  Chunk605944 = require("./605944.js"),
  g = Chunk605944.set,
  b = Chunk605944.getterFor;
module.exports = function(t, r, e) {
  var d, m = false !== t.indexOf("Map"),
    S = false !== t.indexOf("Weak"),
    w = m ? "set" : "add",
    O = o[t],
    j = O && O.prototype,
    A = {};
  if (x && f(O) && (S || j.forEach && !i(function() {
      new O().entries().next()
    }))) {
    var E = (d = r(function(r, e) {
        g(a(r, E), {
          type: t,
          collection: new O
        }), l(e) || c(e, r[w], {
          that: r,
          AS_ENTRIES: m
        })
      })).prototype,
      T = b(t);
    h(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(t) {
      var r = "add" === t || "set" === t;
      t in j && !(S && "clear" === t) && u(E, t, function(e, n) {
        var o = T(this).collection;
        if (!r && S && !p(e)) return "get" === t && true;
        var s = o[t](0 === e ? 0 : e, n);
        return r ? this : s
      })
    }), S || y(E, "size", {
      configurable: true,
      get: function() {
        return T(this).collection.size
      }
    })
  } else d = e.getConstructor(r, t, m, w), s.enable();
  return v(d, t, false, true), A[t] = d, n({
    global: true,
    forced: true
  }, A), S || e.setStrong(d, t, m), d
}