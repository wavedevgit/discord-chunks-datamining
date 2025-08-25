/** Chunk was on web.js **/
/** chunk id: 619083, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk76466 = require("./76466.js");
module.exports = function(e, t, n, i) {
  for (var o = t, a = e.getCharacterList(); o < n;) a = a.set(o, r.applyEntity(a.get(o), i)), o++;
  return e.set("characterList", a)
}