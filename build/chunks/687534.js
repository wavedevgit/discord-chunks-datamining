/** Chunk was on 35511 **/
/** chunk id: 687534, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk675879 = require("./675879.js"),
  a = Error,
  o = Chunk675879("".replace),
  i = String(new a("zxcasd").stack),
  s = /\n\s*at [^:]*:[^\n]*/,
  l = s.test(i);
module.exports = function(e, t) {
  if (l && "string" == typeof e && !a.prepareStackTrace)
    for (; t--;) e = o(e, s, "");
  return e
}