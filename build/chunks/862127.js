/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";

function r(e, t) {
  return e.replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}

function i(e, t) {
  e.classList ? e.classList.remove(t) : "string" == typeof e.className ? e.className = r(e.className, t) : e.setAttribute("class", r(e.className && e.className.baseVal || "", t))
}
n.d(t, {
  Z: () => i
})