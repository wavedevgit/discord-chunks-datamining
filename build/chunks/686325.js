/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Hg: () => o,
  iP: () => r,
  qK: () => i
});
let r = 30;

function i(e) {
  return 6e4 * r + e.lastUsed - Date.now() <= 0
}

function o(e) {
  return null != e ? Number(e) : 0
}