/** Chunk was on web.js **/
/** chunk id: 964339, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk50153 = require("./50153.js");
module.exports = function(e, t, n, i) {
  for (var a = t, o = e.getCharacterList(); a < n;) o = o.set(a, r.applyEntity(o.get(a), i)), a++;
  return e.set("characterList", o)
}