/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
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