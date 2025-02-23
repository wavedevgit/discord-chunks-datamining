/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
}), n(757143), n(301563);
var r = n(379082);
let i = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

function o(e) {
  return e.replace(i, "")
}

function a(e) {
  return r.h.has(o(e))
}