/** Chunk was on web.js **/
/** chunk id: 537908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk491301 = require("./491301.js");

function i(e, t) {
  if ("object" != (0, r.A)(e) || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (true !== n) {
    var i = n.call(e, t || "default");
    if ("object" != (0, r.A)(i)) return i;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}