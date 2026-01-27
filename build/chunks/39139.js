/** Chunk was on web.js **/
/** chunk id: 39139, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk581390 = require("./581390.js"),
  Chunk633228 = require("./633228.js"),
  Chunk70670 = require("./70670.js"),
  Chunk883972 = require("./883972.js"),
  s = require("./4940.js").f,
  Chunk661495 = require("./661495.js"),
  Chunk503902 = require("./503902.js"),
  Chunk105712 = require("./105712.js"),
  Chunk257943 = require("./257943.js"),
  f = "Array Iterator",
  p = Chunk883972.set,
  _ = Chunk883972.getterFor(f);
module.exports = Chunk661495(Array, "Array", function(e, t) {
  p(this, {
    type: f,
    target: r(e),
    index: 0,
    kind: t
  })
}, function() {
  var e = _(this),
    t = e.target,
    n = e.index++;
  if (!t || n >= t.length) return e.target = null, c(true, true);
  switch (e.kind) {
    case "keys":
      return c(n, false);
    case "values":
      return c(t[n], false)
  }
  return c([n, t[n]], false)
}, "values");
var h = Chunk70670.Arguments = Chunk70670.Array;
if (Chunk633228("keys"), Chunk633228("values"), Chunk633228("entries"), !Chunk105712 && Chunk257943 && "values" !== h.name) try {
  s(h, "name", {
    value: "values"
  })
} catch (e) {}