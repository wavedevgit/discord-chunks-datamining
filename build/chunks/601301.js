/** Chunk was on 94678 **/
/** chunk id: 601301, original params: t,r,e (module,exports,require) **/
"use strict";
var n = require("./34714.js").charAt,
  Chunk57284 = require("./57284.js"),
  Chunk605944 = require("./605944.js"),
  Chunk735451 = require("./735451.js"),
  Chunk739146 = require("./739146.js"),
  c = "String Iterator",
  a = Chunk605944.set,
  f = Chunk605944.getterFor(c);
Chunk735451(String, "String", function(t) {
  a(this, {
    type: c,
    string: o(t),
    index: 0
  })
}, function() {
  var t, r = f(this),
    e = r.string,
    o = r.index;
  return o >= e.length ? u(true, true) : (t = n(e, o), r.index += t.length, u(t, false))
})