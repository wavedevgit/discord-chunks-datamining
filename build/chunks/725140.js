/** Chunk was on web.js **/
/** chunk id: 725140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk579806 = require("./579806.js"),
  Chunk246946 = require("./246946.js");

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
  let t = null === i.Z || true === i.Z || null == (e = i.Z.window) ? true : e.setContentProtection;
  if (null == t) return;
  let n = a.Z.enableContentProtection;
  n !== s && (t(n), s = n)
}
class c extends Chunk147913.Z {
  constructor() {
    l(), super(), o(this, "stores", new Map().set(a.Z, l))
  }
}
let u = new c