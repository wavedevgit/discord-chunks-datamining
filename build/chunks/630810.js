/** Chunk was on 76844 **/
/** chunk id: 630810, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p,
  m: () => d
});
var l, Chunk493683 = require("./493683.js"),
  Chunk904245 = require("./904245.js"),
  Chunk710845 = require("./710845.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk651655 = require("./651655.js");
let c = +Chunk70956.Z.Millis.SECOND + 10;
var d = ((l = {})[l.GROUP_DM = 0] = "GROUP_DM", l[l.USER = 1] = "USER", l[l.CHANNEL = 2] = "CHANNEL", l);
class h extends Chunk651655.Z {
  _sendInvite(e, t, n, l, r) {
    i.Z.sendInvite(e.id, t, n, l).then(() => r(null, true), () => r(null, false))
  }
  drain(e, t) {
    let {
      location: n,
      inviteAnalyticsMetadata: l
    } = e;
    switch (e.type) {
      case 0:
      case 2:
        this._sendInvite(e.channel, e.inviteKey, n, l, t);
        break;
      case 1:
        r.Z.ensurePrivateChannel(e.user.id).then(r => {
          let i = s.Z.getChannel(r);
          null != i && this._sendInvite(i, e.inviteKey, n, l, t)
        }, () => t(null, false))
    }
  }
  constructor() {
    super(new Chunk710845.Z("InviteQueue"), c)
  }
}
let p = new h