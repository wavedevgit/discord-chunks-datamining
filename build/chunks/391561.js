/** Chunk was on web.js **/
/** chunk id: 391561, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk387739 = require("./387739.js");
module.exports = function(e, t, n, i) {
  for (var a = t, s = e.getCharacterList(); a < n;) s = s.set(a, r.applyEntity(s.get(a), i)), a++;
  return e.set("characterList", s)
}