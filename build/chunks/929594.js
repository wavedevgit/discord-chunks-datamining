/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(972698);

function i(e, t) {
  if ("object" != (0, r.Z)(e) || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (void 0 !== n) {
    var i = n.call(e, t || "default");
    if ("object" != (0, r.Z)(i)) return i;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}