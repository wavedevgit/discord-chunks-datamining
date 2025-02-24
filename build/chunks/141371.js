/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(824523),
  i = n(176031);

function o(e, t) {
  if ("object" !== (0, r.Z)(e) || null === e) return e;
  var n = e[i];
  if (void 0 !== n) {
    var o = n.call(e, t || "default");
    if ("object" !== (0, r.Z)(o)) return o;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}