/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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