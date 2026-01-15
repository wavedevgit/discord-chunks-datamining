/** Chunk was on web.js **/
/** chunk id: 366843, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk146063 = require("./146063.js"),
  Chunk967333 = require("./967333.js"),
  Chunk933121 = require("./933121.js"),
  Chunk199838 = require("./199838.js"),
  s = require("./117895.js").f,
  Chunk130006 = require("./130006.js"),
  Chunk682564 = require("./682564.js"),
  Chunk511696 = require("./511696.js"),
  Chunk507604 = require("./507604.js"),
  f = "Array Iterator",
  p = Chunk199838.set,
  _ = Chunk199838.getterFor(f);
module.exports = Chunk130006(Array, "Array", function(e, t) {
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
var h = Chunk933121.Arguments = Chunk933121.Array;
if (Chunk967333("keys"), Chunk967333("values"), Chunk967333("entries"), !Chunk511696 && Chunk507604 && "values" !== h.name) try {
  s(h, "name", {
    value: "values"
  })
} catch (e) {}