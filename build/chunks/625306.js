/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  IH: () => o,
  qC: () => a
}), n(653041);
let r = 10,
  i = [];

function o(e) {
  for (i.push(e); i.length > r;) i.shift()
}

function a() {
  return i.join(" -> ")
}