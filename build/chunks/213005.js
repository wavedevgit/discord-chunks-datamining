/** Chunk was on web.js **/
/** chunk id: 213005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./539854.js");
var Chunk836560 = require("./836560.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk13140 = require("./13140.js"),
  Chunk295907 = require("./295907.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = [],
  u = (e, t, n) => {
    let r = +!(0, i.isWindows)();
    (e !== s.Mo.MOUSE_BUTTON || n !== r) && c.forEach(r => r._handleEvent(e, t, n))
  };
class d extends Chunk836560.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (c = c.filter(e => e !== this)).length && Chunk998502.ZP.setOnInputEventCallback(null)
  }
  toString() {
    return (0, Chunk13140.BB)(this.combo)
  }
  _handleEvent(e, t, n) {
    0 === t ? this.combo = this.combo.filter(t => {
      let [r, i] = t;
      return r !== e || i !== n
    }) : (this.combo.push([e, n, (0, a.dU)()]), this.emit("change", this))
  }
  constructor() {
    super(), l(this, "combo", []), c.push(this), 1 === c.length && Chunk998502.ZP.setOnInputEventCallback(u)
  }
}