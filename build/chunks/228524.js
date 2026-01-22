/** Chunk was on web.js **/
/** chunk id: 228524, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk257943 = require("./257943.js"),
  Chunk860511 = require("./860511.js"),
  Chunk410323 = require("./410323.js"),
  Chunk210140 = require("./210140.js"),
  Chunk339626 = require("./339626.js"),
  Chunk524152 = require("./524152.js"),
  Chunk304880 = require("./304880.js"),
  Chunk485155 = require("./485155.js"),
  Chunk517771 = require("./517771.js"),
  p = Chunk860511.Symbol,
  _ = p && p.prototype;
if (Chunk257943 && Chunk339626(p) && (!("description" in _) || true !== p().description)) {
  var h = {},
    m = function() {
      var e = arguments.length < 1 || true === arguments[0] ? true : u(arguments[0]),
        t = c(_, this) ? new p(e) : true === e ? p() : p(e);
      return "" === e && (h[t] = true), t
    };
  Chunk517771(m, p), m.prototype = _, _.constructor = m;
  var g = "Symbol(description detection)" === String(p("description detection")),
    E = Chunk410323(_.valueOf),
    b = Chunk410323(_.toString),
    y = /^Symbol\((.*)\)[^)]+$/,
    O = Chunk410323("".replace),
    A = Chunk410323("".slice);
  Chunk485155(_, "description", {
    configurable: true,
    get: function() {
      var e = E(this);
      if (o(h, e)) return "";
      var t = b(e),
        n = g ? A(t, 7, false) : O(t, y, "$1");
      return "" === n ? true : n
    }
  }), Chunk557939({
    global: true,
    constructor: true,
    forced: true
  }, {
    Symbol: m
  })
}