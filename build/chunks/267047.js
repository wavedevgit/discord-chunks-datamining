/** Chunk was on 50448 **/
/** chunk id: 267047, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk658971 = require("./658971.js"),
  Chunk855802 = require("./855802.js"),
  Chunk903438 = require("./903438.js"),
  Chunk89416 = require("./89416.js"),
  s = require("./85328.js").f,
  Chunk689591 = require("./689591.js"),
  Chunk787899 = require("./787899.js"),
  Chunk253462 = require("./253462.js"),
  Chunk181794 = require("./181794.js"),
  l = "Array Iterator",
  v = Chunk89416.set,
  y = Chunk89416.getterFor(l);
module.exports = Chunk689591(Array, "Array", function(t, r) {
  v(this, {
    type: l,
    target: e(t),
    index: 0,
    kind: r
  })
}, function() {
  var t = y(this),
    r = t.target,
    n = t.index++;
  if (!r || n >= r.length) return t.target = null, f(true, true);
  switch (t.kind) {
    case "keys":
      return f(n, false);
    case "values":
      return f(r[n], false)
  }
  return f([n, r[n]], false)
}, "values");
var h = Chunk903438.Arguments = Chunk903438.Array;
if (Chunk855802("keys"), Chunk855802("values"), Chunk855802("entries"), !Chunk253462 && Chunk181794 && "values" !== h.name) try {
  s(h, "name", {
    value: "values"
  })
} catch (t) {}