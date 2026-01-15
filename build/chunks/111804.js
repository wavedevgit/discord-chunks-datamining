/** Chunk was on web.js **/
/** chunk id: 111804, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk556585 = require("./556585.js"),
  Chunk46015 = require("./46015.js"),
  Chunk382698 = require("./382698.js"),
  Chunk338045 = require("./338045.js"),
  s = URLSearchParams,
  l = s.prototype,
  c = Chunk46015(l.append),
  u = Chunk46015(l.delete),
  d = Chunk46015(l.forEach),
  f = Chunk46015([].push),
  p = new s("a=1&a=2&b=3");
p.delete("a", 1), p.delete("b", true), p + "" != "a=2" && Chunk556585(l, "delete", function(e) {
  var t, n = arguments.length,
    r = n < 2 ? true : arguments[1];
  if (n && true === r) return u(this, e);
  var i = [];
  d(this, function(e, t) {
    f(i, {
      key: t,
      value: e
    })
  }), o(n, 1);
  for (var s = a(e), l = a(r), p = 0, _ = 0, h = false, m = i.length; p < m;) t = i[p++], h || t.key === s ? (h = true, u(this, t.key)) : _++;
  for (; _ < m;)((t = i[_++]).key !== s || t.value !== l) && c(this, t.key, t.value)
}, {
  enumerable: true,
  unsafe: true
})