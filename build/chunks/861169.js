/** Chunk was on web.js **/
/** chunk id: 861169, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./992366.js").charAt,
  Chunk304880 = require("./304880.js"),
  Chunk883972 = require("./883972.js"),
  Chunk661495 = require("./661495.js"),
  Chunk503902 = require("./503902.js"),
  l = "String Iterator",
  c = Chunk883972.set,
  u = Chunk883972.getterFor(l);
Chunk661495(String, "String", function(e) {
  c(this, {
    type: l,
    string: i(e),
    index: 0
  })
}, function() {
  var e, t = u(this),
    n = t.string,
    i = t.index;
  return i >= n.length ? s(true, true) : (e = r(n, i), t.index += e.length, s(e, false))
})