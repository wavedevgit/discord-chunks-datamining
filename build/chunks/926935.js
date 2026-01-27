/** Chunk was on web.js **/
/** chunk id: 926935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk77729 = require("./77729.js"),
  Chunk351906 = require("./351906.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = false;

function l() {
  var e;
  let t = null === i.A || true === i.A || null == (e = i.A.window) ? true : e.setContentProtection;
  if (null == t) return;
  let n = a.A.enableContentProtection;
  n !== s && (t(n), s = n)
}
class c extends Chunk439372.A {
  constructor() {
    l(), super(), o(this, "stores", new Map().set(a.A, l))
  }
}
let u = new c