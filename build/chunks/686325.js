/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Hg: () => o,
  iP: () => r,
  qK: () => i
});
let r = 30;

function i(e) {
  return 60 * r * 1e3 + e.lastUsed - Date.now() <= 0
}

function o(e) {
  return null != e ? Number(e) : 0
}