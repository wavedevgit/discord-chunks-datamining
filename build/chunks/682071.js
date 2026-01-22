/** Chunk was on 94678 **/
/** chunk id: 682071, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk958498 = require("./958498.js"),
  Chunk299632 = require("./299632.js"),
  Chunk158610 = require("./158610.js"),
  Chunk605944 = require("./605944.js"),
  u = require("./164336.js").f,
  Chunk735451 = require("./735451.js"),
  Chunk739146 = require("./739146.js"),
  Chunk780940 = require("./780940.js"),
  Chunk414123 = require("./414123.js"),
  l = "Array Iterator",
  v = Chunk605944.set,
  y = Chunk605944.getterFor(l);
module.exports = Chunk735451(Array, "Array", function(t, r) {
  v(this, {
    type: l,
    target: n(t),
    index: 0,
    kind: r
  })
}, function() {
  var t = y(this),
    r = t.target,
    e = t.index++;
  if (!r || e >= r.length) return t.target = null, a(true, true);
  switch (t.kind) {
    case "keys":
      return a(e, false);
    case "values":
      return a(r[e], false)
  }
  return a([e, r[e]], false)
}, "values");
var h = Chunk158610.Arguments = Chunk158610.Array;
if (Chunk299632("keys"), Chunk299632("values"), Chunk299632("entries"), !Chunk780940 && Chunk414123 && "values" !== h.name) try {
  u(h, "name", {
    value: "values"
  })
} catch (t) {}