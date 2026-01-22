/** Chunk was on 70726 **/
/** chunk id: 429195, original params: e,i,l (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk15285 = require("./15285.js"),
  Chunk961350 = require("./961350.js"),
  Chunk461213 = require("./461213.js"),
  Chunk734066 = require("./734066.js"),
  Chunk652215 = require("./652215.js");

function u(e, i, l) {
  return i in e ? Object.defineProperty(e, i, {
    value: l,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[i] = l, e
}
class d extends Chunk439372.A {
  registerCallback(e) {
    this.callback = e
  }
  unregisterCallback() {
    this.callback = null
  }
  handleRemoteClipTrigger(e, i) {
    let {
      userId: l,
      applicationId: t,
      partyId: u
    } = e;
    if (!(0, s.J)() || l === a.default.getId()) return;
    let d = n.A.getActivities().find(e => e.type === c.$pd.PLAYING && null != e.application_id && e.application_id === t),
      g = r.Ay.getVisibleGame(),
      o = null != d,
      p = (null == g ? true : g.id) === t;
    if (o || p) {
      if (null != u) {
        var b;
        if ((null == d || null == (b = d.party) ? true : b.id) !== u) return
      }
      null != this.callback && null != i && this.callback(l, i)
    }
  }
  constructor(...e) {
    super(...e), u(this, "callback", null), u(this, "actions", {
      CLIPS_REMOTE_TRIGGER: e => this.handleRemoteClipTrigger(e)
    })
  }
}
let g = new d