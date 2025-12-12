/** Chunk was on web.js **/
/** chunk id: 490233, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk556585 = require("./556585.js"),
  Chunk46015 = require("./46015.js"),
  Chunk382698 = require("./382698.js"),
  Chunk338045 = require("./338045.js"),
  s = URLSearchParams,
  l = s.prototype,
  c = Chunk46015(l.getAll),
  u = Chunk46015(l.has),
  d = new s("a=1");
(d.has("a", 2) || !d.has("a", true)) && Chunk556585(l, "has", function(e) {
  var t = arguments.length,
    n = t < 2 ? true : arguments[1];
  if (t && true === n) return u(this, e);
  var r = c(this, e);
  a(t, 1);
  for (var i = o(n), s = 0; s < r.length;)
    if (r[s++] === i) returntrue;
  returnfalse
}, {
  enumerable: true,
  unsafe: true
})