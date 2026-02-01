/** Chunk was on 12618 **/
/** chunk id: 313869, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./321073.js");
var Chunk143236 = require("./143236.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk350535 = require("./350535.js"),
  Chunk650583 = require("./650583.js");
let a = [],
  c = (e, t, n) => {
    let r = +!(0, i.isWindows)();
    (e !== l.zY.MOUSE_BUTTON || n !== r) && a.forEach(r => r._handleEvent(e, t, n))
  };
class d extends Chunk143236.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (a = a.filter(e => e !== this)).length && s.Ay.setOnInputEventCallback(null)
  }
  toString() {
    return (0, o.dI)(this.combo)
  }
  _handleEvent(e, t, n) {
    0 === t ? this.combo = this.combo.filter(t => {
      let [r, i] = t;
      return r !== e || i !== n
    }) : (this.combo.push([e, n, (0, o._$)()]), this.emit("change", this))
  }
  constructor() {
    super(),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "combo", []), a.push(this), 1 === a.length && s.Ay.setOnInputEventCallback(c)
  }
}