/** Chunk was on 23357 **/
/** chunk id: 966783, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk764908 = require("./764908.js"),
  o = Error,
  a = Chunk764908("".replace),
  i = String(new o("zxcasd").stack),
  s = /\n\s*at [^:]*:[^\n]*/,
  c = s.test(i);
module.exports = function(e, t) {
  if (c && "string" == typeof e && !o.prepareStackTrace)
    for (; t--;) e = a(e, s, "");
  return e
}