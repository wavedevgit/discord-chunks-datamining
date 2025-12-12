/** Chunk was on web.js **/
/** chunk id: 522169, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk48657 = require("./48657.js"),
  Chunk580983 = require("./580983.js"),
  Chunk385903 = require("./385903.js"),
  Chunk527160 = require("./527160.js"),
  Chunk914331 = require("./914331.js"),
  Chunk533610 = require("./533610.js"),
  Chunk800054 = require("./800054.js"),
  Chunk760725 = require("./760725.js"),
  Chunk15998 = require("./15998.js"),
  f = require("./840475.js").aTypedArrayConstructor,
  Chunk190475 = require("./190475.js");
module.exports = function(e) {
  var t, n, _, m, h, g, E, b, y = o(this),
    O = a(e),
    v = arguments.length,
    S = v > 1 ? arguments[1] : true,
    I = true !== S,
    T = c(O);
  if (T && !u(T))
    for (b = (E = l(O, T)).next, O = []; !(g = i(b, E)).done;) O.push(g.value);
  for (I && v > 2 && (S = r(S, arguments[2])), n = s(O), m = d(_ = new(f(y))(n)), t = 0; n > t; t++) h = I ? S(O[t], t) : O[t], _[t] = m ? p(h) : +h;
  return _
}