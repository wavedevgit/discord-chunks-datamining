/** Chunk was on 66382 **/
/** chunk id: 416900, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk934563 = require("./934563.js"),
  o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  a = /\\(\\)?/g;
let i = (0, Chunk934563.Z)(function(e) {
  var t = [];
  return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, function(e, r, n, o) {
    t.push(n ? o.replace(a, "$1") : r || e)
  }), t
})