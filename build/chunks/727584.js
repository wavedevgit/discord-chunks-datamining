/** Chunk was on 19456 **/
"use strict";
var n = r(574369);
t.exports = function(t) {
  return t.which === n.RETURN && (t.getModifierState("Shift") || t.getModifierState("Alt") || t.getModifierState("Control"))
}