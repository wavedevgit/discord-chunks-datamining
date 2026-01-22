/** Chunk was on web.js **/
/** chunk id: 946651, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  return e.replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}

function i(e, t) {
  e.classList ? e.classList.remove(t) : "string" == typeof e.className ? e.className = r(e.className, t) : e.setAttribute("class", r(e.className && e.className.baseVal || "", t))
}
require.d(exports, {
  A: () => i
})