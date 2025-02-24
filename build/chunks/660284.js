/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";

function r(e) {
  let t = typeof e;
  if ("object" == t) {
    if (Array.isArray(e)) return "array";
    if (null === e) return "null"
  }
  return t
}

function i(e) {
  return null !== e && "object" == typeof e && !Array.isArray(e)
}
n.d(t, {
  Z: () => r,
  b: () => i
})