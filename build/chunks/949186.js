/** Chunk was on web.js **/
/** chunk id: 949186, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk410323 = require("./410323.js"),
  i = Error,
  a = Chunk410323("".replace),
  s = function(e) {
    return String(new i(e).stack)
  }("zxcasd"),
  o = /\n\s*at [^:]*:[^\n]*/,
  l = o.test(s);
module.exports = function(e, t) {
  if (l && "string" == typeof e && !i.prepareStackTrace)
    for (; t--;) e = a(e, o, "");
  return e
}