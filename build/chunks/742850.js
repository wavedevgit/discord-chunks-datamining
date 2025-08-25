/** Chunk was on web.js **/
/** chunk id: 742850, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk46015 = require("./46015.js"),
  i = Error,
  o = Chunk46015("".replace),
  a = function(e) {
    return String(new i(e).stack)
  }("zxcasd"),
  s = /\n\s*at [^:]*:[^\n]*/,
  l = s.test(a);
module.exports = function(e, t) {
  if (l && "string" == typeof e && !i.prepareStackTrace)
    for (; t--;) e = o(e, s, "");
  return e
}