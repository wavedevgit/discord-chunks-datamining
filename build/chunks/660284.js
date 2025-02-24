/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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