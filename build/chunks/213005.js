/** Chunk was on 66181 **/
/** chunk id: 213005, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./539854.js");
var Chunk836560 = require("./836560.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk13140 = require("./13140.js"),
  Chunk981631 = require("./981631.js");
let o = [],
  c = (e, t, n) => {
    let i = +!(0, r.isWindows)();
    (e !== l.MoX.MOUSE_BUTTON || n !== i) && o.forEach(i => i._handleEvent(e, t, n))
  };
class d extends Chunk836560.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (o = o.filter(e => e !== this)).length && Chunk998502.ZP.setOnInputEventCallback(null)
  }
  toString() {
    return (0, Chunk13140.BB)(this.combo)
  }
  _handleEvent(e, t, n) {
    0 === t ? this.combo = this.combo.filter(t => {
      let [i, r] = t;
      return i !== e || r !== n
    }) : (this.combo.push([e, n, (0, a.dU)()]), this.emit("change", this))
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
      }(this, "combo", []), o.push(this), 1 === o.length && Chunk998502.ZP.setOnInputEventCallback(c)
  }
}