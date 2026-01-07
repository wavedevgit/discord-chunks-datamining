/** Chunk was on web.js **/
/** chunk id: 435622, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./471540.js").charAt,
  Chunk382698 = require("./382698.js"),
  Chunk199838 = require("./199838.js"),
  Chunk130006 = require("./130006.js"),
  Chunk682564 = require("./682564.js"),
  l = "String Iterator",
  c = Chunk199838.set,
  u = Chunk199838.getterFor(l);
Chunk130006(String, "String", function(e) {
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