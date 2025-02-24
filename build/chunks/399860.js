/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  gw: () => i,
  rE: () => o,
  tk: () => a
}), n(977457), n(47120);
var r = n(911969);

function i(e, t) {
  return e === r.yU.CHAT ? "/" + t : t
}

function o(e, t) {
  return "".concat(e, ":").concat(t)
}

function a(e) {
  return Object.fromEntries(e.map(e => [o(e.id, e.type), e]))
}
n(895924)