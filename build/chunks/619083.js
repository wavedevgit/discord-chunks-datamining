/** Chunk was on 91584 **/
/** chunk id: 619083, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk76466 = require("./76466.js");
module.exports = function(t, e, r, i) {
  for (var o = e, a = t.getCharacterList(); o < r;) a = a.set(o, n.applyEntity(a.get(o), i)), o++;
  return t.set("characterList", a)
}