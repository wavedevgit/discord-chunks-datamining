/** Chunk was on 60667 **/
/** chunk id: 313869, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./321073.js");
var Chunk143236 = require("./143236.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk350535 = require("./350535.js"),
  Chunk650583 = require("./650583.js");
let o = [],
  c = (e, t, n) => {
    let r = +!(0, i.isWindows)();
    (e !== a.zY.MOUSE_BUTTON || n !== r) && o.forEach(r => r._handleEvent(e, t, n))
  };
class d extends Chunk143236.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (o = o.filter(e => e !== this)).length && l.Ay.setOnInputEventCallback(null)
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
    super(),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "combo", []), o.push(this), 1 === o.length && l.Ay.setOnInputEventCallback(c)
  }
}