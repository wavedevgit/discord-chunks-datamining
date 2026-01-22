/** Chunk was on web.js **/
/** chunk id: 313869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./321073.js");
var Chunk143236 = require("./143236.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk350535 = require("./350535.js"),
  Chunk650583 = require("./650583.js");

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
    (e !== o.zY.MOUSE_BUTTON || n !== r) && c.forEach(r => r._handleEvent(e, t, n))
  };
class d extends Chunk143236.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (c = c.filter(e => e !== this)).length && a.Ay.setOnInputEventCallback(null)
  }
  toString() {
    return (0, s.dI)(this.combo)
  }
  _handleEvent(e, t, n) {
    0 === t ? this.combo = this.combo.filter(t => {
      let [r, i] = t;
      return r !== e || i !== n
    }) : (this.combo.push([e, n, (0, s._$)()]), this.emit("change", this))
  }
  constructor() {
    super(), l(this, "combo", []), c.push(this), 1 === c.length && a.Ay.setOnInputEventCallback(u)
  }
}