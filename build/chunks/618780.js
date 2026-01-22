/** Chunk was on 35511 **/
/** chunk id: 618780, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk123245 = require("./123245.js"),
  Chunk299964 = require("./299964.js");

function o(e, t) {
  if ("object" != (0, r.A)(e) || !e) return e;
  var n = e[a];
  if (true !== n) {
    var o = n.call(e, t || "default");
    if ("object" != (0, r.A)(o)) return o;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}