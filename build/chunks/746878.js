/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";

function r(e, t, n) {
  return "string" == typeof e.content || void 0 === e.content ? e.content : t(e.content, n)
}

function i(e) {
  return "home" === e || "browse" === e || "customize" === e || "guide" === e || "linked-roles" === e
}
n.d(t, {
  S: () => r,
  k: () => i
})