/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";

function r(e) {
  if ("object" != typeof e || null === e || !e.hasOwnProperty("oneofKind")) return !1;
  switch (typeof e.oneofKind) {
    case "string":
      if (void 0 === e[e.oneofKind]) return !1;
      return 2 == Object.keys(e).length;
    case "undefined":
      return 1 == Object.keys(e).length;
    default:
      return !1
  }
}
n.d(t, {
  Li: () => r
})