/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  J8: () => a,
  PO: () => o
});
let r = Object.prototype.toString;

function i(e, t) {
  return r.call(e) === `[object ${t}]`
}

function o(e) {
  return i(e, "Object")
}

function a(e) {
  return !!(e && e.then && "function" == typeof e.then)
}