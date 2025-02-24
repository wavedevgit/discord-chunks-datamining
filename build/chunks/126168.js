/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";

function r(e, t) {
  if (e.length < 2) return [];
  let n = [],
    r = e[0];
  for (let i = 1; i < e.length; i++) {
    let o = e[i];
    n.push(t(r, o)), r = o
  }
  return n
}
n.d(t, {
  Z: () => r
}), n(653041)