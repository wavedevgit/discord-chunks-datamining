/** Chunk was on web.js **/
/** chunk id: 865494, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk48657 = require("./48657.js"),
  Chunk580983 = require("./580983.js"),
  Chunk527160 = require("./527160.js"),
  Chunk11356 = require("./11356.js"),
  Chunk760725 = require("./760725.js"),
  Chunk234488 = require("./234488.js"),
  Chunk914331 = require("./914331.js"),
  Chunk480296 = require("./480296.js"),
  Chunk533610 = require("./533610.js"),
  Chunk800054 = require("./800054.js"),
  _ = Array;
module.exports = function(e) {
  var t, n, p, h, m, g, E = a(e),
    b = l(this),
    y = arguments.length,
    O = y > 1 ? arguments[1] : true,
    v = true !== O;
  v && (O = r(O, y > 2 ? arguments[2] : true));
  var I = f(E),
    S = 0;
  if (I && !(this === _ && s(I)))
    for (n = b ? new this : [], m = (h = d(E, I)).next; !(p = i(m, h)).done; S++) g = v ? o(h, O, [p.value, S], true) : p.value, u(n, S, g);
  else
    for (t = c(E), n = b ? new this(t) : _(t); t > S; S++) g = v ? O(E[S], S) : E[S], u(n, S, g);
  return n.length = S, n
}