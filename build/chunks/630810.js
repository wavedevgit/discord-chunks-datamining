/** Chunk was on 27267 **/
/** chunk id: 630810, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v,
  m: () => b
});
var i, Chunk493683 = require("./493683.js"),
  Chunk904245 = require("./904245.js"),
  Chunk710845 = require("./710845.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk651655 = require("./651655.js");
let d = +Chunk70956.Z.Millis.SECOND + 10;
var b = ((i = {})[i.GROUP_DM = 0] = "GROUP_DM", i[i.USER = 1] = "USER", i[i.CHANNEL = 2] = "CHANNEL", i);
class l extends Chunk651655.Z {
  _sendInvite(e, n, t, i, o) {
    a.Z.sendInvite(e.id, n, t, i).then(() => o(null, true), () => o(null, false))
  }
  drain(e, n) {
    let {
      location: t,
      inviteAnalyticsMetadata: i
    } = e;
    switch (e.type) {
      case 0:
      case 2:
        this._sendInvite(e.channel, e.inviteKey, t, i, n);
        break;
      case 1:
        o.Z.ensurePrivateChannel(e.user.id).then(o => {
          let a = s.Z.getChannel(o);
          null != a && this._sendInvite(a, e.inviteKey, t, i, n)
        }, () => n(null, false))
    }
  }
  constructor() {
    super(new Chunk710845.Z("InviteQueue"), d)
  }
}
let v = new l