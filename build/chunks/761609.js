/** Chunk was on web.js **/
/** chunk id: 761609, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => c
});
var Chunk654861 = require("./654861.js"),
  i = require.n(Chunk654861),
  Chunk413135 = require("./413135.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
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
    return r.writeInt32LE(s(t), 0, true), r.writeInt32LE(l(t), 4, true), r.writeInt32LE(this._randomPrefix, 8, true), r.writeInt32LE(s(this._creationTime), 12, true), r.writeInt32LE(l(this._creationTime), 16, true), r.writeInt32LE(n, 20, true), r.toString("base64")
  }
  constructor() {
    o(this, "_randomPrefix", 0 | Math.floor(0x100000000 * Math.random())), o(this, "_creationTime", i()(Date.now())), o(this, "_sequenceNumber", 0)
  }
}