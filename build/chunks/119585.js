/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";

function r(e) {
  let t = !1,
    n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e.charAt(r);
    "_" == i ? t = !0 : /\d/.test(i) ? (n.push(i), t = !0) : t ? (n.push(i.toUpperCase()), t = !1) : 0 == r ? n.push(i.toLowerCase()) : n.push(i)
  }
  return n.join("")
}
n.d(t, {
  c: () => r
})