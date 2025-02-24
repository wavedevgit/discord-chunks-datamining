/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
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