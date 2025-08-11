/** Chunk was on web.js **/
/** chunk id: 159063, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk359282 = require("./359282.js");
module.exports = function(e, t, n, i) {
  for (var o = t, a = e.getCharacterList(); o < n;) a = a.set(o, r.applyEntity(a.get(o), i)), o++;
  return e.set("characterList", a)
}