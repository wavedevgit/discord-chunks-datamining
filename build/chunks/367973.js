/** Chunk was on web.js **/
/** chunk id: 367973, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
  if (n.length >= 1 && n.length <= 5) return n;
  throw Error("combination results in an invalid key that has ".concat(n.length, " elements: ").concat(JSON.stringify(n)))
}

function i(e, t) {
  let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
  if (n.length <= 5) return n;
  throw Error("combination results in an invalid prefix key that has ".concat(n.length, " elements: ").concat(JSON.stringify(n)))
}
require.d(exports, {
  $: () => i,
  h: () => r
}), require("./896048.js"), require("./65821.js"), require("./457529.js"), require("./860407.js")