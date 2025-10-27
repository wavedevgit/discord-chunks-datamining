/** Chunk was on 7654 **/
/** chunk id: 630810, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h,
  m: () => c
});
var i, Chunk493683 = require("./493683.js"),
  Chunk904245 = require("./904245.js"),
  Chunk710845 = require("./710845.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk651655 = require("./651655.js");
let d = +Chunk70956.Z.Millis.SECOND + 10;
var c = ((i = {})[i.GROUP_DM = 0] = "GROUP_DM", i[i.USER = 1] = "USER", i[i.CHANNEL = 2] = "CHANNEL", i);
class g extends Chunk651655.Z {
  _sendInvite(e, t, n, i, l) {
    s.Z.sendInvite(e.id, t, n, i).then(() => l(null, true), () => l(null, false))
  }
  drain(e, t) {
    let {
      location: n,
      inviteAnalyticsMetadata: i
    } = e;
    switch (e.type) {
      case 0:
      case 2:
        this._sendInvite(e.channel, e.inviteKey, n, i, t);
        break;
      case 1:
        l.Z.ensurePrivateChannel(e.user.id).then(l => {
          let s = a.Z.getChannel(l);
          null != s && this._sendInvite(s, e.inviteKey, n, i, t)
        }, () => t(null, false))
    }
  }
  constructor() {
    super(new Chunk710845.Z("InviteQueue"), d)
  }
}
let h = new g