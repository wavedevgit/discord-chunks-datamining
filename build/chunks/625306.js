/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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