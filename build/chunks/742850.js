/** Chunk was on web.js **/
/** chunk id: 742850, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk46015 = require("./46015.js"),
  i = Error,
  a = Chunk46015("".replace),
  o = function(e) {
    return String(new i(e).stack)
  }("zxcasd"),
  s = /\n\s*at [^:]*:[^\n]*/,
  l = s.test(o);
module.exports = function(e, t) {
  if (l && "string" == typeof e && !i.prepareStackTrace)
    for (; t--;) e = a(e, s, "");
  return e
}