/** Chunk was on 50448 **/
/** chunk id: 394370, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk424353 = require("./424353.js"),
  Chunk866686 = require("./866686.js"),
  Chunk185698 = require("./185698.js"),
  Chunk290619 = require("./290619.js"),
  Chunk969493 = require("./969493.js"),
  Chunk180300 = require("./180300.js"),
  f = Chunk424353.Symbol,
  a = Chunk866686("wks"),
  p = Chunk180300 ? f.for || f : f && f.withoutSetter || Chunk290619;
module.exports = function(t) {
  return i(a, t) || (a[t] = s && i(f, t) ? f[t] : p("Symbol." + t)), a[t]
}