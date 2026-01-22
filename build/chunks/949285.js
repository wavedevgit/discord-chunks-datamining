/** Chunk was on 70726 **/
/** chunk id: 949285, original params: e,i,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => n
});
var Chunk372684 = require("./372684.js"),
  Chunk429195 = require("./429195.js");
class a {
  start() {
    r.A.registerCallback(this.handleTrigger.bind(this))
  }
  stop() {
    r.A.unregisterCallback()
  }
  getState() {
    return null
  }
  handleTrigger(e, i) {
    this.emitSignal({
      type: t.Gy.DISTRIBUTED,
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