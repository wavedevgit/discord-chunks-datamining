/** Chunk was on web.js **/
/** chunk id: 14289, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk693655 = require("./693655.js"),
  Chunk410323 = require("./410323.js"),
  Chunk304880 = require("./304880.js"),
  Chunk627 = require("./627.js"),
  o = URLSearchParams,
  l = o.prototype,
  c = Chunk410323(l.getAll),
  u = Chunk410323(l.has),
  d = new o("a=1");
(d.has("a", 2) || !d.has("a", true)) && Chunk693655(l, "has", function(e) {
  var t = arguments.length,
    n = t < 2 ? true : arguments[1];
  if (t && true === n) return u(this, e);
  var r = c(this, e);
  s(t, 1);
  for (var i = a(n), o = 0; o < r.length;)
    if (r[o++] === i) returntrue;
  returnfalse
}, {
  enumerable: true,
  unsafe: true
})