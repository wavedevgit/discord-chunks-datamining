/** Chunk was on 94503 **/
/** chunk id: 774300, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _,
  F: () => E
});
var l, Chunk308528 = require("./308528.js"),
  Chunk843472 = require("./843472.js"),
  Chunk626584 = require("./626584.js"),
  Chunk734057 = require("./734057.js"),
  Chunk927813 = require("./927813.js"),
  Chunk513391 = require("./513391.js");
let c = +Chunk927813.A.Millis.SECOND + 10;
var E = ((l = {})[l.GROUP_DM = 0] = "GROUP_DM", l[l.USER = 1] = "USER", l[l.CHANNEL = 2] = "CHANNEL", l);
class d extends Chunk513391.A {
  _sendInvite(e, t, n, l, r) {
    a.A.sendInvite(e.id, t, n, l).then(() => r(null, true), () => r(null, false))
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
        r.A.ensurePrivateChannel(e.user.id).then(r => {
          let a = s.A.getChannel(r);
          null != a && this._sendInvite(a, e.inviteKey, n, l, t)
        }, () => t(null, false))
    }
  }
  constructor() {
    super(new i.A("InviteQueue"), c)
  }
}
let _ = new d