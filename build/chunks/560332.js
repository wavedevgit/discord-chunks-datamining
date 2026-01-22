/** Chunk was on web.js **/
/** chunk id: 560332, original params: e (module,exports,re quire) **/
"use strict";
var t = Object.prototype.toString;
module.exports = function(e) {
  var n = t.call(e),
    r = "[object Arguments]" === n;
  return r || (r = "[object Array]" !== n && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), r
}