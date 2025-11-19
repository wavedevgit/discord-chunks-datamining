/** Chunk was on 7279 **/
/** chunk id: 663879, original params: e,i,l (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk594190 = require("./594190.js"),
  Chunk314897 = require("./314897.js"),
  Chunk885110 = require("./885110.js"),
  Chunk924557 = require("./924557.js"),
  Chunk981631 = require("./981631.js");

function u(e, i, l) {
  return i in e ? Object.defineProperty(e, i, {
    value: l,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[i] = l, e
}
class d extends Chunk147913.Z {
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
    if (!(0, s.NS)() || l === a.default.getId()) return;
    let d = n.Z.getActivities().find(e => e.type === c.IIU.PLAYING && null != e.application_id && e.application_id === t),
      g = r.ZP.getVisibleGame(),
      o = null != d,
      b = (null == g ? true : g.id) === t;
    if (o || b) {
      if (null != u) {
        var h;
        if ((null == d || null == (h = d.party) ? true : h.id) !== u) return
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