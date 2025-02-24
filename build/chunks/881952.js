/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Nd: () => o,
  bk: () => i,
  d3: () => a,
  oP: () => s
});
var r = n(246364);

function i(e) {
  return e === r.wB.APPROVED || e === r.wB.REJECTED
}

function o(e) {
  return e === r.wB.SUBMITTED
}

function a(e) {
  return e.applicationStatus === r.wB.APPROVED && null != e.lastSeen
}

function s(e) {
  return i(e.applicationStatus) && null == e.lastSeen
}