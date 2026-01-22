/** Chunk was on web.js **/
/** chunk id: 187207, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => c
});
var Chunk824120 = require("./824120.js"),
  i = require.n(Chunk824120),
  Chunk264572 = require("./264572.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  return 0 | e.mod(0x100000000).toJSNumber()
}

function l(e) {
  return 0 | e.shiftRight(32).toJSNumber()
}
class c {
  generate(e) {
    let t = i()(e),
      n = 0 | this._sequenceNumber++,
      r = new a.Buffer(24);
    return r.writeInt32LE(o(t), 0, true), r.writeInt32LE(l(t), 4, true), r.writeInt32LE(this._randomPrefix, 8, true), r.writeInt32LE(o(this._creationTime), 12, true), r.writeInt32LE(l(this._creationTime), 16, true), r.writeInt32LE(n, 20, true), r.toString("base64")
  }
  constructor() {
    s(this, "_randomPrefix", 0 | Math.floor(0x100000000 * Math.random())), s(this, "_creationTime", i()(Date.now())), s(this, "_sequenceNumber", 0)
  }
}