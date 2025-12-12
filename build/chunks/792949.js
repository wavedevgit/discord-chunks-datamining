/** Chunk was on web.js **/
/** chunk id: 792949, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk804336 = require("./804336.js"),
  Chunk201187 = require("./201187.js"),
  Chunk34533 = require("./34533.js"),
  Chunk622788 = require("./622788.js"),
  Chunk261768 = require("./261768.js"),
  Chunk983018 = require("./983018.js"),
  Chunk154605 = require("./154605.js"),
  Chunk255914 = require("./255914.js"),
  Chunk848894 = require("./848894.js"),
  Chunk166691 = require("./166691.js"),
  Chunk934660 = require("./934660.js"),
  _ = Object("a"),
  m = "a" !== _[0] || !(0 in _),
  h = Chunk166691("String.prototype.split");
module.exports = function(e) {
  var t, n = u(this),
    f = c((m && p(n) ? h(n, "") : n).length);
  if (!l(e)) throw TypeError("Array.prototype.map callback must be a function");
  arguments.length > 1 && (t = arguments[1]);
  for (var _ = r(n, f), g = 0; g < f;) {
    var E = d(g);
    if (s(n, E)) {
      var b = i(e, t, [o(n, E), g, n]);
      a(_, E, b)
    }
    g += 1
  }
  return _
}