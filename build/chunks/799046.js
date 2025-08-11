/** Chunk was on 50448 **/
/** chunk id: 799046, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk424353 = require("./424353.js"),
  Chunk54978 = require("./54978.js"),
  Chunk779688 = require("./779688.js"),
  Chunk285007 = require("./285007.js"),
  Chunk795462 = require("./795462.js"),
  Chunk588383 = require("./588383.js"),
  Chunk971428 = require("./971428.js"),
  Chunk829575 = require("./829575.js"),
  Chunk372978 = require("./372978.js"),
  Chunk770050 = require("./770050.js"),
  y = require("./85328.js").f,
  h = require("./958288.js").forEach,
  Chunk181794 = require("./181794.js"),
  Chunk89416 = require("./89416.js"),
  g = Chunk89416.set,
  b = Chunk89416.getterFor;
module.exports = function(t, r, n) {
  var d, m = false !== t.indexOf("Map"),
    S = false !== t.indexOf("Weak"),
    w = m ? "set" : "add",
    O = o[t],
    j = O && O.prototype,
    A = {};
  if (x && a(O) && (S || j.forEach && !u(function() {
      new O().entries().next()
    }))) {
    var E = (d = r(function(r, n) {
        g(f(r, E), {
          type: t,
          collection: new O
        }), l(n) || c(n, r[w], {
          that: r,
          AS_ENTRIES: m
        })
      })).prototype,
      T = b(t);
    h(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(t) {
      var r = "add" === t || "set" === t;
      t in j && !(S && "clear" === t) && s(E, t, function(n, e) {
        var o = T(this).collection;
        if (!r && S && !p(n)) return "get" === t && true;
        var i = o[t](0 === n ? 0 : n, e);
        return r ? this : i
      })
    }), S || y(E, "size", {
      configurable: true,
      get: function() {
        return T(this).collection.size
      }
    })
  } else d = n.getConstructor(r, t, m, w), i.enable();
  return v(d, t, false, true), A[t] = d, e({
    global: true,
    forced: true
  }, A), S || n.setStrong(d, t, m), d
}