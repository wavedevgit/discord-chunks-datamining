/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  e: () => i
}), n(47120);
let r = "_errors";

function i(e) {
  return o(e, void 0)
}

function o(e, t) {
  let n = e[r];
  if (null != n && Array.isArray(n)) return n[0];
  for (let [n, i] of Object.entries(e))
    if (n !== r && null != i && "object" == typeof i) return o(i, null != t ? t : n);
  return null
}