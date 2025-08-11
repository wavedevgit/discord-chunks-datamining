/** Chunk was on web.js **/
/** chunk id: 880181, original params: e (module,exports,re quire) **/
"use strict";
var t = "object" == typeof document && document.all;
module.exports = true === t && true !== t ? function(e) {
  return "function" == typeof e || e === t
} : function(e) {
  return "function" == typeof e
}