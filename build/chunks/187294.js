/** Chunk was on web.js **/
/** chunk id: 187294, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk221015 = require("./221015.js"),
  Chunk446474 = require("./446474.js"),
  Chunk721339 = require("./721339.js"),
  Chunk250594 = require("./250594.js"),
  Chunk503199 = require("./503199.js"),
  Chunk327036 = require("./327036.js"),
  Chunk331336 = require("./331336.js"),
  Chunk151860 = require("./151860.js"),
  Chunk464046 = require("./464046.js"),
  f = require("./739305.js").aTypedArrayConstructor,
  Chunk900923 = require("./900923.js");
module.exports = function(e) {
  var t, n, _, h, m, g, E, b, y = a(this),
    O = s(e),
    A = arguments.length,
    v = A > 1 ? arguments[1] : true,
    S = true !== v,
    I = c(O);
  if (I && !u(I))
    for (b = (E = l(O, I)).next, O = []; !(g = i(b, E)).done;) O.push(g.value);
  for (S && A > 2 && (v = r(v, arguments[2])), n = o(O), h = d(_ = new(f(y))(n)), t = 0; n > t; t++) m = S ? v(O[t], t) : O[t], _[t] = h ? p(m) : +m;
  return _
}