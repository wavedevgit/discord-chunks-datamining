/** Chunk was on web.js **/
/** chunk id: 323874, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk693655 = require("./693655.js"),
  Chunk410323 = require("./410323.js"),
  Chunk304880 = require("./304880.js"),
  Chunk627 = require("./627.js"),
  o = URLSearchParams,
  l = o.prototype,
  c = Chunk410323(l.append),
  u = Chunk410323(l.delete),
  d = Chunk410323(l.forEach),
  f = Chunk410323([].push),
  p = new o("a=1&a=2&b=3");
p.delete("a", 1), p.delete("b", true), p + "" != "a=2" && Chunk693655(l, "delete", function(e) {
  var t, n = arguments.length,
    r = n < 2 ? true : arguments[1];
  if (n && true === r) return u(this, e);
  var i = [];
  d(this, function(e, t) {
    f(i, {
      key: t,
      value: e
    })
  }), s(n, 1);
  for (var o = a(e), l = a(r), p = 0, _ = 0, h = false, m = i.length; p < m;) t = i[p++], h || t.key === o ? (h = true, u(this, t.key)) : _++;
  for (; _ < m;)((t = i[_++]).key !== o || t.value !== l) && c(this, t.key, t.value)
}, {
  enumerable: true,
  unsafe: true
})