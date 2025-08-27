/** Chunk was on web.js **/
/** chunk id: 619083, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk76466 = require("./76466.js");
module.exports = function(e, t, n, i) {
  for (var a = t, o = e.getCharacterList(); a < n;) o = o.set(a, r.applyEntity(o.get(a), i)), a++;
  return e.set("characterList", o)
}