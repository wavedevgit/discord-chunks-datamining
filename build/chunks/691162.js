/** Chunk was on web.js **/
/** chunk id: 691162, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk757431 = require("./757431.js"),
  Chunk567242 = require("./567242.js"),
  Chunk933300 = require("./933300.js"),
  Chunk605468 = require("./605468.js"),
  Chunk154613 = require("./154613.js"),
  Chunk547210 = require("./547210.js"),
  Chunk475694 = require("./475694.js"),
  Chunk499018 = require("./499018.js"),
  Chunk795734 = require("./795734.js"),
  Chunk906046 = require("./906046.js"),
  Chunk400696 = require("./400696.js"),
  _ = Object("a"),
  h = "a" !== _[0] || !(0 in _),
  m = Chunk906046("String.prototype.split");
module.exports = function(e) {
  var t, n = u(this),
    f = c((h && p(n) ? m(n, "") : n).length);
  if (!l(e)) throw TypeError("Array.prototype.map callback must be a function");
  arguments.length > 1 && (t = arguments[1]);
  for (var _ = r(n, f), g = 0; g < f;) {
    var E = d(g);
    if (o(n, E)) {
      var y = i(e, t, [s(n, E), g, n]);
      a(_, E, y)
    }
    g += 1
  }
  return _
}