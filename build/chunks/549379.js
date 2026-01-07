/** Chunk was on 7279 **/
/** chunk id: 549379, original params: e,i,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => n
});
var Chunk894694 = require("./894694.js"),
  Chunk663879 = require("./663879.js");
class a {
  start() {
    r.Z.registerCallback(this.handleTrigger.bind(this))
  }
  stop() {
    r.Z.unregisterCallback()
  }
  getState() {
    return null
  }
  handleTrigger(e, i) {
    this.emitSignal({
      type: t.Bs.DISTRIBUTED,
      remoteTriggerUserId: e,
      remoteTriggerClipId: i
    })
  }
  constructor(e) {
    ! function(e, i, l) {
      i in e ? Object.defineProperty(e, i, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[i] = l
    }(this, "emitSignal", true), this.emitSignal = e
  }
}
let n = e => new a(e)