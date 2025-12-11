/** Chunk was on 40283 **/
/** chunk id: 630810, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  m: () => l
});
var t, Chunk493683 = require("./493683.js"),
  Chunk904245 = require("./904245.js"),
  Chunk710845 = require("./710845.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk651655 = require("./651655.js");
let b = +Chunk70956.Z.Millis.SECOND + 10;
var l = ((t = {})[t.GROUP_DM = 0] = "GROUP_DM", t[t.USER = 1] = "USER", t[t.CHANNEL = 2] = "CHANNEL", t);
class v extends Chunk651655.Z {
  _sendInvite(e, a, n, t, i) {
    o.Z.sendInvite(e.id, a, n, t).then(() => i(null, true), () => i(null, false))
  }
  drain(e, a) {
    let {
      location: n,
      inviteAnalyticsMetadata: t
    } = e;
    switch (e.type) {
      case 0:
      case 2:
        this._sendInvite(e.channel, e.inviteKey, n, t, a);
        break;
      case 1:
        i.Z.ensurePrivateChannel(e.user.id).then(i => {
          let o = c.Z.getChannel(i);
          null != o && this._sendInvite(o, e.inviteKey, n, t, a)
        }, () => a(null, false))
    }
  }
  constructor() {
    super(new Chunk710845.Z("InviteQueue"), b)
  }
}
let _ = new v