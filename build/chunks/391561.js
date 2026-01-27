/** Chunk was on 38939 **/
/** chunk id: 391561, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk387739 = require("./387739.js");
module.exports = function(t, e, r, i) {
  for (var o = e, a = t.getCharacterList(); o < r;) a = a.set(o, n.applyEntity(a.get(o), i)), o++;
  return t.set("characterList", a)
}