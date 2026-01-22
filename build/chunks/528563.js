/** Chunk was on 47950 **/
/** chunk id: 528563, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk8215 = require("./8215.js"),
  o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  a = /\\(\\)?/g;
let i = (0, Chunk8215.A)(function(e) {
  var t = [];
  return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, function(e, r, n, o) {
    t.push(n ? o.replace(a, "$1") : r || e)
  }), t
})