/** Chunk was on 94678 **/
/** chunk id: 309270, original params: t (module,exports,require) **/
"use strict";
var r = "object" == typeof document && document.all;
module.exports = true === r && true !== r ? function(t) {
  return "function" == typeof t || t === r
} : function(t) {
  return "function" == typeof t
}