/** Chunk was on web.js **/
/** chunk id: 964339, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk50153 = require("./50153.js");
module.exports = function(e, t, n, i) {
  for (var o = t, a = e.getCharacterList(); o < n;) a = a.set(o, r.applyEntity(a.get(o), i)), o++;
  return e.set("characterList", a)
}