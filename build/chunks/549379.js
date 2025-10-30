/** Chunk was on 7279 **/
/** chunk id: 549379, original params: e,t,i (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => s
});
var Chunk894694 = require("./894694.js"),
  Chunk663879 = require("./663879.js");
class n {
  start() {
    Chunk663879.Z.registerCallback(this.handleTrigger.bind(this))
  }
  stop() {
    Chunk663879.Z.unregisterCallback()
  }
  getState() {
    return null
  }
  handleTrigger(e, t) {
    this.emitSignal({
      type: r.Bs.DISTRIBUTED,
      remoteTriggerUserId: e,
      remoteTriggerClipId: t
    })
  }
  constructor(e) {
    ! function(e, t, i) {
      t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    }(this, "emitSignal", true), this.emitSignal = e
  }
}
let s = e => new n(e)