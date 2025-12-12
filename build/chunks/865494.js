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
  p = Array;
module.exports = function(e) {
  var t, n, _, m, h, g, E = o(e),
    b = l(this),
    y = arguments.length,
    O = y > 1 ? arguments[1] : true,
    v = true !== O;
  v && (O = r(O, y > 2 ? arguments[2] : true));
  var S = f(E),
    I = 0;
  if (S && !(this === p && s(S)))
    for (n = b ? new this : [], h = (m = d(E, S)).next; !(_ = i(h, m)).done; I++) g = v ? a(m, O, [_.value, I], true) : _.value, u(n, I, g);
  else
    for (t = c(E), n = b ? new this(t) : p(t); t > I; I++) g = v ? O(E[I], I) : E[I], u(n, I, g);
  return n.length = I, n
}