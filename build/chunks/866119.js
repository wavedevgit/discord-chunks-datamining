/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";

function r(e, t) {
  let n = 0,
    r = Math.min(e.length, t.length);
  for (let i = 0; i < r; i++) n |= e.charCodeAt(i) ^ t.charCodeAt(i);
  return 0 === n && e.length === t.length
}
n.d(t, {
  y: () => r
})