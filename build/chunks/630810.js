/** Chunk was on 69937 **/
/** chunk id: 630810, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  m: () => d
});
var r, Chunk493683 = require("./493683.js"),
  Chunk904245 = require("./904245.js"),
  Chunk710845 = require("./710845.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk651655 = require("./651655.js");
let u = +Chunk70956.Z.Millis.SECOND + 10;
var d = ((r = {})[r.GROUP_DM = 0] = "GROUP_DM", r[r.USER = 1] = "USER", r[r.CHANNEL = 2] = "CHANNEL", r);
class E extends Chunk651655.Z {
  _sendInvite(e, t, n, r, l) {
    i.Z.sendInvite(e.id, t, n, r).then(() => l(null, true), () => l(null, false))
  }
  drain(e, t) {
    let {
      location: n,
      inviteAnalyticsMetadata: r
    } = e;
    switch (e.type) {
      case 0:
      case 2:
        this._sendInvite(e.channel, e.inviteKey, n, r, t);
        break;
      case 1:
        l.Z.ensurePrivateChannel(e.user.id).then(l => {
          let i = s.Z.getChannel(l);
          null != i && this._sendInvite(i, e.inviteKey, n, r, t)
        }, () => t(null, false))
    }
  }
  constructor() {
    super(new a.Z("InviteQueue"), u)
  }
}
let _ = new E