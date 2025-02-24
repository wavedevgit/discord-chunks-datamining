/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
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