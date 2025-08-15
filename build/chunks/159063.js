/** Chunk was on 8381 **/
/** chunk id: 159063, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk359282 = require("./359282.js");
module.exports = function(t, e, r, i) {
  for (var o = e, a = t.getCharacterList(); o < r;) a = a.set(o, n.applyEntity(a.get(o), i)), o++;
  return t.set("characterList", a)
}